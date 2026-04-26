"use client";
import { useState, useEffect } from "react";
import { ArrowUpRight, MessageCircle } from "lucide-react";
import Link from "next/link";
import { FaInstagram, FaFacebook } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [, setCookieConsent] = useState<string | null>(null);

  useEffect(() => {
    setCookieConsent(localStorage.getItem("cookie-consent"));
  }, []);

  const resetCookies = () => {
    localStorage.removeItem("cookie-consent");
    window.location.reload();
  };

  const whatsappNumber = "351924309018";
  const whatsappMessage = encodeURIComponent("Olá Sandra, vi o seu site e gostaria de saber mais sobre os seus serviços.");

  return (
    <footer className="bg-[#F2EDE4] text-[#1C1C1E] pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

          {/* COLUNA 1: LOGO E REDES */}
          <div className="lg:col-span-2 space-y-6">
            <Link href="/" className="text-2xl font-bold tracking-tighter">
              SandraSantos<span className="text-[#C8A96E]">.pt</span>
            </Link>
            <p className="text-[#1C1C1E]/60 max-w-sm text-lg leading-relaxed">
              Transformo a tua presença digital em posicionamento, autoridade e crescimento.
            </p>
            <div className="flex gap-4 pt-2">
              <a
                href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-green-500/10 text-green-500 rounded-full hover:bg-green-500 hover:text-[#F2EDE4] transition-all duration-300 group"
                title="Contactar via WhatsApp"
              >
                <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
              <a
                href="https://instagram.com/sandrasantos.pt/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-[#1C1C1E]/5 rounded-full hover:bg-[#8C6D3F] hover:text-[#F2EDE4] transition-all duration-300 group"
              >
                <FaInstagram className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
              <a
                href="https://facebook.com/sandrasantos.studio"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-[#1C1C1E]/5 rounded-full hover:bg-[#8C6D3F] hover:text-[#F2EDE4] transition-all duration-300 group"
              >
                <FaFacebook className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>

          {/* COLUNA 2: NAVEGAÇÃO */}
          <div className="space-y-6">
            <h4 className="font-bold uppercase tracking-widest text-xs text-[#C8A96E]">Menu</h4>
            <ul className="space-y-4">
              <li><Link href="/sobre" className="text-[#1C1C1E]/70 hover:text-[#1C1C1E] transition-colors">Sobre</Link></li>
              <li><Link href="/servicos" className="text-[#1C1C1E]/70 hover:text-[#1C1C1E] transition-colors">Serviços</Link></li>
              <li><Link href="/projectos" className="text-[#1C1C1E]/70 hover:text-[#1C1C1E] transition-colors">Projetos</Link></li>
              <li><Link href="/blog" className="text-[#1C1C1E]/70 hover:text-[#1C1C1E] transition-colors">Blog</Link></li>
              {/* <li><Link href="/guia" className="text-[#C8A96E] hover:text-[#8C6D3F] transition-colors font-bold">Gestão Digital</Link></li> */}
            </ul>
          </div>

          {/* COLUNA 3: CONTACTO RÁPIDO */}
          <div className="space-y-6">
            <h4 className="font-bold uppercase tracking-widest text-xs text-[#C8A96E]">Contacto</h4>
            <div className="flex flex-col gap-4">
              <Link
                href="/contacto"
                className="inline-flex items-center gap-2 group text-lg font-medium hover:text-[#8C6D3F] transition-colors"
              >
                Trabalhar comigo
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </Link>
              <a href="mailto:ola@sandrasantos.pt" className="text-[#1C1C1E]/40 text-sm hover:text-[#8C6D3F] transition-colors">
                ola@sandrasantos.pt
              </a>
            </div>
          </div>
        </div>

        {/* BARRA FINAL */}
        <div className="pt-10 border-t border-[#1C1C1E]/5 flex flex-col md:flex-row justify-between gap-6 items-center">
          <p className="text-[#1C1C1E]/40 text-xs text-center md:text-left">
            © {currentYear} Sandra Santos. Todos os direitos reservados.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <Link href="/privacidade" className="text-[#1C1C1E]/40 text-xs hover:text-[#1C1C1E] transition-colors">Privacidade</Link>
            <Link href="/termos" className="text-[#1C1C1E]/40 text-xs hover:text-[#1C1C1E] transition-colors">Termos</Link>
            <Link href="/cookies" className="text-[#1C1C1E]/40 text-xs hover:text-[#1C1C1E] transition-colors">Cookies</Link>
            <button
              onClick={resetCookies}
              className="text-[#1C1C1E]/40 text-xs hover:text-[#1C1C1E] transition-colors underline cursor-pointer"
            >
              Gerir Cookies
            </button>

            <a href="https://www.livroreclamacoes.pt/Inicio/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#1C1C1E]/40 text-xs hover:text-[#1C1C1E] transition-colors"
            >
              Livro de Reclamações
            </a>
          </div> {/* fecha o flex gap-6 */}
          <p className="text-[#1C1C1E]/40 text-[10px] tracking-[0.2em] uppercase">
            Built with Intention by Sandra Santos
          </p>
        </div> {/* fecha o pt-10 barra final */}
      </div> {/* fecha o max-w-7xl */}
    </footer>
  );
}
