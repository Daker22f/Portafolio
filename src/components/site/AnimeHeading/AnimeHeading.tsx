import { useEffect, useRef } from "react";
import { animate, stagger } from "animejs";
import "./AnimeHeading.css";

interface AnimeHeadingProps {
  text: string;
  className?: string;
  staggerDelay?: number;
}

export function AnimeHeading({ text, className = "", staggerDelay = 50 }: AnimeHeadingProps) {
  const rootRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      root.querySelectorAll(".anime-heading__char").forEach((char) => {
        (char as HTMLElement).style.opacity = "1";
        (char as HTMLElement).style.transform = "none";
      });
      return;
    }

    const chars = Array.from(root.querySelectorAll<HTMLElement>(".anime-heading__char"));

    const tween = animate(chars, {
      translateY: 0,
      rotate: 0,
      opacity: 1,
      duration: 900,
      ease: "outExpo",
      delay: stagger(staggerDelay, { from: "center" }),
      autoplay: false,
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
      { threshold: 0.5 },
    );
    observer.observe(root);

    return () => {
      observer.disconnect();
      tween.cancel();
    };
  }, [text, staggerDelay]);

  const words = text.split(" ");

  return (
    <h2 ref={rootRef} className={`anime-heading ${className}`.trim()} aria-label={text}>
      {words.map((word, wordIndex) => (
        <span className="anime-heading__word" aria-hidden="true" key={wordIndex}>
          {word.split("").map((char, charIndex) => (
            <span className="anime-heading__char" key={charIndex}>
              {char}
            </span>
          ))}
        </span>
      ))}
    </h2>
  );
}
