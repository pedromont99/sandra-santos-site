export default function Cookies() {
    return (
        <main className="pt-32 pb-20 bg-[#1C1C1E] min-h-screen">
            <div className="max-w-4xl mx-auto px-6 md:px-12 text-[#F2EDE4]">

                <div className="mb-16">
                    <p className="text-[#C8A96E] text-xs uppercase tracking-[0.4em] font-bold mb-4">Legal</p>
                    <h1 className="text-4xl md:text-6xl font-serif italic text-[#F2EDE4] mb-6">Política de Cookies</h1>
                    <p className="text-[#F2EDE4]/50 text-sm">Última atualização: Abril 2026</p>
                </div>

                <div className="space-y-12 text-[#F2EDE4]/80 leading-relaxed">

                    <section className="space-y-4">
                        <h2 className="text-2xl font-serif italic text-[#C8A96E]">1. O que são Cookies</h2>
                        <p>Cookies são pequenos ficheiros de texto armazenados no seu dispositivo quando visita um website. Permitem que o site reconheça o seu dispositivo e memorize informações sobre a sua visita.</p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-serif italic text-[#C8A96E]">2. Cookies que Utilizamos</h2>

                        <div className="space-y-6">
                            <div className="bg-[#2E2E30] p-6 rounded-2xl border border-[#F2EDE4]/5">
                                <h3 className="text-lg font-bold text-[#F2EDE4] mb-2">Cookies Essenciais</h3>
                                <p className="text-sm text-[#F2EDE4]/60">Necessários para o funcionamento básico do website. Não requerem consentimento.</p>
                            </div>

                            <div className="bg-[#2E2E30] p-6 rounded-2xl border border-[#F2EDE4]/5">
                                <h3 className="text-lg font-bold text-[#F2EDE4] mb-2">Cookies de Análise</h3>
                                <p className="text-sm text-[#F2EDE4]/60 mb-3">Permitem-nos compreender como os visitantes utilizam o website.</p>
                                <ul className="list-disc pl-4 space-y-1 text-sm text-[#F2EDE4]/60">
                                    <li><strong className="text-[#F2EDE4]">Google Analytics</strong> — análise de tráfego e comportamento de navegação.</li>
                                    <li><strong className="text-[#F2EDE4]">Google Tag Manager</strong> — gestão de tags e scripts de medição.</li>
                                </ul>
                            </div>

                            <div className="bg-[#2E2E30] p-6 rounded-2xl border border-[#F2EDE4]/5">
                                <h3 className="text-lg font-bold text-[#F2EDE4] mb-2">Cookies de Marketing</h3>
                                <p className="text-sm text-[#F2EDE4]/60 mb-3">Utilizados para apresentar publicidade relevante e medir a eficácia de campanhas.</p>
                                <ul className="list-disc pl-4 space-y-1 text-sm text-[#F2EDE4]/60">
                                    <li><strong className="text-[#F2EDE4]">Google Ads</strong> — remarketing e medição de conversões.</li>
                                    <li><strong className="text-[#F2EDE4]">Meta Pixel</strong> — publicidade e análise no Facebook e Instagram.</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-serif italic text-[#C8A96E]">3. Gestão de Cookies</h2>
                        <p>Pode gerir as suas preferências de cookies a qualquer momento através do banner de cookies apresentado na sua primeira visita ao website.</p>
                        <p>Pode também configurar o seu browser para bloquear ou eliminar cookies. Note que a desativação de certos cookies pode afetar a funcionalidade do website.</p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-serif italic text-[#C8A96E]">4. Transferências Internacionais</h2>
                        <p>Alguns dos nossos parceiros (Google, Meta) estão localizados fora da União Europeia. As transferências de dados são realizadas ao abrigo de mecanismos legais adequados, nomeadamente as Cláusulas Contratuais Tipo aprovadas pela Comissão Europeia.</p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-serif italic text-[#C8A96E]">5. Mais Informações</h2>
                        <p>Para mais informações sobre o tratamento dos seus dados pessoais, consulte a nossa <a href="/privacidade" className="text-[#C8A96E] hover:underline">Política de Privacidade</a>.</p>
                        <p>Para questões sobre cookies, contacte-nos em <a href="mailto:ola@sandrasantos.pt" className="text-[#C8A96E] hover:underline">ola@sandrasantos.pt</a>.</p>
                    </section>

                </div>
            </div>
        </main>
    );
}