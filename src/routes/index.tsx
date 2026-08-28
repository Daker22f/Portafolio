import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useReducedMotion } from "motion/react";
import { ArrowUpRight, Github } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { ProjectStackCard } from "@/components/site/ProjectStackCard";
import { Marquee } from "@/components/site/Marquee";
import PixelBlast from "@/components/site/PixelBlast/PixelBlast";
import ScrollStack, { ScrollStackItem } from "@/components/site/ScrollStack/ScrollStack";
import ScrollFloat from "@/components/site/ScrollFloat/ScrollFloat";
import TextLoop from "@/components/site/TextLoop/TextLoop";
import TiltedCard from "@/components/site/TiltedCard/TiltedCard";
import { disciplines, ogImage, profile, projects, stats, tools } from "@/lib/site-data";

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

function Hero() {
  const reduceMotion = useReducedMotion();
  const ease = [0.32, 0.72, 0, 1] as const;

  return (
    <section className="relative overflow-hidden px-4 pt-36 pb-24 sm:pt-44 sm:pb-32">
      {/* Animated pixel background */}
      <div className="absolute inset-0" aria-hidden="true">
        <PixelBlast
          variant="square"
          pixelSize={3}
          color="#9da9ff"
          patternScale={1.4}
          patternDensity={1}
          pixelSizeJitter={0.15}
          enableRipples
          rippleSpeed={0.35}
          rippleThickness={0.12}
          rippleIntensityScale={1.1}
          liquid={false}
          speed={0.5}
          edgeFade={0.34}
          transparent
        />
        <div className="hero-glow absolute inset-0" />
        <div className="ambient-orb animate-orb -top-28 left-1/2 h-80 w-[44rem] -translate-x-1/2 bg-primary/20" />
        <div className="ambient-orb right-[6%] top-28 h-64 w-64 animate-orb bg-[oklch(0.62_0.19_285/0.22)]" />
        <div className="absolute inset-x-0 bottom-0 h-44 bg-linear-to-b from-transparent to-background" />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl text-center">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease }}
          className="glass-clear mx-auto inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium text-muted-foreground"
        >
          <span className="size-2 rounded-full bg-primary" aria-hidden="true" />
          Disponible para nuevos proyectos
        </motion.p>

        <motion.h1
          initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 26, filter: "blur(12px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1, delay: 0.08, ease }}
          className="mt-7 display-tight text-5xl text-balance sm:text-7xl lg:text-8xl"
        >
          <span className="text-gradient">Software que se siente</span>
          <br />
          <span className="bg-linear-to-r from-[oklch(0.72_0.16_275)] to-[oklch(0.6_0.19_258)] bg-clip-text text-transparent">
            simple y preciso.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease }}
          className="mx-auto mt-7 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg"
        >
          {profile.intro}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3, ease }}
          className="mt-10 flex flex-wrap items-center justify-center gap-3"
        >
          <Link
            to="/proyectos"
            className="inline-flex min-h-12 items-center gap-1.5 rounded-full bg-primary px-6 text-sm font-semibold text-primary-foreground shadow-glow transition-transform duration-300 ease-hig hover:scale-[1.03]"
          >
            Ver proyectos <ArrowUpRight className="size-4" />
          </Link>
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer noopener"
            className="glass inline-flex min-h-12 items-center gap-2 rounded-full px-6 text-sm font-medium text-foreground transition-transform duration-300 ease-hig hover:scale-[1.03]"
          >
            <Github className="size-4" aria-hidden="true" /> GitHub
          </a>
        </motion.div>

        <motion.dl
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mx-auto mt-16 grid max-w-2xl grid-cols-3 gap-4"
        >
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="glass glass-sheen rounded-3xl px-4 py-6 transition-transform duration-500 ease-hig hover:-translate-y-1"
            >
              <dt className="sr-only">{stat.label}</dt>
              <dd>
                <span className="block font-display text-3xl font-semibold tracking-tight sm:text-4xl">
                  {stat.value}
                </span>
                <span className="mt-1 block text-xs text-muted-foreground sm:text-sm">
                  {stat.label}
                </span>
              </dd>
            </div>
          ))}
        </motion.dl>
      </div>
    </section>
  );
}

function Index() {
  return (
    <>
      <Hero />

      <section className="px-4 py-20 sm:py-28" aria-labelledby="trabajo">
        <div className="mx-auto max-w-5xl">
          <div className="relative overflow-hidden text-center">
            <div
              className="pointer-events-none mx-auto max-w-4xl lect-none opacity-80"
              aria-hidden="true"
            >

            </div>
            <ScrollFloat
              containerClassName="mt-8 sm:mt-12"
              textClassName="title"
              animationDuration={1}
              ease="back.inOut(2)"
              stagger={0.03}
            >
              Proyectos en producción
            </ScrollFloat>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Productos reales, con usuarios reales. Sigue haciendo scroll y observa cómo se apila
              el trabajo.
            </p>
          </div>
          <h2 id="trabajo" className="sr-only">
            Trabajo seleccionado
          </h2>

          <div className="mt-12">
            <ScrollStack>
              {projects.map((project, i) => (
                <ScrollStackItem key={project.slug} itemClassName="scroll-stack-project">
                  <ProjectStackCard project={project} index={i} />
                </ScrollStackItem>
              ))}
            </ScrollStack>
          </div>

          <Reveal className="mt-12 text-center" delay={0.1}>
            <Link
              to="/proyectos"
              className="inline-flex min-h-12 items-center gap-1.5 rounded-full border border-border px-6 text-sm font-medium transition-colors hover:bg-elevated"
            >
              Ver todos los proyectos <ArrowUpRight className="size-4" />
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="px-4 py-20 sm:py-28">
        <div className="mx-auto max-w-5xl">
          <SectionHeading
            eyebrow="Cómo trabajo"
            title="Del diseño al despliegue"
            description="Cubro el ciclo completo: interfaz, lógica de negocio y datos, con arquitectura limpia y código mantenible."
          />

          <div className="mt-12 grid gap-10 sm:gap-8 md:grid-cols-3">
            {disciplines.map((d, i) => (
              <Reveal key={d.title} delay={i * 0.08}>
                <div className="flex h-full flex-col items-center text-center">
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
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-10">
        <Reveal>
          <p className="mb-6 text-center text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground">
            Mis herramientas
          </p>
          <Marquee items={tools} />
        </Reveal>
      </section>

      <section className="px-4 py-24">
        <Reveal className="mx-auto max-w-4xl">
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
        </Reveal>
      </section>
    </>
  );
}
