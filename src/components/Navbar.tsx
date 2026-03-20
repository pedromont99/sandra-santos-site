import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 w-full z-50 bg-[#F8F5F2]/60 backdrop-blur-md border-b border-[#382622]/5">
  {/* Aumentei para backdrop-blur-xl para o efeito ser impossível de ignorar */}
      {/* EXPLICAÇÃO DO MESTRE:
          - max-w-7xl: Limita a largura a 1280px (igual ao Hero)
          - mx-auto: Centra esta 'caixa' no meio do ecrã
          - w-full: Garante que ela tenta ocupar o espaço disponível
      */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 h-20 flex items-center justify-between w-full">
        
        {/* LOGO */}
        <Link href="/" className="text-xl md:text-2xl font-bold text-brand-dark flex-shrink-0">
          SandraSantos<span className="text-brand-accent italic font-serif">.pt</span>
        </Link>

        {/* MENUS */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="/sobre" className="text-sm font-medium hover:text-brand-accent transition-colors">Sobre</Link>
          <Link href="/servicos" className="text-sm font-medium hover:text-brand-accent transition-colors">Serviços</Link>
          <Link href="/portfolio" className="text-sm font-medium hover:text-brand-accent transition-colors">Portfólio</Link>
          <Link href="/contacto" className="bg-brand-dark text-brand-soft px-5 py-2 rounded-lg text-sm font-semibold hover:bg-brand-accent transition-all">
            Contacto
          </Link>
        </div>

        {/* MOBILE GHOST (Para manter o equilíbrio do justify-between) */}
        <div className="md:hidden">
          <span className="text-xs uppercase font-bold text-brand-dark/40">Menu</span>
        </div>
      </div>
    </nav>
  );
}