import Link from "next/link";

const services = [
  { n: "01", title: "Startup Structure", desc: "Da ideia ao projeto estruturado — pronto para investidores, parceiros e clientes." },
  { n: "02", title: "Branding & Positioning", desc: "Identidade, posicionamento e presença de marca com acompanhamento estratégico." },
  { n: "03", title: "Project Innovation", desc: "Novos projetos, eventos e iniciativas de inovação para marcas já consolidadas." },
];

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden border-b hairline">
        <div className="blueprint-grid" />
        <div className="mx-auto max-w-6xl px-6 py-32 md:py-44 relative">
          <span className="sheet-label">AUTICIUS LTDA / DESENVOLVIMENTO DE STARTUPS</span>
          <h1 className="font-display text-6xl md:text-8xl leading-[0.95] mt-6 max-w-4xl">
            DAMOS ESTRUTURA A IDEIAS QUE QUEREM VIRAR NEGÓCIO.
          </h1>
          <p className="mt-8 max-w-xl text-muted text-lg">
            Focamos no desenvolvimento de startups — e apoiamos negócios em geral com marketing
            digital, estratégia e posicionamento de marca para crescer com estrutura.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link href="/servicos" className="border border-accent text-accent px-6 py-3 sheet-label hover:bg-accent hover:text-bg transition-colors">
              Ver serviços
            </Link>
            <Link href="/contato" className="border hairline px-6 py-3 sheet-label hover:text-fg text-muted transition-colors">
              Falar com a equipe
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-24">
        <span className="sheet-label">O QUE FAZEMOS</span>
        <div className="mt-8 grid md:grid-cols-3 border-t hairline">
          {services.map((s) => (
            <div key={s.n} className="border-b md:border-r last:border-r-0 hairline p-8">
              <span className="font-display text-4xl text-accent">{s.n}</span>
              <h3 className="font-display text-2xl mt-4">{s.title}</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t hairline">
        <div className="mx-auto max-w-6xl px-6 py-24 flex flex-col md:flex-row items-start md:items-end justify-between gap-6">
          <div>
            <span className="sheet-label">PRONTO PRA COMEÇAR?</span>
            <h2 className="font-display text-4xl md:text-5xl mt-4 max-w-lg">
              Vamos estruturar seu próximo projeto.
            </h2>
          </div>
          <Link href="/contato" className="border border-accent text-accent px-6 py-3 sheet-label hover:bg-accent hover:text-bg transition-colors whitespace-nowrap">
            Iniciar conversa
          </Link>
        </div>
      </section>
    </>
  );
}