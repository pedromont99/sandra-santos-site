import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";
import { servicos } from "@/data/servicos";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return servicos.map((s) => ({ slug: s.slug }));
}

export default async function ServicoDetalhe({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const servico = servicos.find((s) => s.slug === slug);

  if (!servico) notFound();

  const currentIndex = servicos.findIndex((s) => s.slug === slug);
  const next = servicos[currentIndex + 1] ?? null;
  const prev = servicos[currentIndex - 1] ?? null;

  return (
    <main className="bg-[#1C1C1E] min-h-screen">

      {/* HERO COM FOTO */}
      <section className="relative h-[70vh] min-h-[500px] overflow-hidden">
        <Image
          src={servico.image}
          alt={servico.title}
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1C1C1E]/40 via-transparent to-[#1C1C1E]" />

        {/* VOLTAR */}
        <div className="absolute top-28 left-6 md:left-12 z-10">
          <Link href="/servicos" className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-[#C8A96E] hover:gap-4 transition-all">
            <ArrowLeft size={14} /> Voltar aos Serviços
          </Link>
        </div>

        {/* TÍTULO SOBRE O HERO */}
        <div className="absolute bottom-0 left-0 w-full px-6 md:px-12 pb-16 z-10">
          <div className="max-w-7xl mx-auto">
            <p className="text-[#C8A96E] text-xs uppercase tracking-[0.4em] font-bold mb-4">{servico.id} — Serviço</p>
            <h1 className="text-5xl md:text-7xl font-bold text-[#F2EDE4] tracking-tighter italic font-serif">
              {servico.title}
            </h1>
            <p className="text-xl text-[#C8A96E] font-serif italic mt-4">{servico.tagline}</p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 md:px-12 py-24">

        {/* DESCRIÇÃO */}
        <div className="grid lg:grid-cols-12 gap-20 mb-32">
          <div className="lg:col-span-7 space-y-8">
            <h2 className="text-3xl font-serif italic text-[#C8A96E]">Sobre este serviço</h2>
            <p className="text-xl text-[#F2EDE4]/70 leading-relaxed">{servico.descricaoLonga}</p>
          </div>
          <div className="lg:col-span-5 space-y-6">
            <h2 className="text-3xl font-serif italic text-[#C8A96E]">O que inclui</h2>
            <ul className="space-y-4">
              {servico.items.map((item, i) => (
                <li key={i} className="flex items-center gap-4 text-[#F2EDE4] text-lg">
                  <CheckCircle2 className="w-6 h-6 text-[#8C6D3F] shrink-0" />
                  <span className="font-semibold">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* PROCESSO */}
        <div className="mb-32">
          <h2 className="text-4xl font-serif italic text-[#C8A96E] mb-16 text-center">Como trabalho</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {servico.processo.map((p) => (
              <div key={p.step} className="bg-[#2E2E30] border border-[#F2EDE4]/5 p-8 rounded-[1.5rem] relative overflow-hidden">
                <span className="absolute top-4 right-6 text-6xl font-serif text-[#F2EDE4]/5">{p.step}</span>
                <p className="text-[#C8A96E] text-[10px] uppercase tracking-widest mb-4">{p.step}</p>
                <h3 className="text-xl font-bold text-[#F2EDE4] mb-4">{p.title}</h3>
                <p className="text-[#F2EDE4]/60 text-sm leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* RESULTADOS */}
        <div className="bg-[#F2EDE4] rounded-[3rem] p-12 md:p-20 mb-32">
          <h2 className="text-4xl font-serif italic text-[#1C1C1E] mb-12 text-center">Resultados esperados</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {servico.resultados.map((resultado, i) => (
              <div key={i} className="flex items-center gap-4 text-[#1C1C1E] text-lg p-6 border-b border-[#1C1C1E]/10">
                <CheckCircle2 className="w-6 h-6 text-[#8C6D3F] shrink-0" />
                <span className="font-semibold">{resultado}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center space-y-8 mb-32">
          <h3 className="text-3xl md:text-5xl font-serif italic text-[#F2EDE4]">Pronta para começar?</h3>
          <Link
            href="/contacto"
            className="inline-flex items-center gap-3 bg-[#C8A96E] text-[#1C1C1E] px-12 py-5 rounded-xl font-bold hover:bg-[#8C6D3F] hover:text-[#F2EDE4] transition-all group"
          >
            Trabalhar comigo
            <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
          </Link>
        </div>

        {/* NAVEGAÇÃO ENTRE SERVIÇOS */}
        <div className="flex justify-between items-center border-t border-[#F2EDE4]/10 pt-12">
          {prev ? (
            <Link href={`/servicos/${prev.slug}`} className="flex items-center gap-3 group text-[#F2EDE4]/60 hover:text-[#F2EDE4] transition-colors">
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
              <div>
                <p className="text-[10px] uppercase tracking-widest text-[#C8A96E] mb-1">Anterior</p>
                <p className="font-bold">{prev.title}</p>
              </div>
            </Link>
          ) : <div />}

          {next ? (
            <Link href={`/servicos/${next.slug}`} className="flex items-center gap-3 group text-[#F2EDE4]/60 hover:text-[#F2EDE4] transition-colors text-right">
              <div>
                <p className="text-[10px] uppercase tracking-widest text-[#C8A96E] mb-1">Próximo</p>
                <p className="font-bold">{next.title}</p>
              </div>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          ) : <div />}
        </div>

      </div>
    </main>
  );
}