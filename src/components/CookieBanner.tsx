"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function CookieBanner() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const consent = localStorage.getItem("cookie-consent");
        if (!consent) setVisible(true);
    }, []);

    const accept = () => {
        localStorage.setItem("cookie-consent", "accepted");
        setVisible(false);
    };

    const reject = () => {
        localStorage.setItem("cookie-consent", "rejected");
        setVisible(false);
    };

    if (!visible) return null;

    return (
        <div className="fixed bottom-0 left-0 right-0 z-[99999] p-4 md:p-6">
            <div className="max-w-7xl mx-auto bg-[#2E2E30] border border-[#C8A96E]/20 rounded-2xl p-6 md:p-8 shadow-2xl">
                <div className="flex flex-col md:flex-row items-start md:items-center gap-6">

                    <div className="flex-1 space-y-2">
                        <p className="text-[#F2EDE4] font-bold text-sm">🍪 Este website utiliza cookies</p>
                        <p className="text-[#F2EDE4]/60 text-xs leading-relaxed">
                            Utilizamos cookies essenciais para o funcionamento do site e, com o seu consentimento, cookies de análise e marketing (Google Analytics, Google Ads e Meta Pixel).
                            Consulte a nossa{" "}
                            <Link href="/cookies" className="text-[#C8A96E] hover:underline">
                                Política de Cookies
                            </Link>{" "}
                            e{" "}
                            <Link href="/privacidade" className="text-[#C8A96E] hover:underline">
                                Política de Privacidade
                            </Link>.
                        </p>
                    </div>

                    <div className="flex gap-3 shrink-0">
                        <button
                            onClick={reject}
                            className="px-6 py-2.5 border border-[#F2EDE4]/20 text-[#F2EDE4]/60 rounded-xl text-xs font-bold uppercase tracking-widest hover:border-[#F2EDE4]/40 hover:text-[#F2EDE4] transition-all"
                        >
                            Recusar
                        </button>
                        <button
                            onClick={accept}
                            className="px-6 py-2.5 bg-[#C8A96E] text-[#1C1C1E] rounded-xl text-xs font-bold uppercase tracking-widest hover:bg-[#8C6D3F] hover:text-[#F2EDE4] transition-all"
                        >
                            Aceitar
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}