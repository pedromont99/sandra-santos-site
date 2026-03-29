import { CalendarCheck, Monitor, Users, BarChart3 } from "lucide-react";
import Link from "next/link";

const services = [
  {
    title: "Branding & Social",
    description: "Planeamento, criação e gestão de conteúdos com foco na consistência e clareza para gerar ligação real.",
    icon: <Users className="w-8 h-8 text-[#8C6D3F]" />,
  },
  {
    title: "Assistência Virtual",
    description: "Suporte estratégico à gestão e execução digital para quem necessita de organização e suporte contínuo.",
    icon: <CalendarCheck className="w-8 h-8 text-[#8C6D3F]" />,
  },
  {
    title: "Desenvolvimento Web",
    description: "Websites e Landing Pages estratégicas, pensadas para transmitir credibilidade e gerar resultados.",
    icon: <Monitor className="w-8 h-8 text-[#8C6D3F]" />,
  },
  {
    title: "Tráfego & Performance",
    description: "Anúncios otimizados e tracking avançado (GTM/GA4) para garantir que cada euro investido tem intenção.",
    icon: <BarChart3 className="w-8 h-8 text-[#8C6D3F]" />,
  },
];

export default function Services() {
  return (
    <section className="py-24 bg-[#1C1C1E]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col items-center">

        {/* CABEÇALHO - CENTRADO */}
        <div className="text-center mb-20 max-w-3xl">
          <h2 className="text-4xl md:text-5xl font-serif italic text-[#C8A96E] mb-6 tracking-tight">
            Serviços
          </h2>
          <p className="text-[#F2EDE4]/60 text-lg leading-relaxed mx-auto">
            Estratégia, conteúdo e soluções digitais pensadas para comunicar com clareza, consistência e impacto.
          </p>
          <div className="w-20 h-[1px] bg-[#C8A96E] mx-auto mt-8"></div>
        </div>

        {/* GRELHA DE SERVIÇOS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-8 rounded-3xl border border-[#F2EDE4]/5 bg-[#2E2E30]/50 hover:bg-[#1C1C1E] hover:shadow-2xl hover:shadow-[#F2EDE4]/5 transition-all duration-500 flex flex-col items-center text-center"
            >
              <div className="mb-6 inline-block p-4 bg-[#1C1C1E] rounded-2xl shadow-sm group-hover:scale-110 transition-transform duration-500">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-[#F2EDE4] mb-4">{service.title}</h3>
              <p className="text-[#F2EDE4]/70 text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* BOTÃO COM LINK CORRIGIDO */}
        <div className="mt-20 text-center">
          <Link href="/servicos">
            <button className="px-10 py-4 border-2 border-[#F2EDE4] text-[#F2EDE4] rounded-xl font-bold hover:bg-[#F2EDE4] hover:text-[#1C1C1E] transition-all duration-300 hover:scale-105 active:scale-95 shadow-sm cursor-pointer">
              Ver todos os serviços
            </button>
          </Link>
        </div>
        
      </div>
    </section>
  );
}