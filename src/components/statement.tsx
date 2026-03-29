export default function Statement() {
  return (
    <section className="w-full py-24 md:py-32 bg-[#1C1C1E] relative overflow-hidden">
      {/* Detalhe decorativo subtil */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-[#C8A96E]/10 via-transparent to-transparent opacity-50" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Tag de Contexto */}
          <h3 className="text-[#C8A96E] text-sm md:text-base font-serif italic tracking-[0.3em] mb-8">
            Diferenciação
          </h3>

          {/* O Texto Principal */}
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-medium text-[#F2EDE4] leading-[1.2] tracking-tight">
            Mais do que presença digital, desenvolvo{" "}
            <span className="text-[#C8A96E] italic font-serif">comunicação com intenção.</span>
          </h2>

          {/* Texto de Apoio */}
          <p className="mt-10 text-xl md:text-2xl text-[#F2EDE4]/60 max-w-2xl mx-auto leading-relaxed font-light italic">
            "Cada projeto é pensado de forma estratégica, alinhado com os objetivos do negócio e focado em criar ligação com o público certo."
          </p>

          {/* Linha decorativa centrada */}
          <div className="mt-16 w-24 h-[1px] bg-[#C8A96E]/30 mx-auto" />
        </div>
      </div>
    </section>
  );
}