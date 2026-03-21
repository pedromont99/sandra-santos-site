import Link from "next/link";

const posts = [
  {
    id: 1,
    title: "O Poder da Imagem Estratégica no Digital",
    excerpt: "Como o seu posicionamento visual pode ditar o sucesso da sua faturação em 2026. A primeira impressão demora apenas 3 segundos.",
    date: "21 Março, 2026",
    category: "Estratégia",
    slug: "poder-da-imagem-estrategica"
  },
  {
    id: 2,
    title: "Silêncio Visual: O Luxo de não Gritar",
    excerpt: "No ruído das redes sociais, a elegância minimalista é a maior forma de destaque. Aprenda a comunicar sem esforço.",
    date: "18 Março, 2026",
    category: "Branding",
    slug: "silencio-visual"
  },
  {
    id: 3,
    title: "A Psicologia das Cores no Fechamento de Negócios",
    excerpt: "Por que o azul marinho transmite confiança e o preto autoridade? Saiba o que vestir para a sua próxima reunião de fecho.",
    date: "14 Março, 2026",
    category: "Psicologia",
    slug: "psicologia-das-cores"
  }
];

export default function BlogPage() {
  return (
    <section className="py-32 bg-[#F8F5F2]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* HEADER DO BLOG */}
        <div className="text-center mb-20">
          <span className="text-sm uppercase tracking-[0.3em] text-[#D4A373] font-semibold">Editorial</span>
          <h1 className="text-5xl md:text-6xl font-serif italic text-[#382622] mt-4">Pensamento & Autoridade</h1>
          <div className="w-20 h-[1px] bg-[#D4A373] mx-auto mt-8"></div>
        </div>

        {/* GRELHA DE POSTS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {posts.map((post) => (
            <article key={post.id} className="group cursor-pointer">
              <Link href={`/blog/${post.slug}`}>
                <div className="bg-white/50 p-8 rounded-2xl border border-[#382622]/5 hover:border-[#D4A373]/30 transition-all shadow-sm hover:shadow-xl">
                  <div className="flex justify-between items-center mb-6">
                    <span className="text-[10px] uppercase tracking-widest text-[#D4A373] border border-[#D4A373]/20 px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                    <span className="text-[10px] text-[#382622]/40 italic">{post.date}</span>
                  </div>
                  <h2 className="text-2xl font-serif text-[#382622] mb-4 group-hover:text-[#D4A373] transition-colors leading-tight">
                    {post.title}
                  </h2>
                  <p className="text-[#382622]/70 text-sm leading-relaxed mb-6">
                    {post.excerpt}
                  </p>
                  <span className="text-xs font-bold uppercase tracking-tighter text-[#382622] group-hover:translate-x-2 inline-block transition-transform">
                    Ler Artigo —
                  </span>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}