import { Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, Star, Users } from "lucide-react";
import type { ReactNode } from "react";
import { AnimeHeading } from "@/components/site/AnimeHeading/AnimeHeading";
import { AnimeReveal } from "@/components/site/AnimeReveal/AnimeReveal";
import { projects as siteProjects } from "@/lib/site-data";

import "./Projects.css";

const GITHUB_USERNAME = "daker22f";
const GITHUB_AVATAR = "https://github.com/Daker22f.png";

type Project = {
  id: string;
  name: string;
  description: string;
  stack: string[];
  stars: number;
  collaborators: number;
  url: string;
  image: string;
};

const PROJECTS: Project[] = siteProjects.map((p) => ({
  id: p.slug,
  name: p.name,
  description: p.description,
  stack: p.stack,
  stars: p.stars,
  collaborators: p.collaborators,
  url: p.url,
  image: p.image,
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
              <a
                href={project.url}
                target="_blank"
                rel="noreferrer noopener"
                className="project-card group/card flex flex-col gap-4 rounded-3xl border border-border bg-elevated p-5 transition-all focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
              >
                <div className="project-card__image relative aspect-16/9 w-full overflow-hidden rounded-2xl border border-border/50 bg-muted">
                  <img
                    src={project.image}
                    alt={`Vista previa de ${project.name}`}
                    loading="lazy"
                    decoding="async"
                    className="project-card__image-inner size-full object-cover"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-background/60 via-transparent to-transparent opacity-80" />
                  <span className="absolute right-3 top-3 inline-flex size-8 items-center justify-center rounded-full bg-background/80 text-foreground shadow-sm backdrop-blur-md transition-transform duration-300 group-hover/card:scale-110 group-hover/card:rotate-45">
                    <ArrowUpRight className="size-4" aria-hidden="true" />
                  </span>
                </div>

                <header className="flex items-start justify-between gap-3">
                  <div className="flex min-w-0 flex-col">
                    <span className="text-xs tracking-tight text-muted-foreground">
                      {GITHUB_USERNAME}
                    </span>
                    <h3 className="mt-0.5 truncate font-display text-lg font-semibold tracking-tight text-foreground transition-colors group-hover/card:text-primary sm:text-xl">
                      {project.name}
                    </h3>
                  </div>
                  <img
                    src={GITHUB_AVATAR}
                    alt="Foto de perfil de GitHub"
                    loading="lazy"
                    className="size-11 shrink-0 rounded-full bg-muted ring-1 ring-border"
                  />
                </header>

                <p className="text-sm leading-relaxed text-muted-foreground">
                  {project.description}
                </p>

                <div className="flex flex-wrap items-center gap-x-5 gap-y-1 text-xs text-muted-foreground">
                  <span className="inline-flex items-center gap-1.5">
                    <Star className="size-3.5" aria-hidden="true" />
                    {project.stars} estrellas
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <Users className="size-3.5" aria-hidden="true" />
                    {project.collaborators} colaboradores
                  </span>
                </div>

                <hr className="border-hairline" />

                <footer className="flex flex-wrap items-center justify-between gap-2">
                  <span className="truncate text-sm font-medium text-foreground">
                    {project.name}
                  </span>
                  <div className="flex flex-wrap justify-end gap-1.5">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full bg-background px-2.5 py-1 text-xs text-foreground/80 ring-1 ring-border"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </footer>
              </a>
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
