import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import organic from "@/assets/mirror-organic.jpg";
import { Check } from "lucide-react";

export const Route = createFileRoute("/sobre")({
  head: () => ({
    meta: [
      { title: "Sobre — Top Espelhos" },
      {
        name: "description",
        content:
          "Conheça a Top Espelhos: referência em vendas e qualidade no mercado de espelhos sob medida em Andradina/SP.",
      },
      { property: "og:title", content: "Sobre a Top Espelhos" },
      {
        property: "og:description",
        content: "Referência em vendas e qualidade. Mais de 10.000 vendas realizadas.",
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <Layout>
      <section className="mx-auto grid max-w-7xl gap-14 px-6 py-24 md:grid-cols-12 md:gap-12 lg:px-10">
        <div className="md:col-span-7">
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.25em] text-champagne">
            Sobre nós
          </p>
          <h1 className="font-serif text-5xl text-foreground md:text-6xl text-balance">
            Acabamento, cuidado e <span className="italic text-champagne">presença</span> em cada peça.
          </h1>
          <div className="mt-8 space-y-5 text-base leading-relaxed text-muted-foreground">
            <p>
              A Top Espelhos nasceu em Andradina (SP) com um propósito simples:
              transformar espelhos em peças de design — capazes de elevar qualquer
              ambiente, do residencial ao comercial.
            </p>
            <p>
              Somos referência em vendas e qualidade no segmento, com foco em
              acabamento premium, atendimento próximo e produção sob medida. Cada
              projeto começa com uma conversa e termina com a entrega segura na sua
              porta.
            </p>
          </div>

          <ul className="mt-10 space-y-4">
            {[
              "Espelhos sob medida para ambientes residenciais e comerciais",
              "Atendimento personalizado e orientação na escolha do modelo ideal",
              "Produção com padrão premium e entrega segura em todo o Brasil",
              "Mais de 5.000 avaliações positivas de clientes",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm text-foreground">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-champagne" />
                {item}
              </li>
            ))}
          </ul>

          <Link
            to="/produtos"
            className="mt-10 inline-flex items-center gap-2 rounded-full bg-foreground px-7 py-3.5 text-xs font-medium uppercase tracking-[0.2em] text-background hover:bg-champagne hover:text-champagne-foreground"
          >
            Conferir produtos
          </Link>
        </div>

        <div className="md:col-span-5">
          <div className="relative aspect-[4/5] overflow-hidden rounded-sm">
            <img
              src={organic}
              alt="Espelho orgânico Top Espelhos"
              width={900}
              height={1100}
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-secondary/40">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 md:grid-cols-4 lg:px-10">
          {[
            { n: "+10.000", l: "Vendas" },
            { n: "+100", l: "Modelos" },
            { n: "+5.000", l: "Avaliações" },
            { n: "+1.000", l: "Seguidores" },
          ].map((s) => (
            <div key={s.l} className="border-t border-border pt-6">
              <p className="font-serif text-5xl text-foreground">{s.n}</p>
              <p className="mt-2 text-xs uppercase tracking-[0.2em] text-muted-foreground">
                {s.l}
              </p>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
}
