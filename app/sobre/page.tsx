const steps = [
  { n: "01", title: "Descoberta", desc: "Entendemos o negócio, o público e o problema real antes de qualquer linha de código." },
  { n: "02", title: "Construção", desc: "Desenvolvimento e estratégia caminham juntos — nada é feito isolado." },
  { n: "03", title: "Lançamento", desc: "Entrega com acompanhamento, não só um link no ar." },
  { n: "04", title: "Crescimento", desc: "Marketing e otimização contínua depois do lançamento." },
];

export default function Sobre() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-24">
      <span className="sheet-label">AUTICIUS / SOBRE</span>
      <h1 className="font-display text-5xl md:text-6xl mt-4 max-w-2xl">
        Uma empresa construída para estruturar negócios digitais.
      </h1>
      <p className="mt-8 max-w-2xl text-muted leading-relaxed">
        A Auticius nasceu da junção de três frentes que normalmente andam separadas:
        desenvolvimento, marketing e eventos de tecnologia. Trabalhamos para que
        empresas tenham não só um site ou app bonito, mas uma estrutura real de
        crescimento por trás — do código à comunidade.
      </p>

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
    </div>
  );
}