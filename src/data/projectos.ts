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
    descricao: "Posicionamento digital focado em autoridade e exclusividade para o mercado premium.",
    descricaoLonga: "Um projeto de posicionamento completo que envolveu a criação da identidade visual, estratégia de conteúdo e presença digital. O objetivo é comunicar autoridade e exclusividade para atrair um público de alto valor.",
    insight: "Construção completa de identidade visual e estratégia de conteúdo, do zero á presença consistente e posicionada.",
    imagem: "/projeto-sandra.jpg",
    imagemDetalhe1: "/sandra-detalhe-1.jpg",
    imagemDetalhe2: "/sandra-detalhe-2.jpg",
    tags: ["Branding", "Web Design", "Copywriting"],
    resultados: ["+40% retenção orgânica", "Posicionamento premium", "Identidade visual coesa"],
  },
  {
    id: "02",
    cliente: "Turismo",
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
    cliente: "Plataforma de Tarot",
    categoria: "Performance & Ads",
    descricao: "Campanhas de tráfego pago otimizadas para escala de produtos da plataforma digital.",
    descricaoLonga: "Desenvolvimento e otimização de campanhas de performance para escalar produtos da plataforma digital. Trabalho cirúrgico de segmentação e criativos para reduzir custos e aumentar qualidade dos leads.",
    insight: "Redução do custo por lead em 25% através de segmentação cirúrgica e criativos de alto impacto.",
    imagem: "/projeto-placeholder-3.jpg",
    imagemDetalhe1: "/detalhe-3-1.jpg",
    imagemDetalhe2: "/detalhe-3-2.jpg",
    tags: ["Google Ads", "Analytics", "Scaling"],
    resultados: ["-25% custo por lead", "Criativos de alto impacto", "Escala sustentável"],
  },
  {
    id: "04",
  cliente: "Desenvolvimento Web",
  categoria: "Websites & Landing Pages",
  descricao: "Criação de websites e landing pages estratégicas, pensadas para comunicar com clareza e converter visitantes em clientes.",
  descricaoLonga: "Cada projeto digital começa com uma pergunta simples: o que queremos que o visitante sinta e faça? A partir daí, construímos experiências web que comunicam autoridade, geram confiança e transformam visitas em resultados reais — desde sites institucionais a landing pages de alta conversão.",
  insight: "Um website bem construído trabalha 24 horas por dia. É o vendedor mais silencioso e mais eficaz de qualquer negócio.",
  imagem: "/projeto-placeholder-4.jpg",
  imagemDetalhe1: "/detalhe-4-1.jpg",
  imagemDetalhe2: "/detalhe-4-2.jpg",
  tags: ["Next.js", "WordPress", "Landing Pages"],
  resultados: [
    "Sites rápidos e otimizados para SEO",
    "Design premium alinhado à marca",
    "Experiência mobile-first",
    "Conversão como objetivo central"
  ],
  },
];