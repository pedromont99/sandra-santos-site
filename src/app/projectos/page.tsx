import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { projetos } from "@/data/projectos";


export default function Projetos() {
  return (
    <main className="pt-32 pb-20 bg-[#1C1C1E] min-h-screen font-sans">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* CABEÇALHO EDITORIAL */}
        <div className="mb-24 border-b border-[#F2EDE4]/10 pb-12">
          <p className="text-[#8C6D3F] text-xs font-bold uppercase tracking-[0.4em] mb-6">Portefólio</p>
          <h1 className="text-5xl md:text-8xl font-bold text-[#F2EDE4] tracking-tighter italic font-serif">
            Projetos <span className="text-[#8C6D3F] not-italic font-sans ">Selecionados</span>
          </h1>
        </div>

        {/* LISTA DE PROJECTOS */}
        <div className="space-y-60"> {/* Aumentei o espaçamento para cada projeto respirar melhor */}
          {projetos.map((proj) => (
            <div key={proj.id} className="group relative">
              <div className="grid lg:grid-cols-12 gap-12 items-start">

                {/* INFO (ESQUERDA) */}
                <div className="lg:col-span-4 space-y-8 order-2 lg:order-1">
                  <span className="text-6xl font-serif italic text-[#C8A96E]/30 block">{proj.id}</span>

                  <div>
                    <h2 className="text-3xl md:text-5xl font-bold text-[#F2EDE4] mb-4 tracking-tight">
                      {proj.cliente}
                    </h2>
                    <p className="text-[#8C6D3F] font-bold text-sm uppercase tracking-widest mb-6">
                      {proj.categoria}
                    </p>
                  </div>

                  <p className="text-lg text-[#F2EDE4]/70 leading-relaxed max-w-sm">
                    {proj.descricao}
                  </p>

                  <div className="flex flex-wrap gap-3 pt-4">
                    {proj.tags.map((tag, i) => (
                      <span key={i} className="px-4 py-1 border border-[#F2EDE4]/10 rounded-full text-[10px] font-bold uppercase tracking-tighter text-[#F2EDE4]/50">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <Link href={`/projectos/${proj.id}`} className="inline-flex items-center gap-2 pt-8 group/link">
                    <span className="font-bold text-[#F2EDE4] border-b-2 border-[#8C6D3F] pb-1">Ver Detalhes</span>
                    <ArrowUpRight className="w-5 h-5 text-[#8C6D3F] group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
                  </Link>
                </div>

                {/* MOSAICO VISUAL (DIREITA) */}
                <div className="lg:col-span-8 order-1 lg:order-2 space-y-8">
                  <div className="grid grid-cols-12 gap-6">

                    <div className="col-span-12 md:col-span-8 relative aspect-video rounded-[2rem] overflow-hidden shadow-2xl group/img">
                      <Image
                        src={proj.imagem}
                        alt={proj.cliente}
                        fill
                        className="object-cover grayscale group-hover/img:grayscale-0 transition-all duration-700"
                      />
                    </div>

                    <div className="col-span-6 md:col-span-4 relative aspect-square rounded-[2rem] overflow-hidden shadow-xl border border-[#F2EDE4]/5">
                      <Image
                        src={proj.imagemDetalhe1}
                        alt="Detalhe 1"
                        fill
                        className="object-cover"
                      />
                    </div>

                    <div className="col-span-6 md:col-span-4 bg-[#F2EDE4] p-8 rounded-[2.5rem] flex flex-col justify-center">
                      <span className="text-[#C8A96E] text-[10px] font-bold uppercase tracking-widest mb-2">Insight</span>
                      <p className="text-[#1C1C1E] text-sm font-medium leading-relaxed italic font-serif">
                        "{proj.insight}"
                      </p>
                    </div>

                    <div className="col-span-12 md:col-span-8 relative h-[250px] rounded-[2rem] overflow-hidden shadow-xl group/img2">
                      <Image
                        src={proj.imagemDetalhe2}
                        alt="Detalhe 2"
                        fill
                        className="object-cover grayscale group-hover/img2:grayscale-0 transition-all duration-500"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA FINAL */}
        <div className="mt-40 text-center py-24 bg-[#F2EDE4] rounded-[3rem] text-[#1C1C1E] relative overflow-hidden">
          <div className="absolute top-0 left-0 w-64 h-64 bg-[#C8A96E]/5 blur-[80px] -ml-20 -mt-20" />
          <div className="relative z-10 space-y-8">
            <h2 className="text-3xl md:text-6xl font-bold tracking-tighter">O seu projeto pode <br /> ser o próximo.</h2>
            <p className="text-[#1C1C1E]/60 max-w-lg mx-auto text-lg font-light">Vamos transformar a sua visão num posicionamento de autoridade inquestionável.</p>
            <Link href="/contacto" className="inline-block px-12 py-5 bg-[#C8A96E] text-[#F2EDE4] rounded-xl font-bold hover:bg-[#1C1C1E] transition-all transform hover:scale-105 shadow-xl">
              Iniciar conversa
            </Link>
          </div>
        </div>

      </div>
    </main>
  );
}