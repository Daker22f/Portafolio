import { Link } from "@tanstack/react-router";
import { Github, ArrowUpRight } from "lucide-react";
import { profile } from "@/lib/site-data";

export function Footer() {
  return (
    <footer className="border-t border-hairline px-4 py-14">
      <div className="mx-auto flex max-w-5xl flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <div className="max-w-md">
          <p className="font-display text-2xl tracking-tight text-foreground">
            ¿Tienes una idea? Hagámosla real.
          </p>
          <p className="mt-2 text-sm text-muted-foreground">{profile.location}</p>
        </div>

        <div className="flex flex-col gap-3 text-sm md:items-end">
          <div className="flex flex-wrap gap-2">
            <Link
              to="/contacto"
              className="inline-flex min-h-11 items-center gap-1 rounded-full bg-primary px-5 font-semibold text-primary-foreground transition-transform duration-300 ease-hig hover:scale-[1.03]"
            >
              Contactar <ArrowUpRight className="size-4" />
            </Link>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex min-h-11 items-center gap-2 rounded-full border border-border px-5 font-medium text-foreground transition-colors hover:bg-elevated"
            >
              <Github className="size-4" aria-hidden="true" /> GitHub
            </a>
          </div>
          <p className="text-muted-foreground">
            © {new Date().getFullYear()} {profile.name}
          </p>
        </div>
      </div>
    </footer>
  );
}
