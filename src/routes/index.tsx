import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useReducedMotion } from "motion/react";
import { ArrowUpRight, Github } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { ProjectCard } from "@/components/site/ProjectCard";
import { Marquee } from "@/components/site/Marquee";
import { disciplines, ogImage, profile, projects, stats, tools } from "@/lib/site-data";

const title = "Robert Carrasco — Ingeniero de Software Full-Stack";
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
    <section className="hero-glow relative overflow-hidden px-4 pt-36 pb-24 sm:pt-44 sm:pb-32">
      <div className="mx-auto max-w-5xl text-center">
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
          <span className="text-primary">simple y preciso.</span>
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
            <div key={stat.label} className="glass glass-sheen rounded-3xl px-4 py-6 transition-transform duration-500 ease-hig hover:-translate-y-1">
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
          <SectionHeading
            eyebrow="Trabajo seleccionado"
            title="Proyectos en producción"
            description="Productos reales, con usuarios reales. Cada uno diseñado con la misma obsesión por el detalle y el rendimiento."
          />
          <h2 id="trabajo" className="sr-only">
            Trabajo seleccionado
          </h2>

          <div className="mt-12 grid gap-8">
            {projects.map((project, i) => (
              <ProjectCard key={project.slug} project={project} index={i} />
            ))}
          </div>

          <Reveal className="mt-10 text-center" delay={0.1}>
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

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {disciplines.map((d, i) => (
              <Reveal key={d.title} delay={i * 0.08}>
                <article className="glass glass-sheen h-full rounded-4xl p-7 transition-transform duration-500 ease-hig hover:-translate-y-1">
                  <span className="font-display text-sm font-semibold text-primary">
                    0{i + 1}
                  </span>
                  <h3 className="mt-3 font-display text-xl font-semibold tracking-tight">
                    {d.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {d.description}
                  </p>
                  <ul className="mt-5 flex flex-wrap gap-1.5">
                    {d.items.map((item) => (
                      <li
                        key={item}
                        className="rounded-full bg-elevated px-2.5 py-1 text-xs text-foreground/80"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </article>
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
