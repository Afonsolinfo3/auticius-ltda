"use client";
import { useRef } from "react";

const projects = [
  { title: "Quadra Livre", tag: "NEW! NEW! NEW!", desc: "Quadra Livre — é um aplicativo onde você faz amizade enquanto joga. Descubra quadras, campos e muitos outros espaços para você e seus parceiros jogarem! Descubra em breve do seu potencial.." },
  // { title: "Marca B", tag: "Branding & Positioning", desc: "Descreva aqui o projeto real de marca — cliente, entregas e resultado." },
  // { title: "Iniciativa C", tag: "Project Innovation", desc: "Descreva aqui o projeto de inovação real — cliente, escopo e resultado." },
  // { title: "Startup D", tag: "Startup Structure · Em andamento", desc: "Descreva aqui um projeto em desenvolvimento no momento." },
];

export default function Projetos() {
  const scrollRef = useRef<HTMLDivElement>(null);

  function scroll(dir: "left" | "right") {
    scrollRef.current?.scrollBy({ left: dir === "left" ? -380 : 380, behavior: "smooth" });
  }

  return (
    <div className="mx-auto max-w-6xl px-6 py-24">
      <span className="sheet-label">AUTICIUS / PROJETOS</span>
      <div className="flex items-end justify-between mt-4 flex-wrap gap-4">
        <h1 className="font-display text-5xl md:text-6xl max-w-2xl">
          Startups e negócios que já estruturamos.
        </h1>
        <div className="flex gap-2">
          <button onClick={() => scroll("left")} aria-label="Anterior" className="border hairline px-4 py-2 sheet-label hover:text-fg text-muted transition-colors">
            ←
          </button>
          <button onClick={() => scroll("right")} aria-label="Próximo" className="border hairline px-4 py-2 sheet-label hover:text-fg text-muted transition-colors">
            →
          </button>
        </div>
      </div>

      <div
        ref={scrollRef}
        className="mt-12 flex gap-6 overflow-x-auto pb-6 snap-x snap-mandatory scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {projects.map((p) => (
          <div key={p.title} className="snap-start shrink-0 w-[320px] md:w-[380px] border hairline p-8">
            <span className="sheet-label text-accent">{p.tag}</span>
            <h3 className="font-display text-2xl mt-3">{p.title}</h3>
            <p className="mt-3 text-sm text-muted leading-relaxed">{p.desc}</p>
          </div>
        ))}
      </div>

      <p className="mt-6 text-sm text-muted">
        * Todos os projetos acima são reais e de total propriedade de Auticius LTDA™
      </p>
    </div>
  );
}
