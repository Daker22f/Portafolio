export type Project = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  stack: string[];
  url: string;
  image: string;
  year: string;
  stars: number;
  collaborators: number;
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
  email: "abdielcarrasco01@gmail.com",
  github: "https://github.com/Daker22f",
  legacySite: "https://robert-dev.vercel.app/",
  bio: "Ingeniero de software full-stack en Santo Domingo. Front-end con React y TypeScript, back-end con C#, Node y Python, y bases de datos relacionales y NoSQL.",
  intro: "Construyo tu proxima aplicación web, desde el diseño hasta el despliegue.",
} as const;

export const projects: Project[] = [
  {
    slug: "brackix",
    name: "Brackix",
    tagline: "Desarrollo de software de extremo a extremo",
    description:
      "Plataforma de una agencia de software para individuos y empresas: aplicaciones a medida, experiencias de VR, integraciones de IA y arquitecturas escalables en la nube.",
    stack: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    url: "https://brackix-website.vercel.app/en",
    image: "/projects/brackix.jpg",
    year: "2025",
    stars: 12,
    collaborators: 1,
  },
  {
    slug: "telefactura",
    name: "Telefactura",
    tagline: "Facturación Electrónica e-CF (DGII)",
    description:
      "Plataforma de facturación electrónica certificada por la DGII para empresas en República Dominicana. Emisión de comprobantes fiscales electrónicos (e-CF) con seguridad empresarial.",
    stack: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    url: "https://dgii-landing-page.vercel.app/",
    image: "/projects/telefactura.png",
    year: "2025",
    stars: 8,
    collaborators: 1,
  },
  {
    slug: "kwixell",
    name: "Kwixell",
    tagline: "Automatización para negocios",
    description:
      "Kwixell automatiza mensajes, finanzas y clientes en un mismo lugar, con un panel claro y flujos inteligentes que reducen el trabajo manual del día a día.",
    stack: ["React", "Vite", "TypeScript", "Tailwind CSS"],
    url: "https://kwixell-landing-mvp.vercel.app/",
    image: "/projects/kwixell.jpg",
    year: "2024",
    stars: 15,
    collaborators: 1,
  },
];

export const disciplines: Discipline[] = [
  {
    title: "Front-end",
    description:
      "Interfaces dinámicas, responsivas y optimizadas, con foco en experiencia de usuario, accesibilidad y rendimiento real.",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "React Native"],
    image: "/disciplines/frontend.png",
  },
  {
    title: "Back-end",
    description:
      "Lógica de negocio, APIs y aplicaciones seguras y eficientes, con una arquitectura limpia y mantenible.",
    items: ["C#", "Node.js", "Python", "PHP", "Docker"],
    image: "/disciplines/backend.png",
  },
  {
    title: "Datos y análisis",
    description:
      "Modelado de datos, consultas y optimización para almacenar y procesar información de forma correcta y veloz.",
    items: ["PostgreSQL", "SQL Server", "MongoDB", "MySQL"],
    image: "/disciplines/datos.png",
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
