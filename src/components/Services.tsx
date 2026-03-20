import { Palmtree, Monitor, PenTool, BarChart3 } from "lucide-react";

const services = [
  {
    title: "Branding & Social",
    description: "Planeamento, criação e gestão de conteúdos com foco na consistência e clareza para gerar ligação real.",
    icon: <PenTool className="w-8 h-8 text-[#59310b]" />,
  },
  {
    title: "Assistência Virtual",
    description: "Suporte estratégico à gestão e execução digital para quem necessita de organização e suporte contínuo.",
    icon: <Palmtree className="w-8 h-8 text-[#59310b]" />,
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
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center lg:text-left mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-[#382622] mb-6">Serviços</h2>
          <p className="text-[#382622]/60 max-w-2xl text-lg">
            Estratégia, conteúdo e soluções digitais pensadas para comunicar com clareza, consistência e impacto.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group p-8 rounded-3xl border border-[#382622]/5 bg-[#F8F5F2]/50 hover:bg-white hover:shadow-2xl hover:shadow-[#382622]/5 transition-all duration-500"
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
        
        <div className="mt-16 text-center">
          <button className="px-8 py-4 border-2 border-[#382622] text-[#382622] rounded-xl font-bold hover:bg-[#382622] hover:text-[#F8F5F2] transition-all">
            Ver todos os serviços
          </button>
        </div>
      </div>
    </section>
  );
}