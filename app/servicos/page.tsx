import Link from "next/link";

const services = [
  {
    icon: "🚀",
    title: "Startup Structure",
    subtitle: "Da ideia ao projeto estruturado",
    desc: "Transformamos uma ideia em um projeto estruturado, organizado e preparado para ser apresentado a investidores, parceiros e possíveis clientes.",
    includes: [
      "Estruturação da ideia",
      "Organização do projeto",
      "Estruturação do modelo de negócio",
      "Desenvolvimento da proposta de valor",
      "Orientações estratégicas",
      "Preparação do projeto para apresentação a investidores",
    ],
    prazo: "Até 2 meses de projeto",
  },
  {
    icon: "🎯",
    title: "Branding & Positioning",
    subtitle: "Crie, fortaleça e posicione sua marca",
    desc: "Um acompanhamento estratégico para marcas que desejam criar sua identidade, melhorar seu posicionamento ou desenvolver uma presença mais forte no mercado.",
    includes: [
      "1 call estratégica por semana",
      "Trabalho na criação ou melhoria da marca",
      "Orientações de posicionamento",
      "Auxílio em marketing",
      "Dicas sobre utilização de ferramentas",
      "Acompanhamento estratégico durante o período contratado",
    ],
    prazo: "Planos de 2, 3 ou 4 meses",
  },
  {
    icon: "💡",
    title: "Project Innovation",
    subtitle: "Inovação e desenvolvimento de novos projetos",
    desc: "Para marcas já consolidadas que desejam desenvolver novos projetos, eventos, ações ou iniciativas de inovação. A Auticius acompanha o projeto desde sua criação até sua aplicação.",
    includes: [
      "Estruturação do projeto",
      "Planejamento",
      "Acompanhamento desde a criação",
      "Suporte durante o desenvolvimento",
      "Auxílio na aplicação prática",
      "Acompanhamento durante a execução",
    ],
    prazo: "3 meses de acompanhamento, renovável",
  },
];

export default function Servicos() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-24">
      <span className="sheet-label">AUTICIUS / SERVIÇOS</span>
      <h1 className="font-display text-5xl md:text-6xl mt-4 max-w-2xl">
        Estrutura, desenvolvimento e evolução para ideias, marcas e projetos.
      </h1>
      <p className="mt-6 max-w-2xl text-muted leading-relaxed">
        A Auticius atua na estruturação, desenvolvimento e evolução de ideias, marcas e projetos,
        oferecendo suporte estratégico para transformar conceitos em projetos mais organizados,
        posicionados e preparados para crescer.
      </p>

      <div className="mt-16 grid md:grid-cols-3 gap-px bg-line border-t hairline">
        {services.map((s) => (
          <div key={s.title} className="bg-bg p-8 flex flex-col">
            <span className="text-2xl">{s.icon}</span>
            <h2 className="font-display text-2xl mt-4">{s.title}</h2>
            <p className="text-xs uppercase tracking-widest text-fg/70 mt-1">{s.subtitle}</p>
            <p className="mt-4 text-sm text-muted leading-relaxed">{s.desc}</p>

            <ul className="mt-6 space-y-2 text-sm text-muted flex-1">
              {s.includes.map((i) => (
                <li key={i} className="flex gap-2">
                  <span className="text-accent">—</span>
                  <span>{i}</span>
                </li>
              ))}
            </ul>

            <p className="sheet-label mt-6">{s.prazo}</p>

            <Link
              href="/contato"
              className="mt-6 border border-accent text-accent px-5 py-3 sheet-label hover:bg-accent hover:text-bg transition-colors text-center"
            >
              Falar sobre valores
            </Link>
          </div>
        ))}
      </div>

      <div className="mt-24 border-t hairline pt-16 text-center">
        <p className="font-display text-3xl md:text-4xl max-w-2xl mx-auto">
          Ideias precisam de estrutura para se tornarem realidade.
        </p>
        <p className="mt-4 text-muted max-w-xl mx-auto">
          Transformamos ideias em projetos, fortalecemos marcas e ajudamos negócios a desenvolverem
          novas possibilidades por meio de estratégia, posicionamento e inovação.
        </p>
      </div>
    </div>
  );
}