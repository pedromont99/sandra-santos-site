import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { nome, email, servico, mensagem } = await request.json();

    await resend.emails.send({
      from: "noreply@sandrasantos.pt",
      to: "ola@sandrasantos.pt",
      subject: `Novo contacto de ${nome}`,
      html: `
        <h2>Novo contacto pelo site</h2>
        <p><strong>Nome:</strong> ${nome}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Serviço:</strong> ${servico}</p>
        <p><strong>Mensagem:</strong> ${mensagem}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: "Erro ao enviar email" }, { status: 500 });
  }
}