export default function Privacidade() {
  return (
    <main className="pt-32 pb-20 bg-[#1C1C1E] min-h-screen">
      <div className="max-w-4xl mx-auto px-6 md:px-12 text-[#F2EDE4]">
        
        <div className="mb-16">
          <p className="text-[#C8A96E] text-xs uppercase tracking-[0.4em] font-bold mb-4">Legal</p>
          <h1 className="text-4xl md:text-6xl font-serif italic text-[#F2EDE4] mb-6">Política de Privacidade</h1>
          <p className="text-[#F2EDE4]/50 text-sm">Última atualização: Abril 2026</p>
        </div>

        <div className="space-y-12 text-[#F2EDE4]/80 leading-relaxed">

          <section className="space-y-4">
            <h2 className="text-2xl font-serif italic text-[#C8A96E]">1. Responsável pelo Tratamento</h2>
            <p>Sandra Santos, NIF 226021980, com sede em Palmela, Setúbal, Portugal.</p>
            <p>Email de contacto: <a href="mailto:ola@sandrasantos.pt" className="text-[#C8A96E] hover:underline">ola@sandrasantos.pt</a></p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-serif italic text-[#C8A96E]">2. Dados Recolhidos</h2>
            <p>Recolhemos os seguintes dados pessoais:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Formulário de contacto:</strong> nome, endereço de email, serviço de interesse e mensagem.</li>
              <li><strong>Dados de navegação:</strong> endereço IP, tipo de browser, páginas visitadas e tempo de permanência, recolhidos através de cookies e ferramentas de análise.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-serif italic text-[#C8A96E]">3. Finalidade do Tratamento</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Responder a pedidos de contacto e propostas de colaboração.</li>
              <li>Analisar o desempenho do website e melhorar a experiência do utilizador.</li>
              <li>Apresentar publicidade relevante através do Google Ads e Meta Ads, mediante consentimento.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-serif italic text-[#C8A96E]">4. Base Legal</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Formulário de contacto:</strong> execução de diligências pré-contratuais (art. 6.º, n.º 1, al. b) do RGPD).</li>
              <li><strong>Cookies de análise e publicidade:</strong> consentimento do utilizador (art. 6.º, n.º 1, al. a) do RGPD).</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-serif italic text-[#C8A96E]">5. Partilha de Dados</h2>
            <p>Os seus dados podem ser partilhados com os seguintes prestadores de serviços, no âmbito do tratamento:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Google LLC</strong> — Google Analytics, Google Ads e Google Tag Manager (análise e publicidade).</li>
              <li><strong>Meta Platforms, Inc.</strong> — Meta Pixel (publicidade e análise).</li>
              <li><strong>Resend Inc.</strong> — envio de emails transacionais.</li>
              <li><strong>Vercel Inc.</strong> — alojamento do website.</li>
            </ul>
            <p>Não vendemos, arrendamos ou cedemos os seus dados pessoais a terceiros para fins comerciais.</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-serif italic text-[#C8A96E]">6. Conservação dos Dados</h2>
            <p>Os dados recolhidos através do formulário de contacto são conservados pelo período necessário para responder ao pedido e, no máximo, por 2 anos. Os dados de navegação recolhidos por cookies são conservados de acordo com as políticas de cada plataforma.</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-serif italic text-[#C8A96E]">7. Direitos do Utilizador</h2>
            <p>Nos termos do RGPD, tem os seguintes direitos:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Acesso</strong> — conhecer os dados que tratamos sobre si.</li>
              <li><strong>Retificação</strong> — corrigir dados incorretos ou incompletos.</li>
              <li><strong>Apagamento</strong> — solicitar a eliminação dos seus dados.</li>
              <li><strong>Limitação</strong> — restringir o tratamento em determinadas circunstâncias.</li>
              <li><strong>Portabilidade</strong> — receber os seus dados num formato estruturado.</li>
              <li><strong>Oposição</strong> — opor-se ao tratamento dos seus dados.</li>
              <li><strong>Retirada do consentimento</strong> — retirar o consentimento a qualquer momento.</li>
            </ul>
            <p>Para exercer qualquer destes direitos, contacte-nos através de <a href="mailto:ola@sandrasantos.pt" className="text-[#C8A96E] hover:underline">ola@sandrasantos.pt</a>.</p>
            <p>Tem ainda o direito de apresentar reclamação à autoridade de controlo competente — a <strong>CNPD</strong> (Comissão Nacional de Proteção de Dados), em <a href="https://www.cnpd.pt" target="_blank" rel="noopener noreferrer" className="text-[#C8A96E] hover:underline">www.cnpd.pt</a>.</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-serif italic text-[#C8A96E]">8. Segurança</h2>
            <p>Implementamos medidas técnicas e organizativas adequadas para proteger os seus dados pessoais contra acesso não autorizado, perda ou destruição, incluindo transmissão segura via HTTPS.</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-serif italic text-[#C8A96E]">9. Alterações a esta Política</h2>
            <p>Reservamo-nos o direito de atualizar esta política sempre que necessário. A data da última atualização é indicada no topo desta página. Recomendamos que a consulte periodicamente.</p>
          </section>

        </div>
      </div>
    </main>
  );
}