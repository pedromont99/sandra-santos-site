import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Sandra Santos | Estratégia & Autoridade",
  description: "Consultoria de imagem e posicionamento premium.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased bg-[#1C1C1E] text-[#F2EDE4] flex flex-col min-h-screen`}>
        {/* Navbar fixa no topo */}
        <Navbar />
        
        {/* O segredo: Removemos o max-w DAQUI. 
            O conteúdo (Hero, etc) já tem o seu próprio max-w-7xl.
            Assim o 'main' não sobe por cima da Navbar no Mobile.
        */}
        <main className="flex-grow w-full relative">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}