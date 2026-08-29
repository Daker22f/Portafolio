import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Github, Mail, MapPin } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Marquee } from "@/components/site/Marquee";
import ProfileCard from "@/components/site/ProfileCard/ProfileCard";
import { disciplines, profile, stats, tools } from "@/lib/site-data";

const title = "Sobre mí — Robert Abdiel Carrasco Montero";
const description =
  "Ingeniero de software full-stack en Santo Domingo. Front-end con React y TypeScript, back-end con C#, Node y Python, y bases de datos relacionales y NoSQL.";

export const Route = createFileRoute("/sobre-mi")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: SobreMiPage,
});

function AboutHero() {
  return (
    <section className="relative overflow-hidden px-4 pt-32 pb-16 sm:pt-40 sm:pb-24">
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="hero-glow absolute inset-0" />
        <div className="ambient-orb animate-orb -top-24 left-[8%] h-72 w-72 bg-foreground/10" />
        <div className="ambient-orb right-[4%] top-40 h-80 w-80 animate-orb bg-foreground/25" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-linear-to-b from-transparent to-background" />
      </div>

      <div className="relative z-10 mx-auto grid max-w-5xl items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal>
          <ProfileCard
            name={profile.shortName}
            title={profile.role}
            handle="daker22f"
            status="Disponible para proyectos"
            contactText="Contáctame"
            avatarUrl="/me.jpeg"
            iconUrl="/iconpattern.svg"
            showUserInfo
            enableTilt
            enableMobileTilt={false}
            behindGlowEnabled
            behindGlowColor="rgba(255, 255, 255, 0.55)"
            behindGlowSize="65%"
            innerGradient="linear-gradient(145deg,#6b6b6b8c 0%,#ffffff44 100%)"
            onContactClick={() => {
              window.location.href = `mailto:${profile.email}`;
            }}
          />
        </Reveal>

        <div>
          <SectionHeading eyebrow="Sobre mí" title={profile.shortName} description={profile.bio} />
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground">
              {profile.intro} También soy desarrollador de código abierto y, en mi tiempo libre,
              practico con los lenguajes que quiero dominar.
            </p>
            <p className="mt-4 text-sm text-muted-foreground">
              {profile.role} · {profile.location}
            </p>
          </Reveal>

          <Reveal delay={0.18}>
            <dl className="mt-8 grid max-w-xl grid-cols-3 gap-4">
              {stats.map((stat) => (
                <div key={stat.label} className="glass rounded-3xl px-4 py-5">
                  <dt className="sr-only">{stat.label}</dt>
                  <dd>
                    <span className="block font-display text-3xl font-semibold tracking-tight">
                      {stat.value}
                    </span>
                    <span className="mt-1 block text-xs text-muted-foreground">{stat.label}</span>
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>

          <Reveal delay={0.26}>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/contacto"
                className="inline-flex min-h-11 items-center gap-1.5 rounded-full bg-primary px-5 text-sm font-semibold text-primary-foreground shadow-glow transition-transform duration-300 ease-hig hover:scale-[1.03]"
              >
                Trabajemos juntos <ArrowUpRight className="size-4" />
              </Link>
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer noopener"
                className="glass inline-flex min-h-11 items-center gap-2 rounded-full px-5 text-sm font-medium transition-transform duration-300 ease-hig hover:scale-[1.03]"
              >
                <Github className="size-4" aria-hidden="true" /> GitHub
              </a>
              <a
                href={`mailto:${profile.email}`}
                className="glass inline-flex min-h-11 items-center gap-2 rounded-full px-5 text-sm font-medium transition-transform duration-300 ease-hig hover:scale-[1.03]"
              >
                <Mail className="size-4" aria-hidden="true" /> Email
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.32}>
            <p className="mt-8 flex items-center gap-2 text-xs text-muted-foreground">
              <MapPin className="size-3.5" aria-hidden="true" /> Santo Domingo, República Dominicana
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function SobreMiPage() {
  return (
    <>
      <AboutHero />

      <section className="px-4 py-16">
        <div className="mx-auto max-w-4xl">
          <SectionHeading
            eyebrow="Especialidades"
            title="Lo que domino"
            description="Tres frentes combinados para entregar productos completos, del píxel a la base de datos."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {disciplines.map((d, i) => (
              <Reveal key={d.title} delay={i * 0.08}>
                <article className="glass h-full rounded-4xl p-7">
                  <span className="font-display text-sm font-semibold text-primary">0{i + 1}</span>
                  <h2 className="mt-3 font-display text-xl font-semibold tracking-tight">
                    {d.title}
                  </h2>
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

      <section className="py-10 pb-24">
        <Reveal>
          <p className="mb-6 text-center text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground">
            Stack y herramientas
          </p>
          <Marquee items={tools} />
        </Reveal>
      </section>
    </>
  );
}
