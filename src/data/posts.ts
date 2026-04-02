export type Post = {
  title: string;
  slug: string;
  category: string;
  date: string;
  readTime: string;
  excerpt: string;
  content: string[];
  quote: string;
  topics: string[];
};

export const posts: Post[] = [
  {
    title: "O Poder da Imagem Estratégica no Digital",
    slug: "poder-da-imagem-estrategica",
    category: "Estratégia",
    date: "21 Março, 2026",
    readTime: "5 min de leitura",
    excerpt: "Como o seu posicionamento visual pode ditar o sucesso da sua faturação em 2026. A primeira impressão demora apenas 3 segundos.",
    content: [
      "A primeira impressão no mundo digital acontece em menos de três segundos. É o tempo que um potencial cliente leva para decidir se a sua autoridade é real ou apenas uma construção frágil.",
      "Muitas profissionais focam-se apenas no conteúdo técnico, esquecendo que a estética estratégica é o filtro pelo qual esse conteúdo é recebido. Sem uma imagem condizente com o valor do seu serviço, o seu preço será sempre questionado.",
    ],
    quote: "Não se trata de parecer perfeita, trata-se de parecer a solução que o seu cliente procura.",
    topics: [
      "Coerência Visual: O seu feed deve respirar o seu preço.",
      "Intencionalidade: Cada fotografia deve responder a um 'porquê'.",
      "Humanização Premium: Ser acessível sem perder a exclusividade.",
    ],
  },
  {
    title: "Silêncio Visual: O Luxo de não Gritar",
    slug: "silencio-visual",
    category: "Branding",
    date: "18 Março, 2026",
    readTime: "4 min de leitura",
    excerpt: "No ruído das redes sociais, a elegância minimalista é a maior forma de destaque. Aprenda a comunicar sem esforço.",
    content: [
      "No mundo saturado das redes sociais, a tentação de gritar mais alto do que a concorrência é constante. Mas as marcas verdadeiramente premium descobriram o segredo oposto: quanto menos ruído, mais atenção.",
      "O minimalismo estratégico não é ausência de comunicação — é presença calculada. Cada elemento que retira da sua imagem é um convite à imaginação do seu cliente.",
    ],
    quote: "O luxo não se anuncia. Apresenta-se.",
    topics: [
      "Espaço em branco como elemento de design intencional.",
      "Paletas monocromáticas que transmitem sofisticação.",
      "Frequência de publicação como statement de qualidade.",
    ],
  },
  {
    title: "A Psicologia das Cores no Fechamento de Negócios",
    slug: "psicologia-das-cores",
    category: "Psicologia",
    date: "14 Março, 2026",
    readTime: "6 min de leitura",
    excerpt: "Por que o azul marinho transmite confiança e o preto autoridade? Saiba o que vestir para a sua próxima reunião de fecho.",
    content: [
      "A ciência por detrás das cores vai muito além da estética. Cada tonalidade ativa áreas específicas do cérebro e desencadeia respostas emocionais que influenciam diretamente a decisão de compra.",
      "Profissionais de alto desempenho escolhem o seu guarda-roupa com a mesma estratégia que um arquiteto escolhe materiais — cada escolha tem uma função e comunica uma intenção.",
    ],
    quote: "Veste-te para o cliente que queres atrair, não para o que já tens.",
    topics: [
      "Azul Marinho: confiança, estabilidade e liderança serena.",
      "Preto: autoridade, exclusividade e sofisticação atemporal.",
      "Dourado/Bege: premium, calor e acessibilidade controlada.",
    ],
  },
];