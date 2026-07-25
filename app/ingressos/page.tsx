"use client";
import { useState } from "react";
import { EVENT } from "./config";

export default function Ingressos() {
  const [quantidade, setQuantidade] = useState(1);
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "error">("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/ingressos/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nome, email, quantidade }),
      });
      const data = await res.json();
      if (!res.ok || !data.init_point) throw new Error();
      window.location.href = data.init_point;
    } catch {
      setStatus("error");
    }
  }

  const total = (EVENT.price * quantidade).toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  return (
    <div className="mx-auto max-w-3xl px-6 py-24">
      <span className="sheet-label">AUTICIUS / INGRESSOS</span>
      <h1 className="font-display text-5xl md:text-6xl mt-4">{EVENT.name}</h1>
      <p className="mt-4 text-muted">{EVENT.date} · {EVENT.location}</p>
      <p className="mt-6 max-w-xl text-muted leading-relaxed">{EVENT.description}</p>

      <form onSubmit={handleSubmit} className="mt-14 grid gap-6 border-t hairline pt-10">
        <div>
          <label className="sheet-label block mb-2">Nome completo</label>
          <input required value={nome} onChange={(e) => setNome(e.target.value)} className="w-full px-4 py-3 text-sm" />
        </div>
        <div>
          <label className="sheet-label block mb-2">E-mail</label>
          <input required type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full px-4 py-3 text-sm" />
        </div>
        <div>
          <label className="sheet-label block mb-2">Quantidade</label>
          <input
            required
            type="number"
            min={1}
            max={10}
            value={quantidade}
            onChange={(e) => setQuantidade(Number(e.target.value))}
            className="w-32 px-4 py-3 text-sm"
          />
        </div>

        <div className="flex items-center justify-between border-t hairline pt-6">
          <span className="sheet-label">TOTAL</span>
          <span className="font-display text-3xl text-accent">{total}</span>
        </div>

        <button
          type="submit"
          disabled={status === "loading"}
          className="border border-accent text-accent px-6 py-3 sheet-label hover:bg-accent hover:text-bg transition-colors w-fit disabled:opacity-50"
        >
          {status === "loading" ? "Redirecionando..." : "Comprar ingresso"}
        </button>
        {status === "error" && <p className="text-sm text-red-400">Erro ao iniciar pagamento. Tente novamente.</p>}
      </form>
    </div>
  );
}