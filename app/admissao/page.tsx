"use client";
import { useState } from "react";

export default function Admissao() {
  const [status, setStatus] = useState<"idle" | "loading" | "sent" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    try {
      const res = await fetch("/api/admissao", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error();
      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <div className="mx-auto max-w-3xl px-6 py-24">
      <span className="sheet-label">AUTICIUS / TRABALHE CONOSCO</span>
      <h1 className="font-display text-5xl md:text-6xl mt-4">Processo de admissão</h1>
      <p className="mt-6 text-muted max-w-xl">
        Preencha o formulário abaixo. Nossa equipe analisa cada candidatura e retorna por e-mail.
      </p>

      <form onSubmit={handleSubmit} className="mt-14 grid gap-6">
        <div className="grid md:grid-cols-2 gap-6">
          <Field label="Nome completo" name="nome" required />
          <Field label="E-mail" name="email" type="email" required />
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <Field label="Telefone / WhatsApp" name="telefone" />
          <div>
            <label className="sheet-label block mb-2">Área de interesse</label>
            <select name="area" required className="w-full px-4 py-3 text-sm">
              <option value="">Selecione</option>
              <option value="desenvolvimento">Desenvolvimento</option>
              <option value="marketing">Marketing</option>
              <option value="eventos">Eventos</option>
              <option value="outro">Outro</option>
            </select>
          </div>
        </div>
        <Field label="LinkedIn / Portfólio (link)" name="portfolio" />
        <div>
          <label className="sheet-label block mb-2">Experiência resumida</label>
          <textarea name="experiencia" required rows={5} className="w-full px-4 py-3 text-sm" placeholder="Conte brevemente sua experiência relevante para a vaga" />
        </div>

        <p className="text-xs text-muted">
          * Envie seu currículo em PDF através do link de portfólio/Drive acima — este formulário
          ainda não tem upload direto de arquivo.
        </p>

        <button
          type="submit"
          disabled={status === "loading"}
          className="border border-accent text-accent px-6 py-3 sheet-label hover:bg-accent hover:text-bg transition-colors w-fit disabled:opacity-50"
        >
          {status === "loading" ? "Enviando..." : "Enviar candidatura"}
        </button>

        {status === "sent" && <p className="text-sm text-accent">Candidatura enviada com sucesso.</p>}
        {status === "error" && <p className="text-sm text-red-400">Erro ao enviar. Tente novamente.</p>}
      </form>
    </div>
  );
}

function Field({ label, name, type = "text", required = false }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label className="sheet-label block mb-2">{label}</label>
      <input type={type} name={name} required={required} className="w-full px-4 py-3 text-sm" />
    </div>
  );
}