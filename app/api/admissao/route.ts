import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const data = await req.json();
  try {
    await resend.emails.send({
      from: "Auticius <onboarding@resend.dev>",
      to: "auticiusltdaa@gmail.com", // e-mail que vai RECEBER as candidaturas
      subject: `Nova candidatura: ${data.area}`,
      text: `Nome: ${data.nome}\nE-mail: ${data.email}\nTelefone: ${data.telefone}\nÁrea: ${data.area}\nPortfólio: ${data.portfolio}\n\nExperiência:\n${data.experiencia}`,
    });
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}