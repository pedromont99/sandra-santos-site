import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Sobre() {
  return (
    <main className="pt-32 pb-20 bg-[#F8F5F2]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* SECÇÃO 1: INTRODUÇÃO & FOTO */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl">
            <Image
              src="/sandra-santos-sobre.jpg"
              alt="Sandra Santos"
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className="space-y-8">
            <p className="text-[#59310b] text-xs font-bold uppercase tracking-[0.3em]">
              O Rosto por trás da marca
            </p>
            <h1 className="text-4xl md:text-6xl font-bold text-[#382622] leading-tight">
              Estratégia com alma, <br />
              <span className="text-[#59310b] italic font-serif">comunicação com propósito.</span>
            </h1>
            <div className="space-y-6 text-lg text-[#382622]/80 leading-relaxed">
              <p>
                Sou a Sandra Santos e acredito que o digital não tem de ser um "ruído" constante, mas sim um canal de ligação autêntica.
              </p>
              <p>
                Com foco em posicionamento e autoridade, ajudo marcas e profissionais a estruturarem a sua presença online de forma que o conteúdo trabalhe para eles, e não o contrário.
              </p>
            </div>
          </div>
        </div>

        {/* SECÇÃO: VALORES & MISSÃO (As 3 Tags Refinadas) */}
        <div className="grid md:grid-cols-3 gap-8 mb-32">
          {[
            {
              id: "01",
              title: "Transparência",
              desc: "Processos claros e comunicação direta. A confiança é a base de qualquer estratégia de sucesso que pretenda ser duradoura."
            },
            {
              id: "02",
              title: "Eficácia",
              desc: "Menos ruído, mais resultados. Cada ação é executada com foco cirúrgico no crescimento real e sustentável da sua marca."
            },
            {
              id: "03",
              title: "Criatividade",
              desc: "Soluções visuais e de conteúdo que não apenas decoram, mas comunicam a essência do negócio de forma estratégica e única."
            }
          ].map((item) => (
            <div
              key={item.id}
              className="p-10 border border-[#382622]/10 bg-white rounded-[2rem] group hover:bg-[#382622] transition-all duration-700 shadow-sm hover:shadow-2xl"
            >
              {/* O Número agora salta à vista */}
              <span className="block text-[#59310b] font-serif italic text-3xl mb-4 group-hover:text-[#F8F5F2]/50 transition-colors">
                {item.id}.
              </span>

              {/* Título com mais peso e impacto */}
              <h3 className="text-[#382622] font-black text-xl uppercase tracking-tighter mb-4 group-hover:text-[#F8F5F2] transition-colors">
                {item.title}
              </h3>

              {/* Corpo do texto mais refinado */}
              <p className="text-[#382622]/70 text-base md:text-lg leading-relaxed group-hover:text-[#F8F5F2]/80 transition-colors font-medium">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* SECÇÃO 2: A MINHA ABORDAGEM (O Toque de Ouro) */}
        <section className="bg-[#382622] rounded-[3rem] p-8 md:p-24 text-[#F8F5F2] mb-32 relative overflow-hidden shadow-[0_20px_50px_rgba(56,38,34,0.3)]">

          {/* Luz de fundo para dar profundidade e não deixar o castanho "morrer" */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#59310b]/10 blur-[120px] rounded-full -mr-32 -mt-32" />

          <div className="max-w-4xl relative z-10">
            <p className="text-[#D4A373] font-bold text-xs uppercase tracking-[0.4em] mb-12 drop-shadow-sm">
              Metodologia
            </p>

            <h2 className="text-4xl md:text-6xl font-bold mb-16 leading-[1.1] tracking-tighter">
              Não se trata apenas de estar online, mas de <br />
              {/* Aqui usamos o Contraste de Ouro: Texto com sombra própria para brilhar no escuro */}
              <span className="text-[#D4A373] italic font-serif drop-shadow-[0_2px_10px_rgba(212,163,115,0.2)]">
                como se apresenta ao mundo.
              </span>
            </h2>

            <div className="grid md:grid-cols-2 gap-16 lg:gap-24">
              {/* Bloco 1 */}
              <div className="group space-y-6">
                {/* A linha agora tem um gradiente para parecer metalizada */}
                <div className="w-16 h-[1px] bg-gradient-to-r from-[#D4A373] to-transparent" />
                <h4 className="text-2xl font-bold tracking-tight text-[#F8F5F2]">Estratégia Integrada</h4>
                <p className="text-lg text-[#F8F5F2]/60 leading-relaxed font-light group-hover:text-[#F8F5F2]/90 transition-colors">
                  Olhamos para o negócio como um ecossistema. Da assistência operacional à performance, cada peça deve estar alinhada com a
                  <span className="text-[#D4A373] font-medium italic ml-1">visão de longo prazo.</span>
                </p>
              </div>

              {/* Bloco 2 */}
              <div className="group space-y-6">
                <div className="w-16 h-[1px] bg-gradient-to-r from-[#D4A373] to-transparent" />
                <h4 className="text-2xl font-bold tracking-tight text-[#F8F5F2]">Clareza & Autoridade</h4>
                <p className="text-lg text-[#F8F5F2]/60 leading-relaxed font-light group-hover:text-[#F8F5F2]/90 transition-colors">
                  A estética premium não é um adorno; é um
                  <span className="text-[#D4A373] font-medium italic ml-1">filtro de confiança</span>. Removemos o ruído para que a sua mensagem chegue com clareza.
                </p>
              </div>
            </div>

            {/* Citação Final com destaque em "Vidro" */}
            <div className="mt-20 pt-16 border-t border-[#F8F5F2]/5">
              <p className="text-xl md:text-3xl font-serif italic text-[#D4A373]/90 leading-snug">
                "O meu objetivo é que o digital trabalhe para si, <br className="hidden md:block" /> e não o contrário."
              </p>
            </div>
          </div>
        </section>

        {/* CTA FINAL DA PÁGINA */}
        <div className="text-center space-y-8">
          <h3 className="text-2xl md:text-4xl font-bold text-[#382622]">Vamos estruturar o seu próximo passo?</h3>
          <Link
            href="/contacto"
            className="inline-flex items-center gap-3 bg-[#382622] text-[#F8F5F2] px-10 py-5 rounded-xl font-bold hover:bg-[#59310b] transition-all group"
          >
            Trabalhar comigo
            <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
          </Link>
        </div>

      </div>
    </main>
  );
}
