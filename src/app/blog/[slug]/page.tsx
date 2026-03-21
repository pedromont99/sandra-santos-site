import Link from "next/link";
import { ArrowLeft, Clock, Share2 } from "lucide-react";

export default function BlogPost() {
  return (
    <article className="min-h-screen bg-[#F8F5F2] pt-32 pb-20">
      <div className="max-w-3xl mx-auto px-6">
        
        {/* VOLTAR */}
        <Link href="/blog" className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-[#D4A373] mb-12 hover:gap-4 transition-all">
          <ArrowLeft size={14} /> Voltar ao Editorial
        </Link>

        {/* CABEÇALHO DO ARTIGO */}
        <header className="mb-16">
          <div className="flex items-center gap-4 text-[#382622]/40 text-[10px] uppercase tracking-[0.2em] mb-6">
            <span className="bg-[#D4A373]/10 text-[#D4A373] px-3 py-1 rounded-full">Estratégia</span>
            <span className="flex items-center gap-1"><Clock size={12} /> 5 min de leitura</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-serif italic text-[#382622] leading-tight mb-8">
            O Poder da Imagem Estratégica no Digital
          </h1>

          <div className="flex items-center justify-between border-y border-[#382622]/5 py-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#382622] flex items-center justify-center text-[#F8F5F2] font-serif italic">S</div>
              <div>
                <p className="text-xs font-bold text-[#382622]">Sandra Santos</p>
                <p className="text-[10px] text-[#382622]/50">Estrategista de Imagem</p>
              </div>
            </div>
            <button className="text-[#382622]/40 hover:text-[#D4A373] transition-colors">
              <Share2 size={18} />
            </button>
          </div>
        </header>

        {/* CORPO DO TEXTO (Onde a mágica acontece) */}
        <div className="prose prose-stone max-w-none text-[#382622]/80 leading-[1.8] space-y-8 font-light text-lg">
          <p className="first-letter:text-6xl first-letter:font-serif first-letter:text-[#D4A373] first-letter:mr-3 first-letter:float-left">
            A primeira impressão no mundo digital acontece em menos de três segundos. É o tempo que um potencial cliente leva para decidir se a sua autoridade é real ou apenas uma construção frágil.
          </p>

          <p>
            Muitas profissionais focam-se apenas no conteúdo técnico, esquecendo que a <strong>estética estratégica</strong> é o filtro pelo qual esse conteúdo é recebido. Sem uma imagem condizente com o valor do seu serviço, o seu preço será sempre questionado.
          </p>

          {/* CITAÇÃO DE DESTAQUE */}
          <blockquote className="py-10 my-12 border-l-2 border-[#D4A373] pl-8 italic font-serif text-2xl text-[#382622]/90 leading-relaxed">
            "Não se trata de parecer perfeita, trata-se de parecer a solução que o seu cliente procura."
          </blockquote>

          <h2 className="text-2xl font-serif text-[#382622] pt-6">Os Três Pilares do Posicionamento</h2>
          <p>
            Para elevar a sua percepção de valor, precisamos de alinhar a paleta cromática, a semiótica das suas poses e a narrativa visual do seu cenário. Cada detalhe comunica uma intenção.
          </p>
          
          <ul className="list-disc pl-5 space-y-4">
            <li>Coerência Visual: O seu feed deve respirar o seu preço.</li>
            <li>Intencionalidade: Cada fotografia deve responder a um "porquê".</li>
            <li>Humanização Premium: Ser acessível sem perder a exclusividade.</li>
          </ul>
        </div>

        {/* RODAPÉ DO POST (CTA) */}
        <footer className="mt-20 p-10 bg-[#382622] rounded-3xl text-center">
          <h3 className="text-[#F8F5F2] font-serif italic text-2xl mb-4">Pronta para elevar o seu nível?</h3>
          <p className="text-[#F8F5F2]/60 text-sm mb-8">Agende uma consultoria estratégica e transforme a sua presença digital.</p>
          <Link href="/contacto" className="inline-block bg-[#D4A373] text-[#382622] px-8 py-4 rounded-xl font-bold uppercase tracking-widest text-xs hover:bg-[#F8F5F2] transition-all shadow-lg">
            Solicitar Proposta
          </Link>
        </footer>
      </div>
    </article>
  );
}