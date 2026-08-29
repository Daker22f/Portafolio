# Portafolio de Abdiel Carrasco

Portafolio personal construido con **React 19**, **TypeScript**, **TanStack Start/Router** y **Tailwind CSS 4**. Incluye animaciones avanzadas con Framer Motion, GSAP, Anime.js y Three.js.

---

## ⚡ Requisitos previos

| Herramienta | Versión mínima |
|-------------|----------------|
| **Node.js** | 20 LTS         |
| **npm**     | 10+            |

---

## 🚀 Cómo ejecutar

```bash
# 1. Clonar el repositorio
git clone https://github.com/Daker22f/dynamic-web-craft.git
cd dynamic-web-craft

# 2. Instalar dependencias
npm install

# 3. Iniciar el servidor de desarrollo
npm run dev
```

La aplicación estará disponible en **http://localhost:3000** (o el puerto que indique la terminal).

---

## 📦 Scripts disponibles

| Comando             | Descripción                                    |
|---------------------|------------------------------------------------|
| `npm run dev`       | Inicia el servidor de desarrollo con Vite      |
| `npm run build`     | Genera el bundle de producción                 |
| `npm run build:dev` | Build en modo desarrollo (debug)               |
| `npm run preview`   | Previsualiza el build de producción            |
| `npm run lint`      | Ejecuta ESLint sobre todo el proyecto          |
| `npm run format`    | Formatea el código con Prettier                |

---

## 🏗️ Estructura del proyecto

```
dynamic-web-craft/
├── public/                      # Activos estáticos (imágenes, SVGs, favicon)
│   ├── disciplines/             # Imágenes de disciplinas (frontend, backend, datos)
│   └── ...
├── src/
│   ├── components/
│   │   ├── site/                # Componentes del sitio
│   │   │   ├── Hero/            # Sección hero (ContactButton, PortraitMorph, CTAs)
│   │   │   ├── MagicBento/      # Grid interactivo de habilidades
│   │   │   ├── Projects/        # Galería de proyectos
│   │   │   ├── ScrollExpand/    # Efecto scroll-expand
│   │   │   ├── ProfileCard/     # Tarjeta de perfil animada
│   │   │   ├── LoadingScreen/   # Pantalla de carga con animación
│   │   │   ├── TargetCursor/    # Cursor personalizado
│   │   │   ├── SmoothScroll/    # Scroll suave con Lenis
│   │   │   ├── Footer.tsx       # Pie de página
│   │   │   ├── Nav.tsx          # Navegación principal
│   │   │   └── ...              # +20 componentes de animación
│   │   └── ui/                  # Componentes UI reutilizables (Radix UI)
│   ├── hooks/                   # Custom hooks de React
│   ├── lib/                     # Utilidades y datos del sitio
│   │   └── site-data.ts         # Datos centralizados (perfil, proyectos, stack)
│   ├── routes/                  # Páginas (TanStack Router, file-based routing)
│   │   ├── __root.tsx           # Layout raíz
│   │   ├── index.tsx            # Página principal
│   │   ├── proyectos.tsx        # Página de proyectos
│   │   ├── sobre-mi.tsx         # Página "Sobre mí"
│   │   └── contacto.tsx         # Página de contacto
│   ├── styles.css               # Estilos globales + tokens de diseño
│   ├── router.tsx               # Configuración del router
│   └── server.ts                # Configuración del servidor (SSR)
├── package.json
├── tsconfig.json
└── vite.config.ts
```

---

## 🛠️ Stack tecnológico

| Categoría        | Tecnologías                                          |
|------------------|------------------------------------------------------|
| **Framework**    | React 19, TanStack Start, TanStack Router            |
| **Lenguaje**     | TypeScript                                           |
| **Estilos**      | Tailwind CSS 4, CSS custom properties                |
| **Animaciones**  | Framer Motion, GSAP, Anime.js                        |
| **3D / WebGL**   | Three.js, React Three Fiber, OGL                     |
| **UI**           | Radix UI, Lucide Icons, shadcn/ui                    |
| **Build**        | Vite 8                                               |
| **Linting**      | ESLint + Prettier                                    |

---

## 📬 Contacto

- **Email**: abdielcarrasco01@gmail.com
- **GitHub**: [github.com/Daker22f](https://github.com/Daker22f)

---

## 📄 Licencia

Este proyecto es de uso personal. Todos los derechos reservados.
