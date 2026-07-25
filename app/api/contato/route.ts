import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const data = await req.json();
  console.log("Novo contato:", data);
  // TODO: integrar envio de e-mail (ver instruções com Resend)
  return NextResponse.json({ ok: true });
}