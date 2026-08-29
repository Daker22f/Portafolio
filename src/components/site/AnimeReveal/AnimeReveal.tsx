import { useEffect, useRef } from "react";
import type { ReactNode } from "react";
import { animate } from "animejs";

interface AnimeRevealProps {
  children: ReactNode;
  className?: string;
  y?: number;
  duration?: number;
  delay?: number;
  ease?: string;
  threshold?: number;
}

export function AnimeReveal({
  children,
  className,
  y = 26,
  duration = 850,
  delay = 0,
  ease = "outExpo",
  threshold = 0.2,
}: AnimeRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    el.style.opacity = "0";
    el.style.transform = `translateY(${y}px)`;

    const tween = animate(el, {
      opacity: 1,
      translateY: 0,
      duration,
      delay,
      ease,
      autoplay: false,
      onComplete: () => {
        el.style.opacity = "";
        el.style.transform = "";
      },
    });

    let played = false;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting) && !played) {
          played = true;
          tween.play();
          observer.disconnect();
        }
      },
      { threshold },
    );
    observer.observe(el);

    return () => {
      observer.disconnect();
      tween.cancel();
    };
  }, [y, duration, delay, ease, threshold]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
