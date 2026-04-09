export default function Termos() {
    return (
        <main className="pt-32 pb-20 bg-[#1C1C1E] min-h-screen">
            <div className="max-w-4xl mx-auto px-6 md:px-12 text-[#F2EDE4]">

                <div className="mb-16">
                    <p className="text-[#C8A96E] text-xs uppercase tracking-[0.4em] font-bold mb-4">Legal</p>
                    <h1 className="text-4xl md:text-6xl font-serif italic text-[#F2EDE4] mb-6">Termos e Condições</h1>
                    <p className="text-[#F2EDE4]/50 text-sm">Última atualização: Abril 2026</p>
                </div>

                <div className="space-y-12 text-[#F2EDE4]/80 leading-relaxed">

                    <section className="space-y-4">
                        <h2 className="text-2xl font-serif italic text-[#C8A96E]">1. Identificação</h2>
                        <p>Sandra Santos, NIF 226021980, Palmela, Setúbal, Portugal.</p>
                        <p>Email: <a href="mailto:ola@sandrasantos.pt" className="text-[#C8A96E] hover:underline">ola@sandrasantos.pt</a></p>
                        <p>Website: <a href="https://sandrasantos.pt" className="text-[#C8A96E] hover:underline">sandrasantos.pt</a></p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-serif italic text-[#C8A96E]">2. Objeto</h2>
                        <p>Os presentes Termos e Condições regulam a utilização do website sandrasantos.pt e a aquisição de produtos digitais e serviços disponibilizados por Sandra Santos.</p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-serif italic text-[#C8A96E]">3. Serviços Prestados</h2>
                        <p>Sandra Santos presta serviços nas seguintes áreas:</p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Branding e gestão de redes sociais</li>
                            <li>Assistência virtual</li>
                            <li>Desenvolvimento web</li>
                            <li>Tráfego pago e performance digital</li>
                        </ul>
                        <p>As condições específicas de cada serviço são acordadas individualmente entre as partes através de proposta e contrato de prestação de serviços.</p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-serif italic text-[#C8A96E]">4. Produtos Digitais</h2>
                        <p>O website disponibiliza produtos digitais para venda, nomeadamente guias, ebooks e outros conteúdos formativos em formato PDF.</p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>O pagamento é processado de forma segura através da plataforma Gumroad.</li>
                            <li>Após confirmação do pagamento, o acesso ao produto é disponibilizado imediatamente por email.</li>
                            <li>Os produtos digitais são de uso pessoal e intransmissíveis — não é permitida a sua reprodução, partilha ou revenda.</li>
                            <li>Dado o caráter imediato da entrega digital, <strong>não são aceites devoluções</strong> após o download, salvo em caso de produto defeituoso.</li>
                        </ul>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-serif italic text-[#C8A96E]">5. Propriedade Intelectual</h2>
                        <p>Todo o conteúdo disponível neste website — textos, imagens, logótipos, produtos digitais e restantes elementos — é propriedade exclusiva de Sandra Santos e está protegido pela legislação de direitos de autor.</p>
                        <p>É expressamente proibida a reprodução, distribuição ou utilização comercial de qualquer conteúdo sem autorização prévia e escrita.</p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-serif italic text-[#C8A96E]">6. Limitação de Responsabilidade</h2>
                        <p>Sandra Santos não se responsabiliza por danos diretos ou indiretos resultantes da utilização do website ou dos seus conteúdos, incluindo indisponibilidade temporária do serviço.</p>
                        <p>Os resultados obtidos com a aplicação dos conteúdos dos produtos digitais dependem exclusivamente do empenho e contexto individual de cada utilizador.</p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-serif italic text-[#C8A96E]">7. Lei Aplicável</h2>
                        <p>Os presentes Termos e Condições são regidos pela lei portuguesa. Em caso de litígio, as partes submetem-se à jurisdição dos tribunais portugueses competentes.</p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-serif italic text-[#C8A96E]">8. Contacto</h2>
                        <p>Para qualquer questão relacionada com estes Termos, contacte-nos através de <a href="mailto:ola@sandrasantos.pt" className="text-[#C8A96E] hover:underline">ola@sandrasantos.pt</a>.</p>
                    </section>

                </div>
            </div>
        </main>
    );
}