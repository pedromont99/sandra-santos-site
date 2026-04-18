import Link from "next/link";
import { ArrowLeft, Clock, Share2 } from "lucide-react";
import { notFound } from "next/navigation";
import { posts } from "@/data/posts";
import ShareButton from "@/components/ShareButton";


export async function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);

  if (!post) notFound();

  return (
    <article className="min-h-screen bg-[#1C1C1E] pt-32 pb-20">
      <div className="max-w-3xl mx-auto px-6">

        {/* VOLTAR */}
        <Link href="/blog" className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-[#C8A96E] mb-12 hover:gap-4 transition-all">
          <ArrowLeft size={14} /> Voltar ao Editorial
        </Link>

        {/* CABEÇALHO */}
        <header className="mb-16">
          <div className="flex items-center gap-4 text-[#F2EDE4]/40 text-[10px] uppercase tracking-[0.2em] mb-6">
            <span className="bg-[#C8A96E]/10 text-[#C8A96E] px-3 py-1 rounded-full">{post.category}</span>
            <span className="flex items-center gap-1"><Clock size={12} /> {post.readTime}</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-serif italic text-[#F2EDE4] leading-tight mb-8">
            {post.title}
          </h1>

          <div className="flex items-center justify-between border-y border-[#F2EDE4]/5 py-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#F2EDE4] flex items-center justify-center text-[#1C1C1E] font-serif italic">S</div>
              <div>
                <p className="text-xs font-bold text-[#F2EDE4]">Sandra Santos</p>
                <p className="text-[10px] text-[#F2EDE4]/50">Estrategista de Imagem</p>
              </div>
            </div>
            <ShareButton title={post.title} />
          </div>
        </header>

        {/* CORPO */}
        <div className="prose prose-stone max-w-none text-[#F2EDE4]/80 leading-[1.8] space-y-8 font-light text-lg">
          {post.content.map((paragraph, i) => (
            <p key={i} className={i === 0 ? "first-letter:text-6xl first-letter:font-serif first-letter:text-[#C8A96E] first-letter:mr-3 first-letter:float-left" : ""}>
              {paragraph}
            </p>
          ))}

          <blockquote className="py-10 my-12 border-l-2 border-[#C8A96E] pl-8 italic font-serif text-2xl text-[#F2EDE4]/90 leading-relaxed">
            "{post.quote}"
          </blockquote>

          <h2 className="text-2xl font-serif text-[#F2EDE4] pt-6">Os Três Pilares do Posicionamento</h2>
          <ul className="list-disc pl-5 space-y-4">
            {post.topics.map((topic, i) => (
              <li key={i}>{topic}</li>
            ))}
          </ul>
        </div>

        {/* CTA */}
        <footer className="mt-20 p-10 bg-[#F2EDE4] rounded-3xl text-center">
          <h3 className="text-[#1C1C1E] font-serif italic text-2xl mb-4">Pronta para elevar o teu nível?</h3>
          <p className="text-[#1C1C1E]/60 text-sm mb-8">Agende uma consultoria estratégica e transforma a tua presença digital.</p>
          <Link href="/contacto" className="inline-block bg-[#C8A96E] text-[#F2EDE4] px-8 py-4 rounded-xl font-bold uppercase tracking-widest text-xs hover:bg-[#1C1C1E] transition-all shadow-lg">
            Solicitar Proposta
          </Link>
        </footer>
      </div>
    </article>
  );
}