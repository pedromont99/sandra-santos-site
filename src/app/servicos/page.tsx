import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { servicos } from "@/data/servicos";

export default function Servicos() {
  return (
    <main className="pt-32 pb-20 bg-[#1C1C1E]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* CABEÇALHO DA PÁGINA */}
        <div className="max-w-3xl mb-24">
          <p className="text-[#8C6D3F] text-xs font-bold uppercase tracking-[0.4em] mb-6">Soluções</p>
          <h1 className="text-5xl md:text-7xl font-bold text-[#F2EDE4] tracking-tighter mb-8 italic font-serif">
            Como posso <span className="text-[#8C6D3F] not-italic font-sans">ajudar</span>
          </h1>
          <p className="text-xl text-[#F2EDE4]/70 leading-relaxed">
            Estratégia, conteúdo e soluções digitais pensadas para comunicar com clareza, consistência e impacto.
          </p>
        </div>

        {/* LISTAGEM DOS 4 PILARES */}
        <div className="space-y-32">
          {servicos.map((pilar, index) => (
            <div
              key={pilar.id}
              className={`flex flex-col lg:flex-row items-center gap-16 ${index % 2 !== 0 ? "lg:flex-row-reverse" : ""}`}
            >
              {/* IMAGEM */}
              <div className="w-full lg:w-1/2 relative aspect-square rounded-[2.5rem] overflow-hidden shadow-2xl group">
                <Image
                  src={pilar.image}
                  alt={pilar.title}
                  fill
                  className="object-cover grayscale hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
                />
                <div className="absolute inset-0 bg-[#F2EDE4]/20 group-hover:bg-transparent transition-colors duration-700" />
              </div>

              {/* CONTEÚDO */}
              <div className="w-full lg:w-1/2 space-y-8">
                <span className="text-5xl font-serif italic text-[#8C6D3F]/20 block">{pilar.id}</span>
                <h2 className="text-4xl font-bold text-[#F2EDE4] tracking-tight">{pilar.title}</h2>
                <p className="text-lg text-[#F2EDE4]/70 leading-relaxed font-medium">{pilar.description}</p>

                <ul className="grid grid-cols-1 gap-4 pt-4">
                  {pilar.items.map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-[#F2EDE4]">
                      <CheckCircle2 className="w-5 h-5 text-[#8C6D3F]" />
                      <span className="font-semibold">{item}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href={`/servicos/${pilar.slug}`}
                  className="inline-flex items-center gap-2 text-[#8C6D3F] font-bold uppercase text-xs tracking-widest pt-6 border-b border-[#8C6D3F]/20 pb-2 hover:border-[#8C6D3F] transition-all group"
                >
                  Saber mais detalhes
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}