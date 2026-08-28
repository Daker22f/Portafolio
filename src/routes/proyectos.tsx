import { createFileRoute } from "@tanstack/react-router";
import { ProjectCard } from "@/components/site/ProjectCard";
import { SectionHeading } from "@/components/site/SectionHeading";
import { ogImage, projects } from "@/lib/site-data";

const title = "Proyectos — Robert Carrasco";
const description =
  "Brackix, Undamned y Kwixell: productos web construidos con React, TypeScript, Next.js y Tailwind CSS.";

export const Route = createFileRoute("/proyectos")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:image", content: ogImage },
      { name: "twitter:image", content: ogImage },
    ],
  }),
  component: ProyectosPage,
});

function ProyectosPage() {
  return (
    <section className="hero-glow px-4 pt-36 pb-24 sm:pt-44">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          eyebrow="Portafolio"
          title="Todo el trabajo"
          description="Una selección de plataformas, sitios de producto y experiencias interactivas que he diseñado y desarrollado."
        />

        <div className="mt-14 grid gap-8">
          {projects.map((project, i) => (
            <ProjectCard key={project.slug} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
