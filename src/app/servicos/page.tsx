import Image from "next/image";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";

const pilares = [
  {
    id: "01",
    title: "Branding & Social",
    image: "/sandra-split-1.jpg", // A primeira parte da tua foto
    description: "Planeamento, criação e gestão de conteúdos com foco na consistência e clareza para gerar ligação real com o público.",
    items: ["Estratégia de Conteúdo", "Gestão de Redes Sociais", "Identidade Visual"]
  },
  {
    id: "02",
    title: "Assistência Virtual",
    image: "/sandra-split-2.jpg",
    description: "Suporte estratégico à gestão e execução digital para profissionais que necessitam de organização e suporte contínuo.",
    items: ["Gestão Operacional", "Suporte Administrativo", "Planeamento de Conteúdos"]
  },
  {
    id: "03",
    title: "Desenvolvimento Web",
    image: "/sandra-split-3.jpg",
    description: "Websites e Landing Pages estratégicas, pensadas para comunicar de forma clara e gerar resultados de conversão.",
    items: ["Websites Premium", "Landing Pages", "SEO & Copywriting"]
  },
  {
    id: "04",
    title: "Tráfego & Performance",
    image: "/sandra-split-4.jpg",
    description: "Anúncios otimizados e tracking avançado para garantir que cada euro investido tem uma intenção estratégica.",
    items: ["Google Ads & Meta Ads", "Setup GTM & GA4", "Análise de Métricas"]
  }
];

export default function Servicos() {
  return (
    <main className="pt-32 pb-20 bg-[#F8F5F2]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* CABEÇALHO DA PÁGINA */}
        <div className="max-w-3xl mb-24">
          <p className="text-[#59310b] text-xs font-bold uppercase tracking-[0.4em] mb-6">Soluções</p>
          <h1 className="text-5xl md:text-7xl font-bold text-[#382622] tracking-tighter mb-8 italic font-serif">
            Como posso <span className="text-[#59310b] not-italic font-sans underline decoration-1 underline-offset-8">ajudar</span>.
          </h1>
          <p className="text-xl text-[#382622]/70 leading-relaxed">
            Estratégia, conteúdo e soluções digitais pensadas para comunicar com clareza, consistência e impacto.
          </p>
        </div>

        {/* LISTAGEM DOS 4 PILARES */}
        <div className="space-y-32">
          {pilares.map((pilar, index) => (
            <div 
              key={pilar.id}
              className={`flex flex-col lg:flex-row items-center gap-16 ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
            >
              {/* IMAGEM SPLIT */}
              <div className="w-full lg:w-1/2 relative aspect-square rounded-[2.5rem] overflow-hidden shadow-2xl group">
                <Image 
                  src={pilar.image} 
                  alt={pilar.title}
                  fill
                  className="object-cover grayscale hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
                />
                <div className="absolute inset-0 bg-[#382622]/20 group-hover:bg-transparent transition-colors duration-700" />
              </div>

              {/* CONTEÚDO DO PILAR */}
              <div className="w-full lg:w-1/2 space-y-8">
                <span className="text-5xl font-serif italic text-[#59310b]/20 block">{pilar.id}</span>
                <h2 className="text-4xl font-bold text-[#382622] tracking-tight">{pilar.title}</h2>
                <p className="text-lg text-[#382622]/70 leading-relaxed font-medium">
                  {pilar.description}
                </p>
                
                <ul className="grid grid-cols-1 gap-4 pt-4">
                  {pilar.items.map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-[#382622]">
                      <CheckCircle2 className="w-5 h-5 text-[#59310b]" />
                      <span className="font-semibold">{item}</span>
                    </li>
                  ))}
                </ul>

                <button className="flex items-center gap-2 text-[#59310b] font-bold uppercase text-xs tracking-widest pt-6 border-b border-[#59310b]/20 pb-2 hover:border-[#59310b] transition-all group">
                  Saber mais detalhes 
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </main>
  );
}