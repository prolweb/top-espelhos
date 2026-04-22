import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { products } from "@/lib/products";
import { ArrowRight, Sparkles, Package, ShieldCheck, Star } from "lucide-react";
import hero from "@/assets/hero-mirror.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Top Espelhos — Espelhos sob medida em Andradina/SP" },
      {
        name: "description",
        content:
          "Espelhos ovais, redondos, orgânicos e iluminados em LED. Sob medida, com acabamento premium e entrega segura. Andradina — SP.",
      },
      { property: "og:title", content: "Top Espelhos — Espelhos sob medida" },
      {
        property: "og:description",
        content:
          "Modelos orgânicos, ovais, redondos e iluminados em LED. Acabamento premium e entrega segura.",
      },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  const featured = products.slice(0, 3);

  return (
    <Layout>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="mx-auto grid max-w-7xl gap-14 px-6 pb-24 pt-16 md:grid-cols-12 md:gap-10 md:py-28 lg:px-10">
          <div className="md:col-span-6 md:pt-10">
            <p className="mb-6 inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.25em] text-champagne">
              <Sparkles className="h-3.5 w-3.5" /> Acabamento premium
            </p>
            <h1 className="font-serif text-5xl leading-[1.05] tracking-tight text-foreground text-balance md:text-7xl">
              Espelhos que elevam o seu ambiente com{" "}
              <span className="italic text-champagne">sofisticação</span>.
            </h1>
            <p className="mt-7 max-w-md text-base leading-relaxed text-muted-foreground">
              Modelos orgânicos, ovais, redondos e iluminados em LED. Cada peça é
              produzida sob medida, com padrão de qualidade e entrega segura.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link
                to="/produtos"
                className="group inline-flex items-center gap-2 rounded-full bg-foreground px-7 py-3.5 text-xs font-medium uppercase tracking-[0.2em] text-background transition-colors hover:bg-champagne hover:text-champagne-foreground"
              >
                Ver Produtos
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <a
                href="https://wa.me/5518996681169?text=Ol%C3%A1!%20Quero%20um%20espelho%20sob%20medida."
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 border-b border-foreground/40 pb-1 text-xs font-medium uppercase tracking-[0.2em] text-foreground transition-colors hover:border-champagne hover:text-champagne"
              >
                Falar no WhatsApp
              </a>
            </div>

            <dl className="mt-14 grid grid-cols-3 gap-6 border-t border-border pt-8">
              <div>
                <dt className="font-serif text-3xl text-foreground">+10k</dt>
                <dd className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">
                  Vendas realizadas
                </dd>
              </div>
              <div>
                <dt className="font-serif text-3xl text-foreground">+5k</dt>
                <dd className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">
                  Avaliações positivas
                </dd>
              </div>
              <div>
                <dt className="font-serif text-3xl text-foreground">+100</dt>
                <dd className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">
                  Modelos disponíveis
                </dd>
              </div>
            </dl>
          </div>

          <div className="relative md:col-span-6">
            <div className="absolute -inset-10 -z-10 bg-[radial-gradient(circle_at_60%_40%,_oklch(0.74_0.07_70/0.18),_transparent_60%)]" />
            <div className="relative aspect-[4/5] overflow-hidden rounded-sm">
              <img
                src={hero}
                alt="Espelho orgânico com iluminação LED em parede de cimento queimado"
                width={1080}
                height={1350}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 hidden rounded-sm border border-border bg-background px-6 py-4 shadow-sm md:block">
              <p className="font-serif text-sm italic text-muted-foreground">
                "Sua casa merece um espelho incrível."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="border-t border-border bg-secondary/30">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
          <div className="mb-14 max-w-2xl">
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.25em] text-champagne">
              Categorias
            </p>
            <h2 className="font-serif text-4xl text-foreground md:text-5xl">
              Modelos que combinam com qualquer estilo
            </h2>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { name: "Oval", desc: "Elegante e suave, ótimo para ambientes minimalistas." },
              { name: "Iluminado", desc: "LED integrado com visual moderno e funcional." },
              { name: "Redondo", desc: "Clássico, equilibrado e versátil." },
              { name: "Orgânico", desc: "Formas únicas com presença artística." },
            ].map((c, i) => (
              <div
                key={c.name}
                className="group border-t border-border pt-6"
              >
                <span className="font-serif text-xs italic text-champagne">
                  0{i + 1}
                </span>
                <h3 className="mt-2 font-serif text-2xl text-foreground">{c.name}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {c.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED PRODUCTS */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
        <div className="mb-14 flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-xl">
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.25em] text-champagne">
              Em destaque
            </p>
            <h2 className="font-serif text-4xl text-foreground md:text-5xl">
              Os mais procurados na loja
            </h2>
          </div>
          <Link
            to="/produtos"
            className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-foreground hover:text-champagne"
          >
            Ver todos <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {featured.map((p) => (
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
              <div className="mt-5 flex items-start justify-between gap-4">
                <div>
                  <p className="text-[10px] font-medium uppercase tracking-[0.25em] text-champagne">
                    {p.category}
                  </p>
                  <h3 className="mt-1 font-serif text-xl text-foreground">{p.name}</h3>
                </div>
                <a
                  href="https://wa.me/5518996681169?text=Ol%C3%A1!%20Quero%20um%20espelho%20sob%20medida."
                  target="_blank"
                  rel="noreferrer"
                  className="shrink-0 text-xs font-medium uppercase tracking-[0.18em] text-foreground hover:text-champagne"
                >
                  Comprar →
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* PROMISE */}
      <section className="border-y border-border bg-foreground text-background">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 md:grid-cols-3 lg:px-10">
          {[
            { icon: Package, title: "Envio rápido", desc: "Embalagem reforçada para todo o Brasil." },
            { icon: ShieldCheck, title: "Compra segura", desc: "Pagamento protegido e suporte rápido." },
            { icon: Star, title: "Alta reputação", desc: "Mais de 5.000 avaliações positivas." },
          ].map((f) => (
            <div key={f.title} className="flex items-start gap-4">
              <f.icon className="h-6 w-6 text-champagne" />
              <div>
                <h3 className="font-serif text-xl">{f.title}</h3>
                <p className="mt-1 text-sm text-background/70">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-5xl px-6 py-24 text-center lg:px-10">
        <h2 className="font-serif text-4xl text-foreground md:text-5xl text-balance">
          Sua casa merece um espelho{" "}
          <span className="italic text-champagne">incrível</span>.
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-muted-foreground">
          Fale com a Top Espelhos e receba orientação personalizada sobre medidas,
          LED e instalação.
        </p>
        <a
          href="https://wa.me/5518996681169?text=Ol%C3%A1!%20Quero%20um%20espelho%20sob%20medida."
          target="_blank"
          rel="noreferrer"
          className="mt-10 inline-flex items-center gap-2 rounded-full bg-foreground px-8 py-4 text-xs font-medium uppercase tracking-[0.2em] text-background transition-colors hover:bg-champagne hover:text-champagne-foreground"
        >
          Conversar no WhatsApp
          <ArrowRight className="h-4 w-4" />
        </a>
      </section>
    </Layout>
  );
}
