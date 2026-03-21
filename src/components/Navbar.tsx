"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();

  const navLinks = [
    { name: "Sobre", href: "/sobre" },
    { name: "Serviços", href: "/servicos" },
    { name: "Projectos", href: "/projectos" },
    { name: "Blog", href: "/blog" },
  ];

  return (
    <>
      {/* O CHECKBOX MESTRE (O CÉREBRO INVISÍVEL) */}
      <input type="checkbox" id="menu-toggle" className="peer hidden" />

      <nav className="fixed top-0 left-0 w-full h-20 bg-[#F8F5F2]/80 backdrop-blur-xl border-b border-[#382622]/10 z-[10000] flex items-center shadow-sm">
        <div className="max-w-7xl mx-auto w-full px-6 md:px-12 flex justify-between items-center">

          {/* LOGO */}
          <Link href="/" className="text-xl md:text-2xl font-bold text-[#382622]">
            SandraSantos<span className="text-[#D4A373] italic font-serif">.pt</span>
          </Link>

          {/* MENU DESKTOP */}
          <div className="hidden md:flex items-center gap-10 ml-auto">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`text-sm font-semibold transition-colors ${pathname === link.href ? "text-[#D4A373]" : "text-[#382622]/70 hover:text-[#382622]"}`}
              >
                {link.name}
              </Link>
            ))}
            <Link href="/contacto" className="ml-4 bg-[#382622] text-[#F8F5F2] px-6 py-2.5 rounded-lg text-sm font-bold shadow-md">
              Contacto
            </Link>
          </div>

          {/* BOTÃO HAMBÚRGUER (Label que controla o Peer) */}
          <label 
            htmlFor="menu-toggle" 
            className="md:hidden p-4 -mr-4 text-[#382622] relative z-[10002] cursor-pointer"
          >
            {/* Ícone Menu: Esconde quando o peer está checked */}
            <div className="peer-checked:hidden block">
              <Menu size={32} />
            </div>
            {/* Ícone X: Só aparece quando o peer está checked */}
            <div className="peer-checked:block hidden">
              <X size={32} />
            </div>
          </label>
        </div>
      </nav>

      {/* OVERLAY MOBILE (Ouve o Peer) */}
      <div className="fixed inset-0 bg-[#F8F5F2] z-[9999] flex flex-col items-center justify-center 
                      transition-all duration-500 ease-in-out md:hidden
                      opacity-0 invisible -translate-y-full
                      peer-checked:opacity-100 peer-checked:visible peer-checked:translate-y-0">
        
        <div className="flex flex-col items-center gap-12">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-4xl font-serif italic text-[#382622]"
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/contacto"
            className="bg-[#382622] text-[#F8F5F2] px-12 py-5 rounded-2xl text-xl font-bold shadow-2xl"
          >
            Iniciar Conversa
          </Link>
        </div>
      </div>
    </>
  );
}