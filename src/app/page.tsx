import Image from "next/image";
import Statement from "@/components/statement";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <>
      {/* 1. SECÇÃO HERO */}
      <section className="relative pt-32 pb-20 overflow-hidden min-h-[90vh] flex items-center bg-[#F8F5F2]">
        
        {/* Background Decorativo - Marble */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[800px] bg-gradient-to-tr from-[#F8F5F2] via-[#E8E2DC] to-[#D8D2CC] opacity-30 blur-[120px] z-0 pointer-events-none" />

        {/* --- O "S" MONOGRAMA (MARCA DE ÁGUA) --- */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] lg:w-[950px] aspect-square pointer-events-none z-10 select-none">
          <Image 
            src="/Logo-Sandra-Santos.svg" 
            alt="Monograma Sandra Santos"
            fill
            className="object-contain opacity-[0.08]"
            priority
          />
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center w-full relative z-20">
          
          {/* COLUNA DA IMAGEM */}
          <div className="relative order-first lg:order-last w-full max-w-[400px] lg:max-w-[500px] mx-auto lg:justify-self-end">
            <div className="absolute -top-4 -left-4 z-20 bg-white/90 backdrop-blur-xl p-3 rounded-xl border border-[#382622]/5 shadow-xl hidden sm:flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-[9px] font-bold text-[#382622] uppercase tracking-tighter">Performance Active</span>
            </div>

            <div className="relative w-full aspect-[4/5] rounded-[2rem] overflow-hidden border border-[#382622]/10 shadow-2xl lg:rotate-1 hover:rotate-0 transition-transform duration-700">
              <Image 
                src="/sandra-santos-hero.jpg" 
                alt="Sandra Santos"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#382622]/20 to-transparent" />
            </div>

            <div className="absolute -bottom-4 -right-4 z-20 bg-[#59310b] text-[#F8F5F2] p-4 lg:p-6 rounded-2xl shadow-2xl scale-90 lg:scale-100">
              <p className="text-xl lg:text-2xl font-serif italic">Digital Strategy</p>
            </div>
          </div>

          {/* COLUNA ESQUERDA: Copy de Autoridade */}
          <div className="text-center lg:text-left space-y-8">
            <div className="inline-block px-4 py-1.5 bg-[#59310b]/5 border border-[#59310b]/10 rounded-full">
              <span className="text-[#59310b] text-[10px] lg:text-xs font-bold uppercase tracking-widest">Estratégia & Comunicação</span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-[#382622] tracking-tight leading-[1.15]">
              Transformo a sua presença digital em <br />
              <span className="text-[#59310b] italic font-serif">posicionamento e autoridade.</span>
            </h1>

            <p className="text-lg md:text-xl text-[#382622]/70 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Através de estratégia, conteúdo e comunicação com intenção, ajudo marcas e profissionais a destacarem-se online de forma consistente e estruturada.
            </p>

            <div className="flex flex-col sm:flex-row gap-5 pt-4 justify-center lg:justify-start">
              <button className="w-full sm:w-[220px] px-8 py-4 bg-[#382622] text-[#F8F5F2] rounded-xl font-bold transition-all duration-300 hover:bg-[#59310b] hover:scale-105 active:scale-95 shadow-lg shadow-[#382622]/10">
                Ver projetos
              </button>
              <button className="w-full sm:w-[220px] px-8 py-4 border-2 border-[#382622] text-[#382622] bg-transparent rounded-xl font-bold transition-all duration-300 hover:bg-[#382622] hover:text-[#F8F5F2] hover:scale-105 active:scale-95">
                Trabalhar comigo
              </button>
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

      <div className="flex flex-col items-center text-center bg-[#F8F5F2]">
        <Services />
      </div>

      <div className="flex flex-col items-center text-center">
        <Testimonials />
      </div>
    </>
  );
}