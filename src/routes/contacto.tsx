import { createFileRoute } from "@tanstack/react-router";
import { useCallback, useMemo, useState } from "react";
import { motion } from "motion/react";
import { ArrowUpRight, Github, Mail, MapPin } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { profile } from "@/lib/site-data";

const title = "Contacto — Robert Carrasco, Ingeniero de Software";
const description =
  "Cuéntame tu proyecto: desarrollo web full-stack con React, TypeScript y arquitecturas limpias. Respuesta en menos de 24 horas.";

export const Route = createFileRoute("/contacto")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Contacto,
});

type FormState = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

const initialState: FormState = { name: "", email: "", phone: "", message: "" };

const fields = [
  { id: "name", label: "Nombre", type: "text", required: true, autoComplete: "name" },
  { id: "email", label: "Email", type: "email", required: true, autoComplete: "email" },
  { id: "phone", label: "Teléfono (opcional)", type: "tel", required: false, autoComplete: "tel" },
] as const;

function Contacto() {
  const [form, setForm] = useState<FormState>(initialState);

  const mailtoHref = useMemo(() => {
    const subject = `Nuevo proyecto — ${form.name || "consulta"}`;
    const body = [
      `Nombre: ${form.name}`,
      `Email: ${form.email}`,
      `Teléfono: ${form.phone || "—"}`,
      "",
      form.message,
    ].join("\n");
    return `mailto:${profile.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }, [form]);

  const handleChange = useCallback(
    (key: keyof FormState) => (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { value } = event.target;
      setForm((prev) => ({ ...prev, [key]: value }));
    },
    [],
  );

  const handleSubmit = useCallback(
    (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      window.location.href = mailtoHref;
    },
    [mailtoHref],
  );

  return (
    <main className="px-4 pt-36 pb-24 sm:pt-44">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          eyebrow="Contacto"
          title="Hablemos de tu proyecto"
          description="Escríbeme con lo que tienes en mente y te respondo con una propuesta clara, tiempos y alcance."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <Reveal>
            <form
              onSubmit={handleSubmit}
              className="glass glass-sheen rounded-4xl p-6 sm:p-9"
              noValidate={false}
            >
              <div className="grid gap-5 sm:grid-cols-2">
                {fields.map((field) => (
                  <div
                    key={field.id}
                    className={field.id === "phone" ? "sm:col-span-2" : undefined}
                  >
                    <label
                      htmlFor={field.id}
                      className="block text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground"
                    >
                      {field.label}
                    </label>
                    <input
                      id={field.id}
                      name={field.id}
                      type={field.type}
                      required={field.required}
                      autoComplete={field.autoComplete}
                      value={form[field.id]}
                      onChange={handleChange(field.id)}
                      className="mt-2 min-h-12 w-full rounded-2xl border border-input bg-elevated px-4 text-base text-foreground transition-colors duration-300 ease-hig placeholder:text-muted-foreground focus:border-transparent focus-visible:outline-2 focus-visible:outline-offset-0 focus-visible:outline-ring"
                    />
                  </div>
                ))}

                <div className="sm:col-span-2">
                  <label
                    htmlFor="message"
                    className="block text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground"
                  >
                    Mensaje
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={form.message}
                    onChange={handleChange("message")}
                    className="mt-2 w-full resize-y rounded-2xl border border-input bg-elevated px-4 py-3 text-base leading-relaxed text-foreground transition-colors duration-300 ease-hig focus:border-transparent focus-visible:outline-2 focus-visible:outline-offset-0 focus-visible:outline-ring"
                  />
                </div>
              </div>

              <motion.button
                type="submit"
                whileTap={{ scale: 0.97 }}
                className="mt-7 inline-flex min-h-12 items-center gap-1.5 rounded-full bg-primary px-7 text-sm font-semibold text-primary-foreground shadow-glow transition-transform duration-300 ease-hig hover:scale-[1.02]"
              >
                Enviar mensaje <ArrowUpRight className="size-4" aria-hidden="true" />
              </motion.button>
            </form>
          </Reveal>

          <Reveal delay={0.1}>
            <aside className="glass h-full rounded-4xl p-6 sm:p-9">
              <h2 className="font-display text-xl font-semibold tracking-tight">
                Otras vías
              </h2>
              <ul className="mt-6 space-y-4 text-sm">
                <li className="flex items-start gap-3">
                  <span className="glass-clear mt-0.5 inline-flex size-9 shrink-0 items-center justify-center rounded-full">
                    <Mail className="size-4" aria-hidden="true" />
                  </span>
                  <a
                    href={`mailto:${profile.email}`}
                    className="text-foreground underline-offset-4 hover:underline"
                  >
                    {profile.email}
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <span className="glass-clear mt-0.5 inline-flex size-9 shrink-0 items-center justify-center rounded-full">
                    <Github className="size-4" aria-hidden="true" />
                  </span>
                  <a
                    href={profile.github}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="text-foreground underline-offset-4 hover:underline"
                  >
                    GitHub
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <span className="glass-clear mt-0.5 inline-flex size-9 shrink-0 items-center justify-center rounded-full">
                    <MapPin className="size-4" aria-hidden="true" />
                  </span>
                  <span className="text-muted-foreground">{profile.location}</span>
                </li>
              </ul>

              <p className="mt-8 text-sm leading-relaxed text-muted-foreground">
                Suelo responder en menos de 24 horas. Si tu proyecto es urgente, indícalo
                en el mensaje.
              </p>
            </aside>
          </Reveal>
        </div>
      </div>
    </main>
  );
}
