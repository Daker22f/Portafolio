import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/lib/site-data";

type ProjectStackCardProps = {
  project: Project;
  index: number;
};

export function ProjectStackCard({ project, index }: ProjectStackCardProps) {
  return (
    <a
      href={project.url}
      target="_blank"
      rel="noreferrer noopener"
      className="stack-card-project-link"
      aria-label={`Ver proyecto ${project.name}`}
    >
      <div className="scroll-stack-project-inner">
        <div className="scroll-stack-project-media">
          <span className="scroll-stack-project-index">0{index + 1}</span>
          <img
            src={project.image}
            alt={`Vista previa del proyecto ${project.name}`}
            loading="lazy"
            decoding="async"
          />
        </div>

        <div className="scroll-stack-project-body">
          <p className="scroll-stack-project-eyebrow">
            {project.year} · {project.tagline}
          </p>
          <h3 className="scroll-stack-project-title">{project.name}</h3>
          <p className="scroll-stack-project-desc">{project.description}</p>
          <ul className="scroll-stack-project-stack">
            {project.stack.map((tech) => (
              <li key={tech}>{tech}</li>
            ))}
          </ul>
          <span className="scroll-stack-project-link">
            Ver proyecto <ArrowUpRight className="size-4" aria-hidden="true" />
          </span>
        </div>
      </div>
    </a>
  );
}
