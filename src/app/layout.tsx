import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer"; // 1. O IMPORT TEM DE ESTAR AQUI
import Link from "next/link";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased bg-[#F8F5F2] text-[#382622] flex flex-col min-h-screen`}>
        <Navbar />
        
        {/* Este 'main' é o segredo para centrar tudo */}
        <main className="flex-grow w-full max-w-7xl mx-auto px-6 md:px-12">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}