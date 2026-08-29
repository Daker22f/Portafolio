import { useEffect, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { createTimeline, stagger } from "animejs";
import DepthCarousel from "@/components/site/DepthCarousel/DepthCarousel";
import { AnimeHeading } from "@/components/site/AnimeHeading/AnimeHeading";
import { AnimeReveal } from "@/components/site/AnimeReveal/AnimeReveal";
import { projects } from "@/lib/site-data";

export function ProjectShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);
  const rootRef = useRef<HTMLDivElement>(null);
  const introPlayedRef = useRef(false);
  const skipFirstSwapRef = useRef(true);

  const project = projects[activeIndex] ?? projects[0]!;

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const stage = root.querySelector<HTMLElement>(".ec-stage");
    const detailItems = Array.from(root.querySelectorAll<HTMLElement>(".ec-detail__item"));
    if (!stage) return;

    stage.style.opacity = "0";
    stage.style.transform = "translate3d(0, 32px, 0) scale(0.92)";
    detailItems.forEach((item) => {
      item.style.opacity = "0";
      item.style.transform = "translate3d(0, 24px, 0)";
    });

    const clear = () => {
      stage.style.opacity = "";
      stage.style.transform = "";
      Array.from(root.querySelectorAll<HTMLElement>(".ec-detail__item")).forEach((item) => {
        item.style.opacity = "";
        item.style.transform = "";
      });
      introPlayedRef.current = true;
    };

    const timeline = createTimeline({ autoplay: false });
    timeline
      .add(detailItems, {
        opacity: 1,
        translateY: 0,
        duration: 620,
        ease: "outExpo",
        delay: stagger(60),
      })
      .add(
        stage,
        {
          opacity: 1,
          translateY: 0,
          scale: 1,
          duration: 950,
          ease: "outExpo",
          onComplete: clear,
        },
        "-=300",
      );

    let played = false;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting) && !played) {
          played = true;
          timeline.play();
          observer.disconnect();
        }
      },
      { threshold: 0.3 },
    );
    observer.observe(root);

    return () => {
      observer.disconnect();
      timeline.cancel();
    };
  }, []);

  useEffect(() => {
    if (skipFirstSwapRef.current) {
      skipFirstSwapRef.current = false;
      return;
    }
    if (!introPlayedRef.current) return;
    const root = rootRef.current;
    if (!root) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const detail = root.querySelector<HTMLElement>(".ec-detail");
    const items = detail
      ? Array.from(detail.querySelectorAll<HTMLElement>(".ec-detail__item"))
      : [];
    if (!items.length) return;

    items.forEach((item) => {
      item.style.opacity = "0";
      item.style.transform = "translate3d(0, 22px, 0)";
    });

    const timeline = createTimeline({ autoplay: false });
    timeline.add(items, {
      opacity: 1,
      translateY: 0,
      duration: 620,
      ease: "outExpo",
      delay: stagger(55),
      onComplete: () => {
        items.forEach((item) => {
          item.style.opacity = "";
          item.style.transform = "";
        });
      },
    });
    timeline.play();
    return () => {
      timeline.cancel();
    };
  }, [activeIndex]);

  return (
    <div ref={rootRef}>
      <div className="text-center">
        <AnimeHeading className="title mt-8 sm:mt-12" text="Proyectos en producción" />
      </div>

      <div className="lg:grid lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:items-stretch lg:gap-14">
        <div className="lg:h-[520px] lg:flex lg:flex-col lg:justify-end">
          <div className="ec-detail mt-10 lg:mt-0" key={activeIndex}>
            <p className="ec-detail__item inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-primary">
              <span className="inline-block size-1.5 rounded-full bg-primary" aria-hidden="true" />
              {project.year}
            </p>
            <h3 className="ec-detail__item mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl">
              {project.name}
            </h3>
            <p className="ec-detail__item mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
              {project.description}
            </p>
            <a
              className="ec-detail__item mt-6 inline-flex min-h-11 items-center gap-1.5 rounded-full border border-border px-5 text-sm font-medium transition-colors hover:bg-elevated"
              href={project.url}
              target="_blank"
              rel="noreferrer noopener"
            >
              Ver {project.name} <ArrowUpRight className="size-4" />
            </a>
          </div>
        </div>

        <div className="ec-stage relative mt-10 h-[440px] sm:h-[520px] lg:mt-0">
          <DepthCarousel
            items={projects.map((p) => ({ image: p.image, alt: p.name }))}
            depth={220}
            spread={90}
            tilt={22}
            tiltDirection="right"
            perspective={1400}
            visibleCards={4}
            falloff={0.2}
            blur={6}
            autoplay={false}
            loop
            cardWidth={300}
            cardHeight={380}
            radius={18}
            tint="#05060a"
            duration={700}
            ease="power3.out"
            autoplayDelay={3200}
            showControls
            showIndicators
            onChange={(index) => setActiveIndex(index)}
          />
        </div>
      </div>

      <AnimeReveal className="mt-16 text-center">
        <Link
          to="/proyectos"
          className="inline-flex min-h-12 items-center gap-1.5 rounded-full border border-border px-6 text-sm font-medium transition-colors hover:bg-elevated"
        >
          Ver todos los proyectos <ArrowUpRight className="size-4" />
        </Link>
      </AnimeReveal>
    </div>
  );
}
