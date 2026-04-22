import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { products } from "@/lib/products";
import { useState } from "react";

const categories = ["Todos", "Oval", "Redondo", "Retangular", "Orgânico", "Iluminado"] as const;

export const Route = createFileRoute("/produtos")({
  head: () => ({
    meta: [
      { title: "Produtos — Top Espelhos" },
      {
        name: "description",
        content:
          "Conheça nossa coleção de espelhos: ovais, redondos, retangulares, orgânicos e iluminados em LED. Sob medida.",
      },
      { property: "og:title", content: "Produtos — Top Espelhos" },
      {
        property: "og:description",
        content: "Coleção completa de espelhos sob medida com acabamento premium.",
      },
    ],
  }),
  component: ProductsPage,
});

function ProductsPage() {
  const [filter, setFilter] = useState<(typeof categories)[number]>("Todos");

  const list =
    filter === "Todos" ? products : products.filter((p) => p.category === filter);

  return (
    <Layout>
      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.25em] text-champagne">
            Coleção
          </p>
          <h1 className="font-serif text-5xl text-foreground md:text-6xl text-balance">
            Espelhos sob medida
          </h1>
          <p className="mt-6 max-w-xl text-base text-muted-foreground">
            Cada peça é produzida com atenção ao detalhe — escolha o formato e
            personalize com LED, alça ou acabamento especial.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="mb-12 flex flex-wrap gap-3">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setFilter(c)}
              className={`rounded-full border px-5 py-2 text-xs font-medium uppercase tracking-[0.18em] transition-colors ${
                filter === c
                  ? "border-foreground bg-foreground text-background"
                  : "border-border text-muted-foreground hover:border-foreground hover:text-foreground"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((p) => (
            <article key={p.slug} className="group">
              <div className="relative aspect-[4/5] overflow-hidden rounded-sm bg-secondary">
                <img
                  src={p.image}
                  alt={p.name}
                  width={900}
                  height={1100}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="mt-5">
                <p className="text-[10px] font-medium uppercase tracking-[0.25em] text-champagne">
                  {p.category}
                </p>
                <h3 className="mt-1 font-serif text-2xl text-foreground">{p.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {p.description}
                </p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {p.highlights.map((h) => (
                    <li
                      key={h}
                      className="rounded-full border border-border px-3 py-1 text-[10px] uppercase tracking-wider text-muted-foreground"
                    >
                      {h}
                    </li>
                  ))}
                </ul>
                <a
                  href={`https://wa.me/5518996681169?text=${encodeURIComponent(
                    `Olá! Tenho interesse no ${p.name}.`,
                  )}`}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-5 inline-flex items-center gap-2 border-b border-foreground/40 pb-1 text-xs font-medium uppercase tracking-[0.18em] text-foreground transition-colors hover:border-champagne hover:text-champagne"
                >
                  Comprar no WhatsApp →
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>
    </Layout>
  );
}
