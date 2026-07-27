import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t hairline mt-32">
      <div className="mx-auto max-w-6xl px-6 py-14 grid gap-10 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-3">
            <Image src="/logo.png" alt="Auticius" width={28} height={28} className="h-7 w-auto" />
            <span className="font-display text-xl tracking-wide">AUTICIUS</span>
          </div>
          <p className="mt-3 text-sm text-muted max-w-xs">
            Desenvolvimento de sites e aplicativos, marketing digital e Estruturação de empresas.
          </p>
        </div>

        <div>
          <div className="sheet-label mb-4">Empresa</div>
          <ul className="space-y-2 text-sm">
            <li><Link href="/sobre" className="text-muted hover:text-fg">Sobre</Link></li>
            <li><Link href="/projetos" className="text-muted hover:text-fg">Projetos</Link></li>
            <li><Link href="/admissao" className="text-muted hover:text-fg">Trabalhe Conosco</Link></li>
          </ul>
        </div>

        <div>
          <div className="sheet-label mb-4">Contato</div>
          <ul className="space-y-2 text-sm text-muted">
            <li>auticiusltdaa@gmail.com</li>
            <li>+55 (11) 95420-1237</li>
            <li><Link href="/contato" className="hover:text-fg">Falar com a equipe →</Link></li>
          </ul>
        </div>
      </div>

      <div className="border-t hairline">
        <div className="mx-auto max-w-6xl px-6 py-6 flex flex-col md:flex-row justify-between gap-2">
          <span className="sheet-label">© {new Date().getFullYear()} AUTICIUS LTDA</span>
          <span className="sheet-label">TODOS OS DIREITOS RESERVADOS</span>
        </div>
      </div>
    </footer>
  );
}