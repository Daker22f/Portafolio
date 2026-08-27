import { ArrowUpRight } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import type { Project } from "@/lib/site-data";

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.article
      initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.85, delay: index * 0.08, ease: [0.32, 0.72, 0, 1] }}
      className="group relative overflow-hidden rounded-4xl border border-hairline bg-card shadow-lift"
    >
      <a
        href={project.url}
        target="_blank"
        rel="noreferrer noopener"
        className="block focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
      >
        <div className="relative aspect-16/10 overflow-hidden bg-muted">
          <img
            src={project.image}
            alt={`Vista previa del proyecto ${project.name}`}
            loading="lazy"
            className="size-full object-cover transition-transform duration-700 ease-hig group-hover:scale-[1.04]"
          />
          <div className="absolute inset-x-0 bottom-0 h-1/2 bg-linear-to-t from-card to-transparent" />
        </div>

        <div className="relative -mt-16 p-6 sm:p-8">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                {project.year} · {project.tagline}
              </p>
              <h3 className="mt-2 font-display text-2xl font-semibold tracking-tight sm:text-3xl">
                {project.name}
              </h3>
            </div>
            <span className="glass inline-flex size-11 shrink-0 items-center justify-center rounded-full transition-transform duration-500 ease-hig group-hover:rotate-45">
              <ArrowUpRight className="size-5" aria-hidden="true" />
            </span>
          </div>

          <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
            {project.description}
          </p>

          <ul className="mt-6 flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <li
                key={tech}
                className="rounded-full border border-border bg-elevated px-3 py-1 text-xs font-medium text-foreground/90"
              >
                {tech}
              </li>
            ))}
          </ul>
        </div>
      </a>
    </motion.article>
  );
}
