import { Children, useLayoutEffect, useRef } from "react";
import type { ReactNode } from "react";

import "./ScrollStack.css";

export interface ScrollStackItemProps {
  itemClassName?: string;
  children: ReactNode;
}

export const ScrollStackItem: React.FC<ScrollStackItemProps> = ({
  children,
  itemClassName = "",
}) => (
  <div className="scroll-stack-slide">
    <div className={`scroll-stack-card ${itemClassName}`.trim()}>{children}</div>
  </div>
);

interface ScrollStackProps {
  className?: string;
  children: ReactNode;
  /** Position (as a viewport percentage) where the front card sits. */
  stackPosition?: string;
  /** Vertical gap between stacked cards, in px. */
  itemDistance?: number;
  /** Smallest scale applied to cards furthest from the front. */
  baseScale?: number;
  onStackComplete?: () => void;
}

/**
 * Pinned card-stack scrolling.
 *
 * The section is given `count * 100vh` of scroll room while an inner sticky
 * stage stays glued to the viewport. As you scroll, each card moves through
 * the stack in turn: it enters from below, becomes the front card, and then
 * slides above to make room for the next one. The wrapper simply ends after
 * the last card, so the page drops naturally into the following section
 * (no lingering spacer, no empty black zone).
 */
const ScrollStack: React.FC<ScrollStackProps> = ({
  children,
  className = "",
  stackPosition = "16%",
  itemDistance = 28,
  baseScale = 0.8,
  onStackComplete,
}) => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const completeRef = useRef(false);
  const itemCount = Children.count(children);

  useLayoutEffect(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    const slides = Array.from(wrapper.querySelectorAll<HTMLElement>(".scroll-stack-slide"));
    if (!slides.length) return;

    let rafId = 0;
    let disposed = false;

    const metrics = { start: 0, size: 1, stackTop: 0 };

    const measure = () => {
      const rect = wrapper.getBoundingClientRect();
      metrics.start = rect.top + window.scrollY;
      metrics.size = window.innerHeight;
      const parsed = parseFloat(String(stackPosition));
      metrics.stackTop = ((Number.isFinite(parsed) ? parsed : 16) / 100) * metrics.size;
    };

    const reduceMotion =
      typeof window.matchMedia !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const render = () => {
      rafId = 0;
      if (disposed) return;

      const { start, size, stackTop } = metrics;
      const s = (window.scrollY - start) / size;

      slides.forEach((slide, i) => {
        const depth = Math.abs(i - s);

        if (reduceMotion) {
          slide.style.transform = `translate3d(0, ${Math.round(stackTop + i * itemDistance)}px, 0) scale(1)`;
          slide.style.opacity = "1";
          slide.style.zIndex = String(itemCount - i);
          return;
        }

        const ty = stackTop + (i - s) * itemDistance;
        const scale = Math.round(Math.max(baseScale, 1 - depth * 0.06) * 1000) / 1000;
        const opacity =
          depth <= 0.6 ? 1 : Math.round(Math.max(0.35, 1 - (depth - 0.6) * 0.55) * 100) / 100;
        const z = Math.max(1, itemCount - Math.round(depth));

        slide.style.transform = `translate3d(0, ${Math.round(ty)}px, 0) scale(${scale})`;
        slide.style.opacity = String(opacity);
        slide.style.zIndex = String(z);
      });

      if (onStackComplete) {
        const last = slides.length - 1;
        const lastD = last - s;
        if (!completeRef.current && s >= last - 1 && lastD <= 0.5) {
          completeRef.current = true;
          onStackComplete();
        }
      }
    };

    const requestRender = () => {
      if (!rafId) rafId = requestAnimationFrame(render);
    };

    measure();
    render();

    if (reduceMotion) return;

    window.addEventListener("resize", requestRender, { passive: true });
    window.addEventListener("scroll", requestRender, { passive: true });

    return () => {
      disposed = true;
      if (rafId) cancelAnimationFrame(rafId);
      window.removeEventListener("resize", requestRender);
      window.removeEventListener("scroll", requestRender);
    };
  }, [itemCount, stackPosition, itemDistance, baseScale, onStackComplete]);

  return (
    <div
      className={`scroll-stack ${className}`.trim()}
      ref={wrapperRef}
      style={{ height: `${itemCount * 100}vh` }}
    >
      <div className="scroll-stack-stage">{children}</div>
    </div>
  );
};

export default ScrollStack;
