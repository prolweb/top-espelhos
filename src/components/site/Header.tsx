import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { to: "/", label: "Início" },
  { to: "/produtos", label: "Produtos" },
  { to: "/sobre", label: "Sobre" },
  { to: "/contato", label: "Contato" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
        <Link to="/" className="group flex items-baseline gap-2">
          <span className="font-serif text-2xl tracking-tight text-foreground">Top</span>
          <span className="font-serif text-2xl tracking-[0.2em] text-champagne uppercase">
            Espelhos
          </span>
        </Link>

        <nav className="hidden items-center gap-10 md:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="text-sm font-medium tracking-wide text-muted-foreground transition-colors hover:text-foreground"
              activeProps={{ className: "text-foreground" }}
              activeOptions={{ exact: l.to === "/" }}
            >
              {l.label}
            </Link>
          ))}
          <a
            href="https://wa.me/5518996681169?text=Ol%C3%A1!%20Quero%20um%20espelho%20sob%20medida."
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-full border border-foreground bg-foreground px-5 py-2 text-xs font-medium uppercase tracking-[0.18em] text-background transition-colors hover:bg-transparent hover:text-foreground"
          >
            WhatsApp
          </a>
        </nav>

        <button
          aria-label="Abrir menu"
          className="md:hidden"
          onClick={() => setOpen(!open)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-background md:hidden">
          <nav className="flex flex-col px-6 py-4">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="border-b border-border/50 py-3 text-sm tracking-wide text-foreground"
              >
                {l.label}
              </Link>
            ))}
            <a
              href="https://wa.me/5518996681169?text=Ol%C3%A1!%20Quero%20um%20espelho%20sob%20medida."
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-flex items-center justify-center rounded-full bg-foreground px-5 py-3 text-xs font-medium uppercase tracking-[0.18em] text-background"
            >
              Falar no WhatsApp
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
