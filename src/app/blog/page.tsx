import Link from "next/link";
import { posts } from "@/data/posts";


export default function BlogPage() {
  return (
    <section className="py-32 bg-[#1C1C1E]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* HEADER DO BLOG */}
        <div className="text-center mb-20">
          <span className="text-sm uppercase tracking-[0.3em] text-[#C8A96E] font-semibold">Editorial</span>
          <h1 className="text-5xl md:text-6xl font-serif italic text-[#F2EDE4] mt-4">Pensamento & Autoridade</h1>
          <div className="w-20 h-[1px] bg-[#C8A96E] mx-auto mt-8"></div>
        </div>

        {/* GRELHA DE POSTS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {posts.map((post) => (
            <article key={post.id} className="group cursor-pointer">
              <Link href={`/blog/${post.slug}`}>
                <div className="bg-[#1C1C1E]/50 p-8 rounded-2xl border border-[#F2EDE4]/5 hover:border-[#C8A96E]/30 transition-all shadow-sm hover:shadow-xl">
                  <div className="flex justify-between items-center mb-6">
                    <span className="text-[10px] uppercase tracking-widest text-[#C8A96E] border border-[#C8A96E]/20 px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                    <span className="text-[10px] text-[#F2EDE4]/40 italic">{post.date}</span>
                  </div>
                  <h2 className="text-2xl font-serif text-[#F2EDE4] mb-4 group-hover:text-[#C8A96E] transition-colors leading-tight">
                    {post.title}
                  </h2>
                  <p className="text-[#F2EDE4]/70 text-sm leading-relaxed mb-6">
                    {post.excerpt}
                  </p>
                  <span className="text-xs font-bold uppercase tracking-tighter text-[#F2EDE4] group-hover:translate-x-2 inline-block transition-transform">
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