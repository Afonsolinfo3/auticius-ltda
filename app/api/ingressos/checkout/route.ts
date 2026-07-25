import { NextResponse } from "next/server";
import { MercadoPagoConfig, Preference } from "mercadopago";
import { EVENT } from "@/app/ingressos/config";

const client = new MercadoPagoConfig({ accessToken: process.env.MP_ACCESS_TOKEN! });

export async function POST(req: Request) {
  const { nome, email, quantidade } = await req.json();

  if (!nome || !email || !quantidade || quantidade < 1) {
    return NextResponse.json({ error: "Dados inválidos" }, { status: 400 });
  }

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

  try {
    const preference = new Preference(client);
    const result = await preference.create({
      body: {
        items: [
          {
            id: "ingresso-evento",
            title: EVENT.name,
            quantity: Number(quantidade),
            unit_price: EVENT.price,
            currency_id: "BRL",
          },
        ],
        payer: { name: nome, email },
        metadata: { nome, email, quantidade },
        back_urls: {
          success: `${siteUrl}/ingressos/sucesso`,
          failure: `${siteUrl}/ingressos/erro`,
          pending: `${siteUrl}/ingressos/pendente`,
        },
        // auto_return: "approved",
        notification_url: `${siteUrl}/api/ingressos/webhook`,
      },
    });

    return NextResponse.json({ init_point: result.init_point });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Erro ao criar pagamento" }, { status: 500 });
  }
}