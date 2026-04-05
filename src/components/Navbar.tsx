"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Sobre", href: "/sobre" },
    { name: "Serviços", href: "/servicos" },
    { name: "Gestão Digital", href: "/guia", highlight: true },
    { name: "Projectos", href: "/projectos" },
    { name: "Blog", href: "/blog" },
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 w-full h-20 bg-[#1C1C1E]/70 backdrop-blur-xl border-b border-[#C8A96E]/20 z-[10000] flex items-center shadow-sm">
        <div className="max-w-7xl mx-auto w-full px-6 md:px-12 flex justify-between items-center">

          {/* LOGO */}
          <Link href="/" className="text-xl md:text-2xl font-bold text-[#F2EDE4]">
            SandraSantos<span className="text-[#C8A96E] italic font-serif">.pt</span>
          </Link>

          {/* MENU DESKTOP */}
          <div className="hidden md:flex items-center gap-10 ml-auto">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`text-sm font-semibold transition-colors ${
                  pathname === link.href
                    ? "text-[#C8A96E]"
                    : link.highlight
                    ? "text-[#C8A96E]/80 hover:text-[#C8A96E] font-bold"
                    : "text-[#F2EDE4]/60 hover:text-[#F2EDE4]"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/contacto"
              className="ml-4 bg-[#C8A96E] text-[#1C1C1E] px-6 py-2.5 rounded-lg text-sm font-bold shadow-md hover:bg-[#8C6D3F] hover:text-[#F2EDE4] transition-colors"
            >
              Contacto
            </Link>
          </div>

          {/* BOTÃO HAMBÚRGUER */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-4 -mr-4 text-[#F2EDE4] z-[10002] touch-manipulation"
          >
            {isOpen ? <X size={32} /> : <Menu size={32} />}
          </button>

        </div>
      </nav>

      {/* OVERLAY MOBILE — controlado por useState */}
      {isOpen && (
        <div className="fixed inset-0 bg-[#1C1C1E] z-[9999] flex flex-col items-center justify-center md:hidden">
          <div className="flex flex-col items-center gap-12">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`text-4xl font-serif italic transition-colors ${
                  link.highlight
                    ? "text-[#C8A96E] hover:text-[#8C6D3F]"
                    : "text-[#F2EDE4] hover:text-[#C8A96E]"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/contacto"
              onClick={() => setIsOpen(false)}
              className="bg-[#C8A96E] text-[#1C1C1E] px-12 py-5 rounded-2xl text-xl font-bold shadow-2xl hover:bg-[#8C6D3F] hover:text-[#F2EDE4] transition-colors"
            >
              Iniciar Conversa
            </Link>
          </div>
        </div>
      )}
    </>
  );
}