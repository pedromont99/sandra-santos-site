export type Projeto = {
  id: string;
  cliente: string;
  categoria: string;
  descricao: string;
  descricaoLonga: string;
  insight: string;
  imagem: string;
  imagemDetalhe1: string;
  imagemDetalhe2: string;
  tags: string[];
  resultados: string[];
};

export const projetos: Projeto[] = [
  {
    id: "01",
    cliente: "Sandra Santos",
    categoria: "Estratégia & Marca Pessoal",
    descricao: "Reposicionamento digital focado em autoridade e exclusividade para o mercado premium.",
    descricaoLonga: "Um projeto de reposicionamento completo que envolveu a reformulação da identidade visual, estratégia de conteúdo e presença digital. O objetivo era comunicar autoridade e exclusividade para atrair um público de alto valor.",
    insight: "A reestruturação permitiu um aumento de 40% na retenção orgânica através de conteúdo intencional.",
    imagem: "/projeto-sandra.jpg",
    imagemDetalhe1: "/sandra-detalhe-1.jpg",
    imagemDetalhe2: "/sandra-detalhe-2.jpg",
    tags: ["Branding", "Web Design", "Copywriting"],
    resultados: ["+40% retenção orgânica", "Novo posicionamento premium", "Identidade visual coesa"],
  },
  {
    id: "02",
    cliente: "Check-in Destinos",
    categoria: "Gestão de Conteúdos",
    descricao: "Organização e curadoria de conteúdos para uma audiência que procura experiências de viagem únicas.",
    descricaoLonga: "Transformação da comunicação visual e editorial de uma marca de viagens para atrair um público exigente. A estratégia focou-se em storytelling visual e curadoria de experiências premium.",
    insight: "Transformámos a comunicação visual para atrair um público de alto padrão, resultando em conversão direta.",
    imagem: "/projeto-checkin.jpg",
    imagemDetalhe1: "/checkin-detalhe-1.jpg",
    imagemDetalhe2: "/checkin-detalhe-2.jpg",
    tags: ["Social Media", "Strategy", "Visuals"],
    resultados: ["Aumento de conversão direta", "Público premium atraído", "Identidade editorial definida"],
  },
  {
    id: "03",
    cliente: "Project Alpha",
    categoria: "Performance & Ads",
    descricao: "Campanhas de tráfego pago otimizadas para escala de infoprodutos de alto ticket.",
    descricaoLonga: "Desenvolvimento e otimização de campanhas de performance para escalar um infoproduto de alto valor. Trabalho cirúrgico de segmentação e criativos para reduzir custos e aumentar qualidade dos leads.",
    insight: "Redução do custo por lead em 25% através de segmentação cirúrgica e criativos de alto impacto.",
    imagem: "/projeto-placeholder-3.jpg",
    imagemDetalhe1: "/detalhe-3-1.jpg",
    imagemDetalhe2: "/detalhe-3-2.jpg",
    tags: ["Google Ads", "Analytics", "Scaling"],
    resultados: ["-25% custo por lead", "Criativos de alto impacto", "Escala sustentável"],
  },
  {
    id: "04",
    cliente: "Luxe Boutique",
    categoria: "E-commerce & Assistência",
    descricao: "Suporte operacional e gestão de loja online focada na experiência do cliente VIP.",
    descricaoLonga: "Otimização completa da operação de uma boutique online de luxo. Desde a experiência de checkout até à automação do atendimento, o foco foi libertar a fundadora para o que realmente importa.",
    insight: "Otimização do fluxo de checkout e automação de atendimento, libertando 15h semanais da fundadora.",
    imagem: "/projeto-placeholder-4.jpg",
    imagemDetalhe1: "/detalhe-4-1.jpg",
    imagemDetalhe2: "/detalhe-4-2.jpg",
    tags: ["Shopify", "Operations", "Customer Care"],
    resultados: ["+15h semanais libertadas", "Checkout otimizado", "Atendimento automatizado"],
  },
];