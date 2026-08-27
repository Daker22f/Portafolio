import { createFileRoute } from "@tanstack/react-router";
import { createFileRoute as _unused } from "@tanstack/react-router";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Marquee } from "@/components/site/Marquee";
import { disciplines, profile, tools } from "@/lib/site-data";

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

function SobreMiPage() {
  return (
    <>
      <section className="hero-glow px-4 pt-36 pb-16 sm:pt-44">
        <div className="mx-auto max-w-4xl">
          <SectionHeading
            eyebrow="Sobre mí"
            title={profile.name}
            description={profile.bio}
          />
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground">
              {profile.intro} También soy desarrollador de código abierto y, en mi tiempo libre,
              practico con los lenguajes que quiero dominar.
            </p>
            <p className="mt-6 text-sm text-muted-foreground">
              {profile.role} · {profile.location}
            </p>
          </Reveal>
        </div>
      </section>

      <section className="px-4 py-16">
        <div className="mx-auto grid max-w-4xl gap-5 md:grid-cols-3">
          {disciplines.map((d, i) => (
            <Reveal key={d.title} delay={i * 0.08}>
              <article className="glass h-full rounded-4xl p-7">
                <h2 className="font-display text-xl font-semibold tracking-tight">{d.title}</h2>
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
