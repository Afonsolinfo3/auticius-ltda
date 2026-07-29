const steps = [
  { n: "01", title: "Descoberta", desc: "Entendemos o negócio, o público e o problema real antes de qualquer linha de código." },
  { n: "02", title: "Construção", desc: "Desenvolvimento e estratégia caminham juntos — nada é feito isolado." },
  { n: "03", title: "Lançamento", desc: "Entrega com acompanhamento, não só um link no ar." },
  { n: "04", title: "Crescimento", desc: "Marketing e otimização contínua depois do lançamento." },
];

const values = [
  { title: "Estrutura", desc: "Toda ideia precisa de forma antes de crescer. Organizamos antes de construir." },
  { title: "Clareza", desc: "Comunicação direta e transparente em cada etapa do projeto." },
  { title: "Compromisso", desc: "Acompanhamos de perto, do início ao lançamento — e depois dele." },
  { title: "Crescimento conjunto", desc: "O sucesso do cliente é o indicador real do nosso trabalho." },
];

export default function Sobre() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-24">
      <span className="sheet-label">AUTICIUS / SOBRE</span>
      <h1 className="font-display text-5xl md:text-6xl mt-4 max-w-2xl">
        Estruturamos ideias, marcas e negócios para crescerem de verdade.
      </h1>
      <p className="mt-8 max-w-2xl text-muted leading-relaxed">
        A Auticius é uma empresa especializada no desenvolvimento de startups,
        inovação e consultoria estratégica para negócios em diferentes estágios de maturidade.
        Sua missão é transformar ideias em projetos estruturados, oferecendo orientação técnica e estratégica para empreendedores que estão iniciando sua jornada
        e ainda não possuem conhecimento sobre os primeiros passos para a criação e consolidação de um negócio.
      </p>

      <div className="mt-20 grid md:grid-cols-3 gap-10 border-t hairline pt-16">
        <div>
          <span className="sheet-label text-accent">Missão</span>
          <p className="mt-3 text-sm leading-relaxed">
            Transformar ideias em projetos estruturados, prontos para crescer e para serem
            apresentados ao mercado.
          </p>
        </div>
        <div>
          <span className="sheet-label text-accent">Visão</span>
          <p className="mt-3 text-sm leading-relaxed">
            Ser reconhecida como a estrutura por trás dos negócios que estão começando a se tornar
            realidade.
          </p>
        </div>
        <div>
          <span className="sheet-label text-accent">Valores</span>
          <ul className="mt-3 space-y-2 text-sm leading-relaxed">
            {values.map((v) => (
              <li key={v.title}><strong className="text-fg">{v.title}</strong> — {v.desc}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-20">
        <span className="sheet-label">COMO TRABALHAMOS</span>
        <div className="mt-8 grid md:grid-cols-4 border-t hairline">
          {steps.map((s) => (
            <div key={s.n} className="border-b md:border-r last:border-r-0 hairline p-6">
              <span className="font-display text-3xl text-accent">{s.n}</span>
              <h3 className="font-display text-xl mt-3">{s.title}</h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <p className="mt-8 text-xs text-muted">
        * Missão, visão e valores acima são um rascunho inicial — personalize com o texto real da Auticius.
      </p>
    </div>
  );
}
