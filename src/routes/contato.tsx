import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";

export const Route = createFileRoute("/contato")({
  head: () => ({
    meta: [
      { title: "Contato — Top Espelhos" },
      {
        name: "description",
        content:
          "Fale com a Top Espelhos. Endereço, WhatsApp, e-mail e horários de atendimento em Andradina/SP.",
      },
      { property: "og:title", content: "Contato — Top Espelhos" },
      {
        property: "og:description",
        content: "Fale com a Top Espelhos sobre medidas, LED e instalação.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <Layout>
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
        <div className="grid gap-14 md:grid-cols-12 md:gap-12">
          <div className="md:col-span-5">
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.25em] text-champagne">
              Contato
            </p>
            <h1 className="font-serif text-5xl text-foreground md:text-6xl text-balance">
              Vamos conversar sobre o seu <span className="italic text-champagne">espelho</span>.
            </h1>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              Tire dúvidas sobre medidas, iluminação LED ou instalação. Nosso time
              está pronto para ajudar você a escolher a peça perfeita.
            </p>

            <a
              href="https://wa.me/5518996681169?text=Ol%C3%A1!%20Quero%20um%20espelho%20sob%20medida."
              target="_blank"
              rel="noreferrer"
              className="mt-10 inline-flex items-center gap-3 rounded-full bg-foreground px-7 py-4 text-xs font-medium uppercase tracking-[0.2em] text-background transition-colors hover:bg-champagne hover:text-champagne-foreground"
            >
              <MessageCircle className="h-4 w-4" />
              Conversar no WhatsApp
            </a>
          </div>

          <div className="md:col-span-7">
            <div className="grid gap-px overflow-hidden rounded-sm border border-border bg-border sm:grid-cols-2">
              {[
                {
                  icon: MapPin,
                  title: "Endereço",
                  lines: ["R. Santos Dumont, 1731", "Jardim Alvorada", "Andradina — SP, 16900-061"],
                },
                {
                  icon: Phone,
                  title: "Telefone",
                  lines: ["(18) 99668-1169"],
                  href: "tel:+5518996681169",
                },
                {
                  icon: Mail,
                  title: "E-mail",
                  lines: ["contato@topespelho.com.br"],
                  href: "mailto:contato@topespelho.com.br",
                },
                {
                  icon: Clock,
                  title: "Atendimento",
                  lines: ["Segunda a sábado", "08h às 18h"],
                },
              ].map((c) => {
                const Wrapper = c.href ? "a" : "div";
                return (
                  <Wrapper
                    key={c.title}
                    {...(c.href ? { href: c.href } : {})}
                    className="block bg-background p-8 transition-colors hover:bg-secondary/40"
                  >
                    <c.icon className="h-5 w-5 text-champagne" />
                    <h3 className="mt-4 text-xs font-medium uppercase tracking-[0.2em] text-foreground">
                      {c.title}
                    </h3>
                    <div className="mt-2 space-y-1 text-sm text-muted-foreground">
                      {c.lines.map((l) => (
                        <p key={l}>{l}</p>
                      ))}
                    </div>
                  </Wrapper>
                );
              })}
            </div>

            <div className="mt-8 overflow-hidden rounded-sm border border-border">
              <iframe
                title="Top Espelhos — Andradina/SP"
                src="https://www.google.com/maps?q=R.%20Santos%20Dumont%2C%201731%20-%20Jardim%20Alvorada%2C%20Andradina%20-%20SP&output=embed"
                width="100%"
                height="320"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="block"
              />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
