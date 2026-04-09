export default function EmBreve() {
  return (
    <main className="min-h-screen bg-[#1C1C1E] flex items-center justify-center px-6">
      <div className="text-center space-y-8 max-w-2xl">
        <p className="text-[#C8A96E] text-xs uppercase tracking-[0.4em] font-bold">Em breve</p>
        <h1 className="text-5xl md:text-7xl font-serif italic text-[#F2EDE4]">
          Algo incrível<br />
          <span className="text-[#C8A96E]">está a caminho.</span>
        </h1>
        <p className="text-xl text-[#F2EDE4]/60 leading-relaxed">
          Estou a preparar algo especial para ti. Volta em breve.
        </p>
        <div className="w-20 h-[1px] bg-[#C8A96E]/40 mx-auto" />
        <a
          href="mailto:ola@sandrasantos.pt"
          className="inline-block text-[#C8A96E] text-sm font-bold uppercase tracking-widest hover:text-[#F2EDE4] transition-colors"
        >
          ola@sandrasantos.pt
        </a>
      </div>
    </main>
  );
}