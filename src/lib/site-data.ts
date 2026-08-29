export type Project = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  stack: string[];
  url: string;
  image: string;
  year: string;
};

export type Discipline = {
  title: string;
  description: string;
  items: string[];
  image: string;
};

export const profile = {
  name: "Robert Abdiel Carrasco Montero",
  shortName: "Robert Carrasco",
  role: "Ingeniero de Software · Full-Stack",
  location: "Santo Domingo, República Dominicana",
  email: "hola@robert-dev.com",
  github: "https://github.com/Daker22f",
  legacySite: "https://robert-dev.vercel.app/",
  intro:
    "Construyo tu proxima aplicación web, desde el diseño hasta el despliegue.",

} as const;

export const projects: Project[] = [
  {
    slug: "brackix",
    name: "Brackix",
    tagline: "Desarrollo de software de extremo a extremo",
    description:
      "Plataforma de una agencia de software para individuos y empresas: aplicaciones a medida, experiencias de VR, integraciones de IA y arquitecturas escalables en la nube.",
    stack: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    url: "https://www.brackix.com/es",
    image: "https://robert-dev.vercel.app/assets/images/work/Brackix.jpeg",
    year: "2025",
  },
  {
    slug: "undamned",
    name: "Undamned",
    tagline: "Terror psicológico interactivo",
    description:
      "Sitio de UNDAMNED, un juego de terror psicológico que mezcla el horror atmosférico de Silent Hill con una invasión alienígena y mecánicas de movimiento frenéticas.",
    stack: ["React", "TypeScript", "Tailwind CSS"],
    url: "https://undamned.vercel.app/",
    image: "https://robert-dev.vercel.app/assets/images/work/Undamned.jpeg",
    year: "2025",
  },
  {
    slug: "kwixell",
    name: "Kwixell",
    tagline: "Automatización para negocios",
    description:
      "Kwixell automatiza mensajes, finanzas y clientes en un mismo lugar, con un panel claro y flujos que reducen el trabajo manual del día a día.",
    stack: ["React", "Vite", "TypeScript", "Tailwind CSS"],
    url: "https://kwixell.brackix.com/",
    image: "https://robert-dev.vercel.app/assets/images/work/kwixell.jpeg",
    year: "2024",
  },
];

export const disciplines: Discipline[] = [
  {
    title: "Front-end",
    description:
      "Interfaces dinámicas, responsivas y optimizadas, con foco en experiencia de usuario, accesibilidad y rendimiento real.",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "React Native"],
    image: "/disciplines/frontend.svg",
  },
  {
    title: "Back-end",
    description:
      "Lógica de negocio, APIs y aplicaciones seguras y eficientes, con una arquitectura limpia y mantenible.",
    items: ["C#", "Node.js", "Python", "PHP", "Docker"],
    image: "/disciplines/backend.svg",
  },
  {
    title: "Datos y análisis",
    description:
      "Modelado de datos, consultas y optimización para almacenar y procesar información de forma correcta y veloz.",
    items: ["PostgreSQL", "SQL Server", "MongoDB", "MySQL"],
    image: "/disciplines/data.svg",
  },
];

export const tools: string[] = [
  "React",
  "React Native",
  "TypeScript",
  "JavaScript",
  "Next.js",
  "Vite",
  "Tailwind CSS",
  "Node.js",
  "C#",
  "Python",
  "PHP",
  "PostgreSQL",
  "SQL Server",
  "MySQL",
  "MongoDB",
  "Docker",
  "Git",
  "OpenXR",
];

export const stats = [
  { value: "5+", label: "Años programando" },
  { value: "20+", label: "Proyectos entregados" },
  { value: "3", label: "Productos en producción" },
];

export const ogImage: string = projects[0]?.image ?? "";
