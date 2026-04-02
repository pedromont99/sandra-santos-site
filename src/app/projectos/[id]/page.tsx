import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";
import { projetos } from "@/data/projectos";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return projetos.map((p) => ({ id: p.id }));
}

export default async function ProjetoDetalhe({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const projeto = projetos.find((p) => p.id === id);

  if (!projeto) notFound();

  const currentIndex = projetos.findIndex((p) => p.id === id);
  const next = projetos[currentIndex + 1] ?? null;
  const prev = projetos[currentIndex - 1] ?? null;

  return (
    <main className="pt-32 pb-20 bg-[#1C1C1E] min-h-screen">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* VOLTAR */}
        <Link href="/projectos" className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-[#C8A96E] mb-16 hover:gap-4 transition-all">
          <ArrowLeft size={14} /> Voltar aos Projetos
        </Link>

        {/* CABEÇALHO */}
        <div className="mb-20 border-b border-[#F2EDE4]/10 pb-12">
          <p className="text-[#8C6D3F] text-xs font-bold uppercase tracking-[0.4em] mb-4">{projeto.categoria}</p>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <h1 className="text-5xl md:text-7xl font-bold text-[#F2EDE4] tracking-tighter italic font-serif">
              {projeto.cliente}
            </h1>
            <div className="flex flex-wrap gap-3">
              {projeto.tags.map((tag, i) => (
                <span key={i} className="px-4 py-1 border border-[#F2EDE4]/10 rounded-full text-[10px] font-bold uppercase tracking-tighter text-[#F2EDE4]/50">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* IMAGEM PRINCIPAL */}
        <div className="relative w-full aspect-video rounded-[2rem] overflow-hidden shadow-2xl mb-20">
          <Image
            src={projeto.imagem}
            alt={projeto.cliente}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* CONTEÚDO */}
        <div className="grid lg:grid-cols-12 gap-20 mb-20">

          {/* DESCRIÇÃO */}
          <div className="lg:col-span-7 space-y-8">
            <h2 className="text-3xl font-serif italic text-[#C8A96E]">Sobre o Projeto</h2>
            <p className="text-xl text-[#F2EDE4]/70 leading-relaxed">
              {projeto.descricaoLonga}
            </p>

            {/* INSIGHT */}
            <div className="bg-[#F2EDE4] p-8 rounded-[2rem] mt-8">
              <span className="text-[#C8A96E] text-[10px] font-bold uppercase tracking-widest block mb-3">Insight</span>
              <p className="text-[#1C1C1E] text-lg font-serif italic leading-relaxed">"{projeto.insight}"</p>
            </div>
          </div>

          {/* RESULTADOS */}
          <div className="lg:col-span-5 space-y-8">
            <h2 className="text-3xl font-serif italic text-[#C8A96E]">Resultados</h2>
            <ul className="space-y-6">
              {projeto.resultados.map((resultado, i) => (
                <li key={i} className="flex items-center gap-4 text-[#F2EDE4] text-lg">
                  <CheckCircle2 className="w-6 h-6 text-[#8C6D3F] shrink-0" />
                  <span className="font-semibold">{resultado}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* GALERIA */}
        <div className="grid md:grid-cols-2 gap-8 mb-32">
          <div className="relative aspect-square rounded-[2rem] overflow-hidden shadow-xl">
            <Image src={projeto.imagemDetalhe1} alt="Detalhe 1" fill className="object-cover" />
          </div>
          <div className="relative aspect-square rounded-[2rem] overflow-hidden shadow-xl">
            <Image src={projeto.imagemDetalhe2} alt="Detalhe 2" fill className="object-cover" />
          </div>
        </div>

        {/* NAVEGAÇÃO ENTRE PROJETOS */}
        <div className="flex justify-between items-center border-t border-[#F2EDE4]/10 pt-12">
          {prev ? (
            <Link href={`/projectos/${prev.id}`} className="flex items-center gap-3 group text-[#F2EDE4]/60 hover:text-[#F2EDE4] transition-colors">
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
              <div>
                <p className="text-[10px] uppercase tracking-widest text-[#C8A96E] mb-1">Anterior</p>
                <p className="font-bold">{prev.cliente}</p>
              </div>
            </Link>
          ) : <div />}

          {next ? (
            <Link href={`/projectos/${next.id}`} className="flex items-center gap-3 group text-[#F2EDE4]/60 hover:text-[#F2EDE4] transition-colors text-right">
              <div>
                <p className="text-[10px] uppercase tracking-widest text-[#C8A96E] mb-1">Próximo</p>
                <p className="font-bold">{next.cliente}</p>
              </div>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          ) : <div />}
        </div>

      </div>
    </main>
  );
}