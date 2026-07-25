"use client";
import { useState } from "react";

export default function Contato() {
  const [status, setStatus] = useState<"idle" | "loading" | "sent" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    try {
      const res = await fetch("/api/contato", {
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
    <div className="mx-auto max-w-6xl px-6 py-24 grid md:grid-cols-2 gap-16">
      <div>
        <span className="sheet-label">AUTICIUS / CONTATO</span>
        <h1 className="font-display text-5xl md:text-6xl mt-4">Vamos conversar.</h1>
        <p className="mt-6 text-muted max-w-sm">
          Conta um pouco do seu projeto que a equipe retorna com os próximos passos.
        </p>
        <div className="mt-12 space-y-3 text-sm">
          <div><span className="sheet-label">E-mail</span><p className="mt-1">auticiusltdaa@gmail.com</p></div>
          <div><span className="sheet-label">Telefone</span><p className="mt-1">+55 (11) 95420-1237</p></div>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="grid gap-6">
        <div>
          <label className="sheet-label block mb-2">Nome</label>
          <input type="text" name="nome" required className="w-full px-4 py-3 text-sm" />
        </div>
        <div>
          <label className="sheet-label block mb-2">E-mail</label>
          <input type="email" name="email" required className="w-full px-4 py-3 text-sm" />
        </div>
        <div>
          <label className="sheet-label block mb-2">Assunto</label>
          <input type="text" name="assunto" className="w-full px-4 py-3 text-sm" />
        </div>
        <div>
          <label className="sheet-label block mb-2">Mensagem</label>
          <textarea name="mensagem" required rows={5} className="w-full px-4 py-3 text-sm" />
        </div>
        <button
          type="submit"
          disabled={status === "loading"}
          className="border border-accent text-accent px-6 py-3 sheet-label hover:bg-accent hover:text-bg transition-colors w-fit disabled:opacity-50"
        >
          {status === "loading" ? "Enviando..." : "Enviar mensagem"}
        </button>
        {status === "sent" && <p className="text-sm text-accent">Mensagem enviada com sucesso.</p>}
        {status === "error" && <p className="text-sm text-red-400">Erro ao enviar. Tente novamente.</p>}
      </form>
    </div>
  );
}