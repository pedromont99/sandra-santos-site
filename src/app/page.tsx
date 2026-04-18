import Image from "next/image";
import Statement from "@/components/statement";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* 1. SECÇÃO HERO */}
      <section className="relative pt-32 pb-20 overflow-hidden min-h-[90vh] flex items-center bg-[#1C1C1E]">

        {/* Background Decorativo - Marble */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[800px] bg-gradient-to-tr from-[#1C1C1E] via-[#E8E2DC] to-[#D8D2CC] opacity-30 blur-[120px] z-0 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center w-full relative z-20">

          {/* COLUNA DA IMAGEM */}
          <div className="relative order-first lg:order-last w-full max-w-[400px] lg:max-w-[500px] mx-auto lg:justify-self-end">
            <div className="absolute -top-4 -left-4 z-20 bg-[#1C1C1E]/90 backdrop-blur-xl p-3 rounded-xl border border-[#F2EDE4]/5 shadow-xl hidden sm:flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-[9px] font-bold text-[#F2EDE4] uppercase tracking-tighter">Performance Active</span>
            </div>

            <div className="relative w-full aspect-[4/5] rounded-[2rem] overflow-hidden border border-[#F2EDE4]/10 shadow-2xl lg:rotate-1 hover:rotate-0 transition-transform duration-700">
              <Image
                src="/sandra-santos-hero.jpg"
                alt="Sandra Santos"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#F2EDE4]/20 to-transparent" />
            </div>

            <div className="absolute -bottom-4 -right-4 z-20 bg-[#8C6D3F] text-[#1C1C1E] p-4 lg:p-6 rounded-2xl shadow-2xl scale-90 lg:scale-100">
              <p className="text-xl lg:text-2xl font-serif italic">Estratégia Digital</p>
            </div>
          </div>

          {/* COLUNA ESQUERDA: Copy de Autoridade */}
          <div className="text-center lg:text-left space-y-8">
            <div className="inline-block px-4 py-1.5 bg-[#8C6D3F]/5 border border-[#8C6D3F]/10 rounded-full">
              <span className="text-[#8C6D3F] text-[10px] lg:text-xs italic font-serif uppercase tracking-widest">Estratégia & Comunicação</span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl italic font-serif text-[#F2EDE4] tracking-tight leading-[1.15]">
              Transformo a tua presença digital em <br />
              <span className="text-[#8C6D3F] italic font-serif">posicionamento e autoridade.</span>
            </h1>

            <p className="text-lg md:text-xl text-[#F2EDE4]/70 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Através de estratégia, conteúdo e comunicação com intenção, ajudo marcas e profissionais a destacarem-se online de forma consistente e estruturada.
            </p>

            <div className="flex flex-col sm:flex-row gap-5 pt-4 justify-center lg:justify-start">
              <Link href="/projectos" className="w-full sm:w-[220px] px-8 py-4 bg-[#F2EDE4] text-[#1C1C1E] rounded-xl font-bold transition-all duration-300 hover:bg-[#8C6D3F] hover:text-[#F2EDE4] hover:scale-105 active:scale-95 shadow-lg shadow-[#F2EDE4]/10 text-center">
                Ver projetos
              </Link>
              <Link href="/contacto" className="w-full sm:w-[220px] px-8 py-4 border-2 border-[#F2EDE4] text-[#F2EDE4] bg-transparent rounded-xl font-bold transition-all duration-300 hover:bg-[#F2EDE4] hover:text-[#1C1C1E] hover:scale-105 active:scale-95 text-center">
                Trabalhar comigo
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* MESTRE: As secções abaixo são componentes externos. 
          Para que o alinhamento central seja perfeito, envolvi-as em contentores 
          que forçam a simetria visual no desktop.
      */}

      <div className="flex flex-col items-center text-center">
        <Statement />
      </div>

      <div className="flex flex-col items-center text-center bg-[#1C1C1E]">
        <Services />
      </div>

      <div className="flex flex-col items-center text-center">
        <Testimonials />
      </div>
    </>
  );
}