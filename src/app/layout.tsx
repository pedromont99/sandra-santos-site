import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata: Metadata = {
  title: "Sandra Santos | Estratégia & Autoridade Digital",
  description: "Consultora digital especializada em branding, redes sociais, desenvolvimento web e tráfego pago. Transformo a sua presença digital em posicionamento e autoridade.",
  keywords: ["consultora digital", "branding", "redes sociais", "marketing digital", "Portugal"],
  authors: [{ name: "Sandra Santos" }],
  creator: "Sandra Santos",
  metadataBase: new URL("https://sandrasantos.pt"),
  openGraph: {
    title: "Sandra Santos | Estratégia & Autoridade Digital",
    description: "Transformo a sua presença digital em posicionamento, autoridade e crescimento.",
    url: "https://sandrasantos.pt",
    siteName: "Sandra Santos",
    images: [
      {
        url: "/sandra-santos-hero.jpg",
        width: 1200,
        height: 630,
        alt: "Sandra Santos - Consultora Digital",
      },
    ],
    locale: "pt_PT",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sandra Santos | Estratégia & Autoridade Digital",
    description: "Transformo a sua presença digital em posicionamento, autoridade e crescimento.",
    images: ["/sandra-santos-hero.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
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
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}