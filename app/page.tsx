import Link from "next/link";

const services = [
  {
    n: "01",
    title: "Desenvolvimento",
    desc: "Sites institucionais, landing pages e aplicativos web e mobile, construídos sob medida — do wireframe ao deploy.",
  },
  {
    n: "02",
    title: "Marketing",
    desc: "Estratégia digital, performance e posicionamento de marca para empresas que querem crescer com estrutura.",
  },
  {
    n: "03",
    title: "Estruturação",
    desc: "Organização e estratégia para sua empresa — com foco em crescer no mercado.",
  },
];

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden border-b hairline">
        <div className="blueprint-grid" />
        <div className="mx-auto max-w-6xl px-6 py-32 md:py-44 relative">
          <span className="sheet-label">AUTICIUS LTDA / SEDE DIGITAL</span>
          <h1 className="font-display text-6xl md:text-8xl leading-[0.95] mt-6 max-w-4xl">
            VOCÊ TEM UMA IDEIA OU QUER DESENVOLVER UM NOVO PROJETO? NÓS ESTRUTURAMOS ISSO COM VOCÊ!
          </h1>
          <p className="mt-8 max-w-xl text-muted text-lg">
            Desenvolvimento, marketing e Estruturação de empresas — tudo o que uma empresa
            precisa pra sair do papel e ganhar presença real.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link href="/projetos" className="border border-accent text-accent px-6 py-3 sheet-label hover:bg-accent hover:text-bg transition-colors">
              Ver projetos
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