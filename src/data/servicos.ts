export type Servico = {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  image: string;
  description: string;
  descricaoLonga: string;
  items: string[];
  processo: { step: string; title: string; desc: string }[];
  resultados: string[];
};

export const servicos: Servico[] = [
  {
    id: "01",
    slug: "branding-social",
    title: "Branding & Social",
    tagline: "Presença com intenção.",
    image: "/sandra-split-1.jpg",
    description: "Planeamento, criação e gestão de conteúdos com foco na consistência e clareza para gerar ligação real com o público.",
    descricaoLonga: "Uma marca forte não se constrói com posts aleatórios — constrói-se com estratégia, consistência e uma voz que ressoa com o público certo. Desenvolvo a identidade da tua marca nas redes sociais de forma estruturada, para que cada publicação tenha um propósito claro e contribua para o teu posicionamento.",
    items: ["Estratégia de Conteúdo", "Gestão de Redes Sociais", "Identidade Visual"],
    processo: [
      { step: "01", title: "Diagnóstico", desc: "Análise da presença atual, público-alvo e posicionamento desejado." },
      { step: "02", title: "Estratégia", desc: "Definição de voz, pilares de conteúdo e calendário editorial." },
      { step: "03", title: "Criação", desc: "Produção de conteúdos alinhados com a identidade visual e tom de voz." },
      { step: "04", title: "Gestão", desc: "Publicação, monitorização e ajuste contínuo com base nos resultados." },
    ],
    resultados: ["Feed coeso e profissional", "Aumento de engagement orgânico", "Posicionamento de autoridade", "Crescimento consistente de audiência"],
  },
  {
    id: "02",
    slug: "assistencia-virtual",
    title: "Assistência Virtual",
    tagline: "Liberta o teu tempo.",
    image: "/sandra-split-2.jpg",
    description: "Suporte estratégico à gestão e execução digital para profissionais que necessitam de organização e suporte contínuo.",
    descricaoLonga: "Gerir um negócio exige foco. Quando o tempo é gasto em tarefas operacionais, o crescimento fica em segundo plano. Ofereço suporte estratégico e administrativo para que possas concentrar-te no que realmente importa — liderar o teu negócio.",
    items: ["Gestão Operacional", "Suporte Administrativo", "Planeamento de Conteúdos"],
    processo: [
      { step: "01", title: "Levantamento", desc: "Identificação das tarefas que consomem mais tempo e energia." },
      { step: "02", title: "Organização", desc: "Estruturação de processos e sistemas de gestão eficientes." },
      { step: "03", title: "Execução", desc: "Gestão contínua das tarefas delegadas com total autonomia." },
      { step: "04", title: "Reporte", desc: "Comunicação regular sobre o estado das tarefas e resultados." },
    ],
    resultados: ["Mais tempo para o essencial", "Processos organizados e eficientes", "Redução de stress operacional", "Maior capacidade de crescimento"],
  },
  {
    id: "03",
    slug: "desenvolvimento-web",
    title: "Desenvolvimento Web",
    tagline: "O teu site, a tua melhor ferramenta.",
    image: "/sandra-split-3.jpg",
    description: "Websites e Landing Pages estratégicas, pensadas para comunicar de forma clara e gerar resultados de conversão.",
    descricaoLonga: "Um website não é apenas uma presença online — é o teu vendedor 24 horas por dia. Desenvolvo websites e landing pages com foco na experiência do utilizador, no posicionamento da marca e na conversão, para que cada visita tenha o potencial de se tornar um cliente.",
    items: ["Websites Premium", "Landing Pages", "SEO & Copywriting"],
    processo: [
      { step: "01", title: "Briefing", desc: "Compreensão dos objetivos, público e posicionamento da marca." },
      { step: "02", title: "Design", desc: "Criação da estrutura visual alinhada com a identidade da marca." },
      { step: "03", title: "Desenvolvimento", desc: "Construção técnica com foco em performance e experiência." },
      { step: "04", title: "Lançamento", desc: "Publicação, testes finais e otimização para motores de pesquisa." },
    ],
    resultados: ["Site profissional e rápido", "Experiência de utilizador otimizada", "Maior taxa de conversão", "Visibilidade nos motores de pesquisa"],
  },
  {
    id: "04",
    slug: "trafego-performance",
    title: "Tráfego & Performance",
    tagline: "Cada euro com intenção.",
    image: "/sandra-split-4.jpg",
    description: "Anúncios otimizados e tracking avançado para garantir que cada euro investido tem uma intenção estratégica.",
    descricaoLonga: "Investir em publicidade sem estratégia é desperdiçar dinheiro. Desenvolvo e giro campanhas de tráfego pago com foco em resultados reais — desde a configuração técnica do tracking até à criação e otimização dos anúncios, para que cada euro investido trabalhe para o teu negócio.",
    items: ["Google Ads & Meta Ads", "Setup GTM & GA4", "Análise de Métricas"],
    processo: [
      { step: "01", title: "Auditoria", desc: "Análise da situação atual e definição de objetivos de campanha." },
      { step: "02", title: "Setup", desc: "Configuração técnica de tracking, pixels e conversões." },
      { step: "03", title: "Campanhas", desc: "Criação e lançamento de campanhas segmentadas e otimizadas." },
      { step: "04", title: "Otimização", desc: "Monitorização contínua e ajuste para maximizar o retorno." },
    ],
    resultados: ["Tracking preciso e confiável", "Redução do custo por lead", "Campanhas de alto impacto", "ROI mensurável e crescente"],
  },
];