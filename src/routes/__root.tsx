import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { profile } from "@/lib/site-data";
import BubbleMenu from "@/components/site/BubbleMenu/BubbleMenu";
import { Footer } from "@/components/site/Footer";
import { Toaster } from "@/components/ui/sonner";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="display-tight text-7xl text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Página no encontrada</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          La página que buscas no existe o fue movida.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex min-h-11 items-center justify-center rounded-full bg-primary px-5 text-sm font-semibold text-primary-foreground transition-transform duration-300 ease-hig hover:scale-[1.03]"
          >
            Volver al inicio
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          Esta página no cargó
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Algo salió mal. Puedes reintentar o volver al inicio.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex min-h-11 items-center justify-center rounded-full bg-primary px-5 text-sm font-semibold text-primary-foreground"
          >
            Reintentar
          </button>
          <a
            href="/"
            className="inline-flex min-h-11 items-center justify-center rounded-full border border-border bg-background px-5 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Ir al inicio
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Robert Carrasco — Ingeniero de Software" },
      {
        name: "description",
        content: "Portafolio de Robert Abdiel Carrasco Montero, ingeniero de software full-stack.",
      },
      { name: "author", content: "Robert Abdiel Carrasco Montero" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter+Tight:wght@400;500;600;700&family=Inter:wght@400;500;600&display=swap",
      },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="es">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <div className="grain flex min-h-screen flex-col">
        <BubbleMenu
          logo={
            <span className="whitespace-nowrap font-display text-sm font-semibold tracking-tight text-[#111318]">
              {profile.shortName}
            </span>
          }
          menuAriaLabel="Abrir menú"
          useFixedPosition
          menuBg="#ffffff"
          menuContentColor="#0a65c7ff"
          items={[
            {
              label: "Inicio",
              href: "/",
              ariaLabel: "Ir al inicio",
              rotation: -6,
              hoverStyles: { bgColor: "var(--color-primary)", textColor: "#ffffff" },
            },
            {
              label: "Proyectos",
              href: "/proyectos",
              ariaLabel: "Ver proyectos",
              rotation: 6,
              hoverStyles: { bgColor: "#8b5cf6", textColor: "#ffffff" },
            },
            {
              label: "Sobre mí",
              href: "/sobre-mi",
              ariaLabel: "Acerca de mí",
              rotation: 6,
              hoverStyles: { bgColor: "#22d3ee", textColor: "#04121a" },
            },
            {
              label: "Contacto",
              href: "/contacto",
              ariaLabel: "Ir a contacto",
              rotation: -6,
              hoverStyles: { bgColor: "#f97316", textColor: "#ffffff" },
            },
          ]}
        />
        {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
        <main className="flex-1">
          <Outlet />
        </main>
        <Footer />
      </div>
      <Toaster position="top-center" />
    </QueryClientProvider>
  );
}
