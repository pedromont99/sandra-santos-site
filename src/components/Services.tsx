import { CalendarCheck, Monitor, Users, BarChart3 } from "lucide-react";
import Link from "next/link";

const services = [
  {
    title: "Branding & Social",
    description: "Planeamento, criação e gestão de conteúdos com foco na consistência e clareza para gerar ligação real.",
    icon: <Users className="w-8 h-8 text-[#59310b]" />,
  },
  {
    title: "Assistência Virtual",
    description: "Suporte estratégico à gestão e execução digital para quem necessita de organização e suporte contínuo.",
    icon: <CalendarCheck className="w-8 h-8 text-[#59310b]" />,
  },
  {
    title: "Desenvolvimento Web",
    description: "Websites e Landing Pages estratégicas, pensadas para transmitir credibilidade e gerar resultados.",
    icon: <Monitor className="w-8 h-8 text-[#59310b]" />,
  },
  {
    title: "Tráfego & Performance",
    description: "Anúncios otimizados e tracking avançado (GTM/GA4) para garantir que cada euro investido tem intenção.",
    icon: <BarChart3 className="w-8 h-8 text-[#59310b]" />,
  },
];

export default function Services() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col items-center">

        {/* CABEÇALHO - CENTRADO */}
        <div className="text-center mb-20 max-w-3xl">
          <h2 className="text-4xl md:text-5xl font-serif italic text-[#382622] mb-6 tracking-tight">
            Serviços
          </h2>
          <p className="text-[#382622]/60 text-lg leading-relaxed mx-auto">
            Estratégia, conteúdo e soluções digitais pensadas para comunicar com clareza, consistência e impacto.
          </p>
          <div className="w-20 h-[1px] bg-[#D4A373] mx-auto mt-8"></div>
        </div>

        {/* GRELHA DE SERVIÇOS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-8 rounded-3xl border border-[#382622]/5 bg-[#F8F5F2]/50 hover:bg-white hover:shadow-2xl hover:shadow-[#382622]/5 transition-all duration-500 flex flex-col items-center text-center"
            >
              <div className="mb-6 inline-block p-4 bg-white rounded-2xl shadow-sm group-hover:scale-110 transition-transform duration-500">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-[#382622] mb-4">{service.title}</h3>
              <p className="text-[#382622]/70 text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* BOTÃO COM LINK CORRIGIDO */}
        <div className="mt-20 text-center">
          <Link href="/servicos">
            <button className="px-10 py-4 border-2 border-[#382622] text-[#382622] rounded-xl font-bold hover:bg-[#382622] hover:text-[#F8F5F2] transition-all duration-300 hover:scale-105 active:scale-95 shadow-sm cursor-pointer">
              Ver todos os serviços
            </button>
          </Link>
        </div>
        
      </div>
    </section>
  );
}