import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Marquee } from "@/components/site/Marquee";
import TextLoop from "@/components/site/TextLoop/TextLoop";
import TiltedCard from "@/components/site/TiltedCard/TiltedCard";
import ScrollExpand from "@/components/site/ScrollExpand/ScrollExpand";
import { Projects } from "@/components/site/Projects/Projects";
import { AnimeReveal } from "@/components/site/AnimeReveal/AnimeReveal";
import { AnimeStagger } from "@/components/site/AnimeStagger/AnimeStagger";
import { Hero } from "@/components/site/Hero/Hero";
import { disciplines, ogImage, tools } from "@/lib/site-data";

const title = "Robert Carrasco";
const description =
  "Diseño y desarrollo interfaces web rápidas y accesibles: React, TypeScript, Next.js y arquitecturas back-end limpias. Mira mis proyectos.";

export const Route = createFileRoute("/")({
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
  component: Index,
});

function Index() {
  return (
    <>
      <Hero />

      <Projects withHeadline viewMoreVisible />

      <section className="px-4 sm:px-6">
        <ScrollExpand
          src="/scroll-expand-hero.svg"
          alt="Tres ventanas de productos web en desarrollo"
          title="Proyectos"
          scrollHint="Continúa haciendo scroll"
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
            Del diseño al despliegue
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm text-white/75 sm:text-base">
            Diseño, interfaz, lógica de negocio y datos: todo el ciclo en un mismo flujo.
          </p>
        </ScrollExpand>
      </section>

      <section className="px-4 py-20 sm:py-28">
        <div className="mx-auto max-w-5xl">
          <SectionHeading
            eyebrow="Cómo trabajo"
            title="Del diseño al despliegue"
            description="Cubro el ciclo completo: interfaz, lógica de negocio y datos, con arquitectura limpia y código mantenible."
          />

          <AnimeStagger className="mt-12 grid gap-10 sm:gap-8 md:grid-cols-3">
            {disciplines.map((d) => (
              <div key={d.title} className="flex h-full flex-col items-center text-center">
                <div className="w-full">
                  <TiltedCard
                    imageSrc={d.image}
                    altText={`Área: ${d.title}`}
                    captionText={d.title}
                    containerHeight={300}
                    containerWidth="100%"
                    imageHeight={300}
                    imageWidth="100%"
                    scaleOnHover={1.06}
                    rotateAmplitude={12}
                    showMobileWarning={false}
                    showTooltip={false}
                    displayOverlayContent
                    overlayContent={<span className="tilted-card-badge">{d.title}</span>}
                  />
                </div>
                <h3 className="mt-5 font-display text-xl font-semibold tracking-tight">
                  {d.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {d.description}
                </p>
                <ul className="mt-5 flex flex-wrap justify-center gap-1.5">
                  {d.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-full bg-elevated px-2.5 py-1 text-xs text-foreground/80"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </AnimeStagger>
        </div>
      </section>

      <section className="py-10">
        <AnimeReveal>
          <p className="mb-6 text-center text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground">
            Mis herramientas
          </p>
          <Marquee items={tools} />
        </AnimeReveal>
      </section>

      <section className="px-4 py-24">
        <AnimeReveal className="mx-auto max-w-4xl" y={34} duration={950}>
          <div className="hero-glow glass glass-sheen overflow-hidden rounded-4xl px-8 py-16 text-center sm:px-14">
            <h2 className="display-tight text-4xl text-balance sm:text-5xl">
              Hablemos de tu próximo producto
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
              Cuéntame qué necesitas construir y te respondo con una propuesta clara.
            </p>
            <Link
              to="/contacto"
              className="mt-8 inline-flex min-h-12 items-center gap-1.5 rounded-full bg-primary px-7 text-sm font-semibold text-primary-foreground shadow-glow transition-transform duration-300 ease-hig hover:scale-[1.03]"
            >
              Enviar un mensaje <ArrowUpRight className="size-4" />
            </Link>
          </div>
        </AnimeReveal>
      </section>
    </>
  );
}
