import oval from "@/assets/mirror-oval.jpg";
import ovalBase from "@/assets/mirror-oval-base.jpg";
import organic from "@/assets/mirror-organic.jpg";
import rectangular from "@/assets/mirror-rectangular.jpg";
import round from "@/assets/mirror-round.jpg";
import strap from "@/assets/mirror-strap.jpg";

export type Product = {
  slug: string;
  name: string;
  category: "Oval" | "Redondo" | "Retangular" | "Orgânico" | "Iluminado";
  description: string;
  highlights: string[];
  image: string;
};

export const products: Product[] = [
  {
    slug: "oval-led",
    name: "Espelho Oval com LED",
    category: "Oval",
    description:
      "Curvas suaves e iluminação LED integrada — peça versátil para banheiros, lavabos e closets.",
    highlights: ["LED integrado", "Sob medida", "Acabamento premium"],
    image: oval,
  },
  {
    slug: "oval-base-reta",
    name: "Espelho Oval Base Reta",
    category: "Iluminado",
    description:
      "Variação contemporânea do oval clássico, com base reta para apoio sobre bancadas e penteadeiras.",
    highlights: ["Base reta", "LED frontal", "Visual moderno"],
    image: ovalBase,
  },
  {
    slug: "organico",
    name: "Espelho Orgânico",
    category: "Orgânico",
    description:
      "Formas únicas e fluidas que transformam a parede em um ponto focal artístico do ambiente.",
    highlights: ["Forma exclusiva", "LED opcional", "Peça assinada"],
    image: organic,
  },
  {
    slug: "retangular",
    name: "Espelho Retangular",
    category: "Retangular",
    description:
      "Linhas retas e elegantes. Ideal para corpo inteiro, halls e composições verticais.",
    highlights: ["Moldura fina", "Diversos tamanhos", "Instalação fácil"],
    image: rectangular,
  },
  {
    slug: "redondo",
    name: "Espelho Redondo",
    category: "Redondo",
    description:
      "Clássico equilibrado que harmoniza com qualquer estilo de decoração — do minimalista ao boho.",
    highlights: ["Moldura metálica", "Diversos diâmetros", "Atemporal"],
    image: round,
  },
  {
    slug: "redondo-alca",
    name: "Redondo com Alça",
    category: "Redondo",
    description:
      "Detalhe da alça em couro ou metal. Aporta personalidade e charme ao ambiente.",
    highlights: ["Alça em metal", "Toque artesanal", "Foco decorativo"],
    image: strap,
  },
];
