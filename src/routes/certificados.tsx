import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Award, ExternalLink, Calendar, Building, X, ZoomIn } from "lucide-react";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Reveal } from "@/components/site/Reveal";
import Antigravity from "@/components/site/Antigravity/Antigravity";

const title = "Certificados y Titulaciones — Robert Carrasco";
const description =
  "Certificaciones y títulos oficiales en Desarrollo Web Full Stack, Ciencia de Datos y Desarrollo & Administración de Aplicaciones Informáticas.";

export const Route = createFileRoute("/certificados")({
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
  component: CertificadosPage,
});

type Certificate = {
  id: string;
  title: string;
  institution: string;
  subtitle: string;
  date: string;
  hours?: string;
  tag: string;
  image: string;
  description: string;
};

const certificates: Certificate[] = [
  {
    id: "fullstack-indotel",
    title: "Desarrollo Web Full Stack - Nivel Avanzado",
    institution: "INDOTEL · BID · Cymetria Group",
    subtitle: "Talento Digital DO",
    date: "24 de septiembre de 2026",
    hours: "80 horas lectivas",
    tag: "Full Stack",
    image: "/certificados/indotel-fullstack.jpg",
    description:
      "Programa avanzado de especialización en ingeniería web full stack, arquitectura de software, bases de datos y desarrollo de interfaces modernas.",
  },
  {
    id: "ciencia-datos-one",
    title: "Ciencia de Datos para la Explotación de Datos",
    institution: "Oficina Nacional de Estadística (ONE) · ENE",
    subtitle: "Escuela Nacional de Estadística",
    date: "25 de septiembre de 2025",
    tag: "Data Science",
    image: "/certificados/one-ciencia-datos.jpg",
    description:
      "Capacitación profesional en análisis, explotación, procesamiento y modelado de datos para toma de decisiones estadísticas y analíticas.",
  },
  {
    id: "diploma-itesa",
    title: "Bachiller Técnico en Desarrollo y Administración de Aplicaciones Informáticas",
    institution: "Instituto Técnico Salesiano (ITESA)",
    subtitle: "Diploma Oficial",
    date: "30 de octubre de 2026",
    tag: "Título Técnico",
    image: "/certificados/itesa-diploma-tecnico.jpg",
    description:
      "Titulación técnica formal en programación, ciclo de vida del software, administración de servidores, bases de datos y despliegue de soluciones informáticas.",
  },
  {
    id: "minerd-bachiller",
    title: "Certificado de Bachiller Técnico Profesional",
    institution: "Ministerio de Educación de la República Dominicana (MINERD)",
    subtitle: "Educación Secundaria Modalidad Técnico Profesional",
    date: "20 de julio de 2026",
    tag: "Acreditación Nacional",
    image: "/certificados/minerd-bachiller-tecnico.jpg",
    description:
      "Certificado emitido por el Estado Dominicano que avala la culminación de estudios en Desarrollo y Administración de Aplicaciones Informáticas.",
  },
];

function CertificadosPage() {
  const [selectedImage, setSelectedImage] = useState<Certificate | null>(null);

  return (
    <>
      <section className="hero-glow relative w-full overflow-hidden">
        <div className="absolute inset-0" aria-hidden="true">
          <Antigravity
            count={260}
            magnetRadius={5}
            ringRadius={6.5}
            waveSpeed={0.35}
            waveAmplitude={0.9}
            particleSize={1.5}
            lerpSpeed={0.05}
            color="#f5f4f3"
            autoAnimate
            particleVariance={1}
            rotationSpeed={0}
            depthFactor={1}
            pulseSpeed={2.8}
            particleShape="capsule"
            fieldStrength={8}
          />
        </div>
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-linear-to-b from-transparent to-background" />

        <div className="relative mx-auto w-full max-w-6xl px-4 pt-44 pb-20 sm:px-6 sm:pt-56 sm:pb-24">
          <SectionHeading
            eyebrow="Formación & Credenciales"
            title="Certificados y Títulos"
            description="Titulaciones técnicas, certificaciones oficiales y capacitaciones especializadas que respaldan mis competencias en ingeniería de software y datos."
          />
        </div>
      </section>

      <section className="relative px-4 pb-28 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-7 md:grid-cols-2">
            {certificates.map((cert, index) => (
              <Reveal key={cert.id} delay={index * 0.1}>
                <article className="glass glass-sheen group relative flex h-full flex-col overflow-hidden rounded-4xl border border-border bg-elevated/70 p-6 shadow-lift transition-all duration-500 ease-hig hover:-translate-y-1 hover:border-foreground/20 sm:p-7">
                  {/* Vista previa de la imagen */}
                  <div
                    onClick={() => setSelectedImage(cert)}
                    className="group/img relative aspect-16/11 w-full cursor-pointer overflow-hidden rounded-2xl border border-border/60 bg-muted/30"
                  >
                    <img
                      src={cert.image}
                      alt={cert.title}
                      loading="lazy"
                      decoding="async"
                      className="size-full object-contain p-2 transition-transform duration-700 ease-hig group-hover/img:scale-[1.03]"
                    />
                    <div className="absolute inset-0 bg-background/20 opacity-0 transition-opacity duration-300 group-hover/img:opacity-100 flex items-center justify-center backdrop-blur-[2px]">
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-background/90 px-4 py-2 text-xs font-semibold text-foreground shadow-lg backdrop-blur-md">
                        <ZoomIn className="size-3.5" /> Ampliar documento
                      </span>
                    </div>
                    <span className="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full bg-background/85 px-3 py-1 text-xs font-medium text-foreground/90 backdrop-blur-md ring-1 ring-border">
                      <Award className="size-3.5 text-primary" />
                      {cert.tag}
                    </span>
                  </div>

                  {/* Datos del certificado */}
                  <div className="mt-6 flex flex-1 flex-col justify-between">
                    <div>
                      <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                        <span className="inline-flex items-center gap-1">
                          <Building className="size-3.5" />
                          {cert.subtitle}
                        </span>
                        <span>•</span>
                        <span className="inline-flex items-center gap-1">
                          <Calendar className="size-3.5" />
                          {cert.date}
                        </span>
                        {cert.hours ? (
                          <>
                            <span>•</span>
                            <span>{cert.hours}</span>
                          </>
                        ) : null}
                      </div>

                      <h3 className="mt-3 font-display text-xl font-semibold leading-snug tracking-tight text-foreground sm:text-2xl">
                        {cert.title}
                      </h3>

                      <p className="mt-1 text-sm font-medium text-primary">
                        {cert.institution}
                      </p>

                      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                        {cert.description}
                      </p>
                    </div>

                    <div className="mt-6 pt-5 border-t border-hairline flex items-center justify-between">
                      <button
                        type="button"
                        onClick={() => setSelectedImage(cert)}
                        className="inline-flex cursor-pointer items-center gap-1.5 text-sm font-medium text-foreground transition-colors hover:text-primary"
                      >
                        Ver certificado original
                        <ExternalLink className="size-3.5" />
                      </button>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Modal Lightbox para ver certificado en tamaño completo */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 backdrop-blur-md sm:p-8"
          >
            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-h-[92vh] max-w-4xl overflow-hidden rounded-3xl border border-border bg-card p-4 shadow-2xl sm:p-6"
            >
              <div className="mb-4 flex items-center justify-between gap-4 border-b border-border pb-3">
                <div className="min-w-0">
                  <h4 className="truncate font-display text-base font-semibold text-foreground sm:text-lg">
                    {selectedImage.title}
                  </h4>
                  <p className="truncate text-xs text-muted-foreground">
                    {selectedImage.institution}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setSelectedImage(null)}
                  className="rounded-full bg-elevated p-2 text-foreground transition-colors hover:bg-muted"
                  aria-label="Cerrar vista previa"
                >
                  <X className="size-5" />
                </button>
              </div>

              <div className="max-h-[75vh] overflow-auto rounded-xl bg-black/40 p-2 flex items-center justify-center">
                <img
                  src={selectedImage.image}
                  alt={selectedImage.title}
                  className="max-h-[72vh] w-auto rounded-lg object-contain"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
