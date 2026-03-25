"use client"; // OBRIGATÓRIO para o slider funcionar com cliques
import { useState } from "react";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    text: "A Sandra não mudou apenas o meu guarda-roupa, ela mudou a forma como eu entro numa sala de reuniões. A minha faturação acompanhou o meu novo posicionamento.",
    author: "Marta Fonseca",
    role: "CEO & Fundadora",
    initial: "M"
  },
  {
    text: "A estratégia de conteúdo que desenhámos trouxe-me uma clareza que eu não tinha há anos. O meu Instagram agora comunica luxo e autoridade.",
    author: "Ana Oliveira",
    role: "Architect & Designer",
    initial: "A"
  },
  {
    text: "Ter a Sandra a gerir a minha presença digital permitiu-me focar no que faço melhor. Os resultados em termos de leads qualificados são visíveis.",
    author: "Carla Santos",
    role: "Consultora Imobiliária",
    initial: "C"
  }
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  const prev = () => setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));

  return (
    <section className="py-16 md:py-24 bg-[#382622] text-[#F8F5F2] flex flex-col items-center text-center px-4 md:px-6 rounded-[2rem] md:rounded-[3rem] mx-2 md:mx-4 my-10 shadow-2xl relative overflow-hidden group">
      
      {/* Aspas Decorativas */}
      <Quote className="absolute top-6 left-6 w-12 h-12 md:w-20 md:h-20 text-[#F8F5F2]/5 -rotate-12" />
      
      <div className="max-w-4xl w-full relative z-10">
        <span className="text-[#D4A373] text-[10px] uppercase tracking-[0.4em] mb-8 block font-bold">
          Casos de Sucesso
        </span>
        
        <h2 className="text-2xl md:text-4xl font-serif italic mb-12 text-[#F8F5F2]">
          O que dizem as nossas clientes
        </h2>
        
        {/* ÁREA DO SLIDER */}
        <div className="relative overflow-hidden min-h-[300px] flex items-center">
          {testimonials.map((t, i) => (
            <div 
              key={i} 
              className={`w-full flex flex-col items-center space-y-8 transition-all duration-700 absolute inset-0 ${
                i === current ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full"
              } ${i < current ? "-translate-x-full" : ""}`}
            >
              <p className="text-lg md:text-2xl font-light italic leading-relaxed text-[#F8F5F2]/90 max-w-2xl px-4 break-words">
                "{t.text}"
              </p>
              
              <div className="flex flex-col items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-[#D4A373]/20 flex items-center justify-center border border-[#D4A373]/40">
                  <span className="text-[#D4A373] font-serif italic text-lg font-bold">{t.initial}</span>
                </div>
                <div>
                  <p className="font-bold text-xs md:text-sm tracking-[0.2em] uppercase text-[#F8F5F2]">{t.author}</p>
                  <p className="text-[10px] text-[#D4A373] mt-1 font-medium tracking-widest">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* SETAS DE NAVEGAÇÃO (Aparecem no Hover no Desktop) */}
        <button onClick={prev} className="absolute left-0 top-1/2 -translate-y-1/2 p-2 text-[#D4A373]/50 hover:text-[#D4A373] transition-colors hidden md:block">
          <ChevronLeft size={32} />
        </button>
        <button onClick={next} className="absolute right-0 top-1/2 -translate-y-1/2 p-2 text-[#D4A373]/50 hover:text-[#D4A373] transition-colors hidden md:block">
          <ChevronRight size={32} />
        </button>

        {/* DOTS FUNCIONAIS */}
        <div className="flex justify-center gap-3 mt-12">
          {testimonials.map((_, i) => (
            <button 
              key={i} 
              onClick={() => setCurrent(i)}
              className={`w-2 h-2 rounded-full transition-all ${
                i === current ? "bg-[#D4A373] w-6" : "bg-[#D4A373]/30"
              }`}
            />
          ))}
        </div>
      </div>

      <Quote className="absolute bottom-6 right-6 w-12 h-12 md:w-20 md:h-20 text-[#F8F5F2]/5 rotate-180" />
    </section>
  );
}