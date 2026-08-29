import { createFileRoute } from "@tanstack/react-router";
import { ProjectCard } from "@/components/site/ProjectCard";
import { SectionHeading } from "@/components/site/SectionHeading";
import ScrollExpand from "@/components/site/ScrollExpand/ScrollExpand";
import DriftWall from "@/components/site/DriftWall/DriftWall";
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
    <>
      <ScrollExpand
        src="/scroll-expand-hero.svg"
        alt="Tres ventanas de productos web en desarrollo"
        title="Todo el trabajo"
        scrollHint="Sigue haciendo scroll"
        mediaZoom={1.35}
        startWidth={42}
        startHeight={58}
        startRadius={24}
        endRadius={0}
        scrollDistance={1.2}
        holdDistance={0.35}
        smoothing={0.1}
        overlayScrim={0.45}
        useWindowScroll
        enabled
      >
        <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-5xl">
          El portafolio
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-sm text-white/75 sm:text-base">
          Plataformas, sitios de producto y experiencias interactivas diseñadas y desarrolladas de
          punta a punta.
        </p>
      </ScrollExpand>

      <section className="hero-glow px-4 pt-24 pb-24 sm:pt-32">
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

      <section className="px-4 pb-16">
        <h2 className="sr-only">Todos los proyectos en el muro</h2>
        <div className="relative mx-auto" style={{ height: 620 }}>
          <DriftWall
            items={projects.map((p) => ({ image: p.image, title: p.name, href: p.url }))}
            columns={5}
            tileWidth={200}
            tileHeight={132}
            gap={18}
            radius={14}
            tilt={16}
            turn={-14}
            roll={0}
            perspective={1200}
            depth={120}
            speed={42}
            direction="up"
            variance={0.45}
            parallax={0.6}
            pauseOnHover={false}
            lift={64}
            fade={0.6}
            dim={0.55}
            grayscale={false}
            overlayColor="#060010"
          />
        </div>
      </section>
    </>
  );
}
