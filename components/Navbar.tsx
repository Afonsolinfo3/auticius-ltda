"use client";
import Link from "next/link";
import { useState } from "react";

const links = [
  { href: "/sobre", label: "Sobre" },
  { href: "/projetos", label: "Projetos" },
  { href: "/admissao", label: "Trabalhe Conosco" },
  { href: "/contato", label: "Contato" },
  { href: "/ingressos", label: "Ingressos" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b hairline bg-bg/90 backdrop-blur">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex h-20 items-center justify-between">
          <Link href="/" className="font-display text-2xl tracking-wide font-bold">
            AUTICIUS
          </Link>
          <nav className="hidden md:flex items-center gap-10">
            {links.map((l) => (
              <Link key={l.href} href={l.href} className="sheet-label hover:text-fg transition-colors">
                {l.label}
              </Link>
            ))}
          </nav>
          <button className="md:hidden sheet-label" onClick={() => setOpen(!open)} aria-expanded={open} aria-label="Abrir menu">
            {open ? "FECHAR" : "MENU"}
          </button>
        </div>
      </div>
      {open && (
        <nav className="md:hidden border-t hairline">
          <div className="mx-auto max-w-6xl px-6 py-6 flex flex-col gap-5">
            {links.map((l) => (
              <Link key={l.href} href={l.href} className="sheet-label text-base" onClick={() => setOpen(false)}>
                {l.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}