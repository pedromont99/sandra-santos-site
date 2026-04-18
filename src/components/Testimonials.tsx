"use client";
import { useState } from "react";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    text: "A Sandra tem uma excelente capacidade, para estruturar conteúdos e organizar a comunicação digital de forma clara e consistente. O seu trabalho trouxe mais estratégia e coêrencia á presença online do meu negócio.",
    author: "Marta F.",
    role: "Empreendedora",
    initial: "M"
  },
  {
    text: "O trabalho da Sandra destacou-se pela estratégia e atenção ao detalhe. A comunicação passou a ser mais consistente e alinhada com a identidade da minha marca.",
    author: "Daniela C.",
    role: "Terapeuta Holistíca",
    initial: "D"
  },
  {
    text: "Ter a Sandra a gerir a minha presença digital permitiu-me focar no que faço melhor. Os resultados em termos de leads qualificados são visíveis.",
    author: "Fernanda B.",
    role: "Empreendedora",
    initial: "F"
  }
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  const prev = () => setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));

  return (
    <section className="w-full py-16 md:py-24 bg-[#1C1C1E] px-4 md:px-12 my-10">

      {/* CAIXA HORIZONTAL */}
      <div className="max-w-7xl mx-auto bg-[#F2EDE4] text-[#1C1C1E] rounded-[2rem] px-8 md:px-16 py-12 md:py-16 relative overflow-hidden shadow-2xl">

        <Quote className="absolute top-6 left-6 w-12 h-12 md:w-20 md:h-20 text-[#1C1C1E]/5 -rotate-12" />
        <Quote className="absolute bottom-6 right-6 w-12 h-12 md:w-20 md:h-20 text-[#1C1C1E]/5 rotate-180" />

        {/* LAYOUT HORIZONTAL — Header à esquerda, Slider à direita */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-12 items-center">

          {/* COLUNA ESQUERDA — Título e navegação */}
          <div className="flex flex-col gap-6">
            <span className="text-[#C8A96E] text-[10px] uppercase tracking-[0.4em] font-bold">
              Casos de Sucesso
            </span>
            <h2 className="text-2xl md:text-4xl font-serif italic text-[#1C1C1E] leading-tight">
              O que dizem as nossas clientes
            </h2>

            {/* SETAS */}
            <div className="flex gap-4 mt-4">
              <button onClick={prev} className="p-3 border border-[#C8A96E]/40 rounded-full text-[#C8A96E] hover:bg-[#C8A96E] hover:text-[#1C1C1E] transition-all">
                <ChevronLeft size={20} />
              </button>
              <button onClick={next} className="p-3 border border-[#C8A96E]/40 rounded-full text-[#C8A96E] hover:bg-[#C8A96E] hover:text-[#1C1C1E] transition-all">
                <ChevronRight size={20} />
              </button>
            </div>

            {/* DOTS */}
            <div className="flex gap-3">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`h-2 rounded-full transition-all ${
                    i === current ? "bg-[#C8A96E] w-6" : "bg-[#C8A96E]/30 w-2"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* COLUNA DIREITA — Slider */}
          <div className="relative overflow-hidden min-h-[220px] flex items-center">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className={`w-full flex flex-col gap-8 transition-all duration-700 absolute inset-0 justify-center ${
                  i === current ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full"
                } ${i < current ? "-translate-x-full" : ""}`}
              >
                <p className="text-lg md:text-xl font-light italic leading-relaxed text-[#1C1C1E]/90">
                  "{t.text}"
                </p>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#C8A96E]/20 flex items-center justify-center border border-[#C8A96E]/40 shrink-0">
                    <span className="text-[#C8A96E] font-serif italic text-lg font-bold">{t.initial}</span>
                  </div>
                  <div>
                    <p className="font-bold text-xs tracking-[0.2em] uppercase text-[#1C1C1E]">{t.author}</p>
                    <p className="text-[10px] text-[#C8A96E] mt-1 font-medium tracking-widest">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}