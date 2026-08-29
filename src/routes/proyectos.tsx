import { createFileRoute } from "@tanstack/react-router";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Projects } from "@/components/site/Projects/Projects";
import Antigravity from "@/components/site/Antigravity/Antigravity";
import LaserFlow from "@/components/LaserFlow/LaserFlow";
import { ogImage } from "@/lib/site-data";

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
      <section className="relative w-full overflow-hidden">
        <div className="absolute inset-0" aria-hidden="true">
          <LaserFlow
            color="#f5f4f3"
            backgroundColor="#0a0a0f"
            wispDensity={0.8}
            flowSpeed={0.2}
            flowStrength={0.1}
            fogIntensity={0.2}
            fogScale={0.2}
            wispSpeed={10}
            wispIntensity={3}
            verticalSizing={1.5}
            horizontalSizing={0.7}
            decay={1.5}
            falloffStart={1.5}
          />
        </div>
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-linear-to-b from-transparent to-background" />
      </section>

      <section className="hero-glow relative w-full overflow-hidden">
        <div className="absolute inset-0" aria-hidden="true">
          <Antigravity
            count={300}
            magnetRadius={6}
            ringRadius={7}
            waveSpeed={0.4}
            waveAmplitude={1}
            particleSize={1.5}
            lerpSpeed={0.05}
            color="#f5f4f3"
            autoAnimate
            particleVariance={1}
            rotationSpeed={0}
            depthFactor={1}
            pulseSpeed={3}
            particleShape="capsule"
            fieldStrength={10}
          />
        </div>
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-linear-to-b from-transparent to-background" />

        <div className="relative mx-auto w-full max-w-6xl px-4 pt-44 pb-28 sm:px-6 sm:pt-56">
          <SectionHeading
            eyebrow="Portafolio"
            title="Proyectos"
            description="Plataformas, sitios de producto y experiencias interactivas diseñadas y desarrolladas de punta a punta."
          />
        </div>
      </section>

      <section className="pt-12">
        <Projects withHeadline />
      </section>
    </>
  );
}
