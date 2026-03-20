export default function Statement() {
  return (
    <section className="py-24 md:py-32 bg-[#F8F5F2] relative overflow-hidden">
      {/* Detalhe decorativo subtil (um gradiente muito leve que cruza a secção) */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-[#E8E2DC]/40 via-transparent to-transparent opacity-50" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-4xl">
          {/* Tag de Contexto */}
          <p className="text-[#59310b] text-xs font-bold uppercase tracking-[0.3em] mb-8">
            Diferenciação
          </p>

          {/* O Texto Principal (Statement) */}
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-medium text-[#382622] leading-[1.2] tracking-tight">
            Mais do que presença digital, desenvolvo <br className="hidden md:block" />
            <span className="text-[#59310b] italic font-serif">comunicação com intenção.</span>
          </h2>

          {/* O Texto de Apoio (Copy do teu documento) */}
          <p className="mt-10 text-xl md:text-2xl text-[#382622]/60 max-w-2xl leading-relaxed font-light italic">
            "Cada projeto é pensado de forma estratégica, alinhado com os objetivos do negócio e focado em criar ligação com o público certo."
          </p>
          
          {/* Uma linha decorativa minimalista que cresce no scroll (opcional) */}
          <div className="mt-16 w-24 h-[1px] bg-[#59310b]/30" />
        </div>
      </div>
    </section>
  );
}