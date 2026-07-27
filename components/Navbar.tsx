"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import VerifiedBadge from "@/components/VerifiedBadge";

const links = [
  { href: "/sobre", label: "Sobre" },
  { href: "/servicos", label: "Serviços" },
  { href: "/projetos", label: "Projetos" },
  { href: "/admissao", label: "Trabalhe Conosco" },
  { href: "/contato", label: "Contato" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b hairline bg-bg/90 backdrop-blur">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex h-20 items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <Image src="/logo.png" alt="Auticius" width={32} height={32} className="h-8 w-auto" />
            <span className="font-display text-2xl tracking-wide font-bold flex items-center gap-1.5">
              AUTICIUS
              <VerifiedBadge className="h-4 w-4 text-accent shrink-0" />
            </span>
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