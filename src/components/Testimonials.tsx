import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "A Sandra tem uma excelente capacidade para estruturar conteúdos e organizar a comunicação de forma estratégica. O seu apoio foi fundamental para dar clareza ao meu projeto.",
    author: "Daniela C.",
    role: "Empreendedor Digital",
  },
  // Podemos adicionar mais no futuro, por agora este é o nosso destaque
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-[#F8F5F2] relative overflow-hidden">
      {/* Detalhe Decorativo de Fundo */}
      <div className="absolute top-0 right-0 p-20 opacity-[0.03] text-[#382622]">
        <Quote size={300} />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-16">
          <p className="text-[#59310b] text-xs font-bold uppercase tracking-[0.3em] mb-4">
            Feedback
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#382622]">
            O impacto do meu trabalho
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          {testimonials.map((t, index) => (
            <div key={index} className="text-center space-y-8">
              <Quote className="w-12 h-12 text-[#59310b] mx-auto opacity-40" />
              
              <blockquote className="text-2xl md:text-3xl lg:text-4xl font-medium text-[#382622] leading-relaxed italic font-serif">
                "{t.quote}"
              </blockquote>

              <div className="pt-4">
                <p className="text-lg font-bold text-[#382622]">{t.author}</p>
                <p className="text-[#382622]/60 text-sm uppercase tracking-widest">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}