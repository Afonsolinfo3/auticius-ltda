import { NextResponse } from "next/server";
import { MercadoPagoConfig, Payment } from "mercadopago";
import { Resend } from "resend";
import { EVENT } from "@/app/ingressos/config";

const client = new MercadoPagoConfig({ accessToken: process.env.MP_ACCESS_TOKEN! });
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const paymentId = body?.data?.id ?? new URL(req.url).searchParams.get("data.id");
    if (!paymentId) return NextResponse.json({ ok: true });

    // Nunca confie nos dados do corpo da notificação — busca o pagamento direto na API da MP
    const payment = await new Payment(client).get({ id: paymentId });

    if (payment.status === "approved") {
      const meta = payment.metadata as { nome?: string; email?: string; quantidade?: string | number };
      const email = meta?.email || payment.payer?.email;
      const nome = meta?.nome || "Cliente";
      const quantidade = meta?.quantidade || 1;
      const codigo = `AUT-${payment.id}`;

      if (email) {
        await resend.emails.send({
          from: "Auticius <onboarding@resend.dev>",
          to: email,
          subject: `Seu ingresso — ${EVENT.name}`,
          text: `Olá ${nome},\n\nSeu pagamento foi confirmado!\n\nEvento: ${EVENT.name}\nData: ${EVENT.date}\nLocal: ${EVENT.location}\nQuantidade: ${quantidade}\nCódigo do ingresso: ${codigo}\n\nApresente este código na entrada do evento.`,
        });
      }
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Erro no webhook:", err);
    return NextResponse.json({ ok: true }); // sempre 200, senão a MP fica reenviando em loop
  }
}

export async function GET() {
  return NextResponse.json({ ok: true });
}