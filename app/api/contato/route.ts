import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const data = await req.json();
  try {
    await resend.emails.send({
      from: "Auticius <onboarding@resend.dev>",
      to: "auticiusltdaa@gmail.com", // e-mail que vai RECEBER as mensagens de contato
      subject: `Novo contato: ${data.assunto || "Sem assunto"}`,
      text: `Nome: ${data.nome}\nE-mail: ${data.email}\nAssunto: ${data.assunto}\n\nMensagem:\n${data.mensagem}`,
    });
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}