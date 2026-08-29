import { Link } from "@tanstack/react-router";
import { ArrowRight, Bot, Layers, Sparkles } from "lucide-react";
import type { ComponentType, ReactNode } from "react";
import { AnimeHeading } from "@/components/site/AnimeHeading/AnimeHeading";
import { AnimeReveal } from "@/components/site/AnimeReveal/AnimeReveal";
import { projects as siteProjects } from "@/lib/site-data";

import "./Projects.css";

type Project = {
  id: string;
  icon: ComponentType<{ className?: string }>;
  iconLabel: string;
  title: string;
  description: string;
  meta: string;
  imageRatio: number;
  image: string;
  imageAlt: string;
};

const PROJECT_ICONS: Record<string, ComponentType<{ className?: string }>> = {
  brackix: Layers,
  undamned: Sparkles,
  kwixell: Bot,
};

const PROJECTS: Project[] = siteProjects.map((p) => ({
  id: p.slug,
  icon: PROJECT_ICONS[p.slug] ?? Layers,
  iconLabel: p.name,
  title: p.tagline,
  description: p.description,
  meta: `${p.year} · ${p.stack[0] ?? ""}`,
  imageRatio: 1024 / 768,
  image: p.image,
  imageAlt: `${p.name} — captura del proyecto`,
}));

export type ProjectsProps = {
  withHeadline?: boolean;
  viewMoreVisible?: boolean;
};

export function Projects({
  withHeadline = false,
  viewMoreVisible = false,
}: ProjectsProps): ReactNode {
  const items = viewMoreVisible ? PROJECTS.slice(0, 4) : PROJECTS;

  return (
    <section className="relative w-full">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        {withHeadline ? (
          <div className="flex flex-col items-center gap-5 pt-12 pb-10 text-center sm:pt-20 sm:pb-14">
            <AnimeHeading className="title" text="Proyectos en producción" />
          </div>
        ) : null}

        <div className="columns-1 gap-6 md:columns-2 md:gap-7">
          {items.map((project, index) => (
            <AnimeReveal
              key={project.id}
              delay={Math.min(index * 0.08, 0.32)}
              className="mb-6 break-inside-avoid md:mb-7"
            >
              <article className="project-card flex flex-col gap-4 rounded-3xl border border-border bg-elevated p-3 sm:p-3.5">
                <header className="flex items-center gap-2.5 px-1 pt-2">
                  <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-border bg-background">
                    <project.icon className="size-3.5 text-foreground" aria-hidden="true" />
                  </span>
                  <span className="text-sm font-medium tracking-tight text-foreground">
                    {project.iconLabel}
                  </span>
                </header>

                <div
                  className="project-card__image relative w-full overflow-hidden rounded-2xl bg-muted ring-1 ring-border"
                  style={{ aspectRatio: project.imageRatio }}
                >
                  <div className="project-card__image-inner">
                    <img
                      src={project.image}
                      alt={project.imageAlt}
                      loading="lazy"
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2.5 px-1 pb-1">
                  <h3 className="text-lg font-medium leading-snug tracking-tight text-foreground sm:text-xl">
                    {project.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {project.description}
                  </p>
                </div>

                <p className="px-1 pb-2 text-xs tracking-tight text-muted-foreground">
                  {project.meta}
                </p>
              </article>
            </AnimeReveal>
          ))}
        </div>

        {viewMoreVisible ? (
          <div className="mt-12 flex justify-center sm:mt-16">
            <Link
              to="/proyectos"
              className="group inline-flex cursor-pointer items-center gap-2 rounded-full border border-border bg-elevated px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-elevated"
            >
              Ver todos los proyectos
              <ArrowRight
                className="size-4 transition-transform duration-300 group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </Link>
          </div>
        ) : null}
      </div>
    </section>
  );
}
