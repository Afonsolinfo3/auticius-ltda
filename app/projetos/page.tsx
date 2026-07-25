const projects = [
  { title: "Projeto Institucional A", tag: "Web · Concluído", desc: "Descreva aqui o projeto real — cliente, escopo e resultado." },
  { title: "App Mobile B", tag: "App · Concluído", desc: "Descreva aqui o projeto real — cliente, escopo e resultado." },
  { title: "Campanha de Lançamento C", tag: "Marketing · Concluído", desc: "Descreva aqui o projeto real — cliente, escopo e resultado." },
  { title: "Evento Tech Privado D", tag: "Evento · Em planejamento", desc: "Descreva aqui o projeto futuro — formato, tema e data prevista." },
];

export default function Projetos() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-24">
      <span className="sheet-label">AUTICIUS / PROJETOS</span>
      <h1 className="font-display text-5xl md:text-6xl mt-4 max-w-2xl">
        O que já construímos e o que está por vir.
      </h1>

      <div className="mt-16 grid md:grid-cols-2 gap-px bg-line">
        {projects.map((p) => (
          <div key={p.title} className="bg-bg p-8">
            <span className="sheet-label text-accent">{p.tag}</span>
            <h3 className="font-display text-2xl mt-3">{p.title}</h3>
            <p className="mt-3 text-sm text-muted leading-relaxed">{p.desc}</p>
          </div>
        ))}
      </div>

      <p className="mt-10 text-sm text-muted">
        * Substitua os itens acima pelos projetos reais da Auticius (nome, cliente, link e imagem).
      </p>
    </div>
  );
}