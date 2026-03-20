import { Instagram, Facebook, Linkedin, ArrowUpRight, MessageCircle } from "lucide-react"; // Adicionámos o MessageCircle
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  // Configura aqui o número da Sandra (formato: 351912345678)
  const whatsappNumber = "351900000000"; 
  const whatsappMessage = encodeURIComponent("Olá Sandra, vi o seu site e gostaria de saber mais sobre os seus serviços.");

  return (
    <footer className="bg-[#382622] text-[#F8F5F2] pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* COLUNA 1: LOGO E REDES */}
          <div className="lg:col-span-2 space-y-6">
            <Link href="/" className="text-2xl font-bold tracking-tighter">
              SandraSantos<span className="text-[#D4A373]">.pt</span>
            </Link>
            <p className="text-[#F8F5F2]/60 max-w-sm text-lg leading-relaxed">
              Transformo a sua presença digital em posicionamento, autoridade e crescimento.
            </p>
            
            {/* REDES SOCIAIS + WHATSAPP */}
            <div className="flex gap-4 pt-2">
              <a 
                href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 bg-green-500/10 text-green-500 rounded-full hover:bg-green-500 hover:text-white transition-all duration-300 group"
                title="Contactar via WhatsApp"
              >
                <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 bg-[#F8F5F2]/5 rounded-full hover:bg-[#59310b] transition-all duration-300 group"
              >
                <Instagram className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 bg-[#F8F5F2]/5 rounded-full hover:bg-[#59310b] transition-all duration-300 group"
              >
                <Facebook className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 bg-[#F8F5F2]/5 rounded-full hover:bg-[#59310b] transition-all duration-300 group"
              >
                <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>

          {/* COLUNA 2: NAVEGAÇÃO */}
          <div className="space-y-6">
            <h4 className="font-bold uppercase tracking-widest text-xs text-[#D4A373]">Menu</h4>
            <ul className="space-y-4">
              <li><Link href="/sobre" className="text-[#F8F5F2]/70 hover:text-[#F8F5F2] transition-colors">Sobre</Link></li>
              <li><Link href="/servicos" className="text-[#F8F5F2]/70 hover:text-[#F8F5F2] transition-colors">Serviços</Link></li>
              <li><Link href="/projetos" className="text-[#F8F5F2]/70 hover:text-[#F8F5F2] transition-colors">Projetos</Link></li>
            </ul>
          </div>

          {/* COLUNA 3: CONTACTO RÁPIDO */}
          <div className="space-y-6">
            <h4 className="font-bold uppercase tracking-widest text-xs text-[#D4A373]">Contacto</h4>
            <div className="flex flex-col gap-4">
              <Link 
                href="/contacto" 
                className="inline-flex items-center gap-2 group text-lg font-medium hover:text-[#59310b] transition-colors"
              >
                Trabalhar comigo
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </Link>
              <p className="text-[#F8F5F2]/40 text-sm">ola@sandrasantos.pt</p>
            </div>
          </div>
        </div>

        {/* BARRA FINAL */}
        <div className="pt-10 border-t border-[#F8F5F2]/5 flex flex-col md:flex-row justify-between gap-6 items-center">
          <p className="text-[#F8F5F2]/40 text-xs text-center md:text-left">
            © {currentYear} Sandra Santos. Todos os direitos reservados.
          </p>
          <p className="text-[#F8F5F2]/40 text-[10px] tracking-[0.2em] uppercase">
            Built with Intention by Neurox Digital
          </p>
        </div>
      </div>
    </footer>
  );
}