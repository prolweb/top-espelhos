import { Link } from "@tanstack/react-router";
import { Instagram, Facebook, MapPin, Phone, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border bg-secondary/40">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-baseline gap-2">
              <span className="font-serif text-2xl text-foreground">Top</span>
              <span className="font-serif text-2xl uppercase tracking-[0.2em] text-champagne">
                Espelhos
              </span>
            </div>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted-foreground">
              Espelhos sob medida com acabamento premium. Mais de 10.000 vendas e
              referência em Andradina e região.
            </p>
            <div className="mt-6 flex gap-3">
              <a
                href="https://www.instagram.com/topespelhos.ecommerce/"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-champagne hover:text-champagne"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href="https://facebook.com/topespelhos"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-champagne hover:text-champagne"
              >
                <Facebook className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="mb-5 text-xs font-medium uppercase tracking-[0.2em] text-foreground">
              Navegação
            </h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><Link to="/" className="hover:text-foreground">Início</Link></li>
              <li><Link to="/produtos" className="hover:text-foreground">Produtos</Link></li>
              <li><Link to="/sobre" className="hover:text-foreground">Sobre</Link></li>
              <li><Link to="/contato" className="hover:text-foreground">Contato</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-5 text-xs font-medium uppercase tracking-[0.2em] text-foreground">
              Contato
            </h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
                <span>R. Santos Dumont, 1731<br />Jardim Alvorada — Andradina/SP</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <a href="tel:+5518996681169" className="hover:text-foreground">(18) 99668-1169</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <a href="mailto:contato@topespelho.com.br" className="hover:text-foreground">
                  contato@topespelho.com.br
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-border pt-6 text-xs text-muted-foreground md:flex-row md:justify-between">
          <p>© {new Date().getFullYear()} Top Espelhos. Todos os direitos reservados.</p>
          <p>Andradina — São Paulo, Brasil</p>
        </div>
      </div>
    </footer>
  );
}
