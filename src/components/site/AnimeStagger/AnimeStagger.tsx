import { useEffect, useRef } from "react";
import type { ReactNode } from "react";
import { createTimeline, stagger } from "animejs";

interface AnimeStaggerProps {
  children: ReactNode;
  className?: string;
  y?: number;
  duration?: number;
  staggerMs?: number;
  threshold?: number;
}

export function AnimeStagger({
  children,
  className,
  y = 28,
  duration = 700,
  staggerMs = 90,
  threshold = 0.15,
}: AnimeStaggerProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const items = Array.from(el.children) as HTMLElement[];
    if (!items.length) return;

    items.forEach((item) => {
      item.style.opacity = "0";
      item.style.transform = `translateY(${y}px)`;
    });

    const timeline = createTimeline({ autoplay: false });
    timeline.add(items, {
      opacity: 1,
      translateY: 0,
      duration,
      ease: "outExpo",
      delay: stagger(staggerMs),
      onComplete: () => {
        items.forEach((item) => {
          item.style.opacity = "";
          item.style.transform = "";
        });
      },
    });

    let played = false;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting) && !played) {
          played = true;
          timeline.play();
          observer.disconnect();
        }
      },
      { threshold },
    );
    observer.observe(el);

    return () => {
      observer.disconnect();
      timeline.cancel();
    };
  }, [y, duration, staggerMs, threshold]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
