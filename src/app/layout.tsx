import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";

export const metadata: Metadata = {
  title: "Sandra Santos | Crescimento Digital",
  description: "Gestão de redes sociais, tráfego pago, websites e estratégia de conteúdo para negócios que querem crescer online. Portugal.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt" suppressHydrationWarning>
      <body className="antialiased bg-[#1C1C1E] text-[#F2EDE4] flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow w-full">
          {children}
        </main>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}