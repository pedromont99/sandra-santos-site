"use client";
import { useState } from "react";
import Link from "next/link";
import { Plus, Minus, ArrowRight, Check } from "lucide-react";

const faqs = [
    {
        q: "Para quem é este guia exatamente?",
        a: "Para assistentes virtuais que estão a começar ou que já têm conta mas publicam sem estratégia. Se sentes que o teu feed não te representa nem atrai clientes, este guia é para ti."
    },
    {
        q: "Como recebo o guia após a compra?",
        a: "Após o pagamento via Gumroad recebes acesso imediato ao PDF. O download fica disponível na tua conta Gumroad e também por email."
    },
    {
        q: "Preciso de ter experiência com IA para usar os prompts?",
        a: "Não. Os prompts estão prontos a copiar e usar — basta adaptares o teu nicho e tom de voz. Explico exatamente como fazê-lo dentro do guia."
    },
    {
        q: "O conteúdo é específico para alguma área de AV?",
        a: "Não — funciona para qualquer área. Gestão de redes sociais, apoio administrativo, gestão financeira, e-commerce. A estratégia e os princípios são universais."
    },
    {
        q: "Funciona se eu já tiver conta há algum tempo?",
        a: "Sim. Se publicares sem estratégia ou sem resultados, este guia ajuda-te a restructurar a conta do zero — mesmo que já exista."
    },
    {
        q: "Há algum suporte incluído?",
        a: "O guia é um produto de estudo autónomo. Não inclui suporte direto, mas o conteúdo é suficientemente detalhado para implementares sozinha."
    },
];

export default function GuiaPage() {
    const [openFaq, setOpenFaq] = useState<number | null>(null);

    return (
        <>
            {/* HEADER STANDALONE */}
            <header className="fixed top-0 left-0 w-full z-50 bg-[#1C1C1E]/90 backdrop-blur-xl border-b border-[#C8A96E]/10">
                <div className="max-w-7xl mx-auto px-6 md:px-12 h-16 flex items-center justify-between">
                    <Link href="/" className="text-lg font-bold text-[#F2EDE4]">
                        SandraSantos<span className="text-[#C8A96E] italic font-serif">.pt</span>
                    </Link>

                    <a
                    href="https://gumroad.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#C8A96E] text-[#1C1C1E] px-6 py-2.5 rounded-lg text-xs font-bold uppercase tracking-widest hover:bg-[#8C6D3F] hover:text-[#F2EDE4] transition-all"
          >
                    Quero o Guia — 27€
                </a>
            </div>
        </header >

            <main className="pt-16">

                {/* 1. HERO */}
                <section className="min-h-screen flex items-center py-32 px-6 md:px-12 bg-[#1C1C1E] relative overflow-hidden">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-gradient-to-b from-[#C8A96E]/5 to-transparent blur-[120px] pointer-events-none" />
                    <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-16 items-center relative z-10">
                        <div className="space-y-8">
                            <p className="text-[#C8A96E] text-xs uppercase tracking-[0.4em] font-bold">Guia de Conteúdo para AVs</p>
                            <h1 className="text-6xl md:text-8xl font-serif text-[#F2EDE4] leading-[1.05]">
                                Do Zero<br />ao <span className="italic text-[#C8A96E]">Feed.</span>
                            </h1>
                            <p className="text-xl text-[#F2EDE4]/70 leading-relaxed max-w-md">
                                Para de olhar para o ecrã em branco. Em 30 dias tens uma conta profissional que atrai os clientes certos.
                            </p>
                            <div className="flex items-end gap-4">
                                <span className="text-6xl font-serif text-[#C8A96E]">27€</span>
                                <div className="text-sm text-[#F2EDE4]/50 pb-2 space-y-1">
                                    <p>Acesso imediato</p>
                                    <p>PDF completo</p>
                                    <p>+ bónus incluídos</p>
                                </div>
                            </div>
                            <div className="space-y-3">
                                <a
                                href="https://gumroad.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block w-full md:w-auto text-center md:inline-block bg-[#C8A96E] text-[#1C1C1E] px-12 py-5 rounded-xl font-bold uppercase tracking-widest text-sm hover:bg-[#8C6D3F] hover:text-[#F2EDE4] transition-all shadow-xl"
                >
                                Quero o Guia Agora
                            </a>
                            <p className="text-[#F2EDE4]/30 text-xs text-center md:text-left">✦ Download imediato após pagamento seguro</p>
                        </div>
                    </div>
                    <div className="bg-[#2E2E30] border border-[#C8A96E]/20 rounded-[2rem] p-10 space-y-6">
                        <p className="text-[#C8A96E] text-[10px] uppercase tracking-[0.4em] font-bold">O que está dentro</p>
                        <h2 className="text-3xl font-serif text-[#F2EDE4]">Do Zero ao Feed</h2>
                        <p className="text-[#F2EDE4]/50 text-sm italic">Guia de Conteúdo para Assistentes Virtuais</p>
                        <ul className="space-y-4">
                            {[
                                "5 Partes + Bónus — estrutura completa",
                                "Calendário dos primeiros 30 dias pronto",
                                "10 ganchos prontos a adaptar",
                                "10 prompts Claude para nunca ficares sem ideias",
                                "Checklist da conta profissional — 20 pontos",
                                "Fórmula do caption que para o scroll",
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-[#F2EDE4]/80 text-sm">
                                    <span className="text-[#C8A96E]">✦</span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                        <div className="flex items-center justify-between pt-4 border-t border-[#F2EDE4]/5">
                            <span className="text-3xl font-serif text-[#C8A96E]">27€</span>
                            <span className="text-xs text-[#F2EDE4]/40 uppercase tracking-widest">PDF Digital</span>
                        </div>
                    </div>
                </div>
            </section>

    {/* 2. RECONHECES-TE? */ }
    <section className="py-24 px-6 md:px-12 bg-[#232323]">
        <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
                <p className="text-[#C8A96E] text-xs uppercase tracking-[0.4em] font-bold mb-4">Reconheces-te?</p>
                <div className="w-12 h-[1px] bg-[#C8A96E]/40 mx-auto" />
            </div>
            <div className="grid md:grid-cols-3 gap-6">
                {[
                    { n: "01", title: "Criaste a conta e ficaste parada.", desc: "Sabes que precisas de publicar, mas não sabes o quê. O ecrã em branco aparece todos os dias." },
                    { n: "02", title: "Publicas mas nenhum cliente aparece.", desc: "O feed existe, os posts saem — mas as mensagens não chegam. Algo está errado e não percebes o quê." },
                    { n: "03", title: "Ficas a olhar para contas de outras AVs.", desc: "Copias o que vês, publicas sem convicção e não te sentes representada pelo que tens no feed." },
                ].map((item) => (
                    <div key={item.n} className="bg-[#1C1C1E] p-10 rounded-[1.5rem] border border-[#F2EDE4]/5">
                        <span className="text-5xl font-serif text-[#F2EDE4]/10 block mb-6">{item.n}</span>
                        <p className="text-[#F2EDE4] font-bold text-lg mb-3">{item.title}</p>
                        <p className="text-[#F2EDE4]/60 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                ))}
            </div>
        </div>
    </section>

    {/* 3. ESTE GUIA É PARA TI SE */ }
    <section className="py-24 px-6 md:px-12 bg-[#1C1C1E]">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-start">
            <div className="space-y-6">
                <p className="text-[#C8A96E] text-xs uppercase tracking-[0.4em] font-bold">Este guia é para ti se...</p>
                <div className="w-12 h-[1px] bg-[#C8A96E]/40" />
                {[
                    { title: "Acabaste de criar a conta como AV", sub: "e não sabes por onde começar a publicar" },
                    { title: "Já tens conta mas publicas no vazio", sub: "sem estratégia, sem consistência, sem resultados" },
                    { title: "Queres atrair clientes pelas redes", sub: "mas não sabes como transformar posts em contactos reais" },
                    { title: "Passas tempo a criar conteúdo", sub: "mas não tens sistema — e isso esgota-te" },
                    { title: "Queres usar IA para facilitar", sub: "mas não sabes como fazê-la soar como tu" },
                ].map((item, i) => (
                    <div key={i} className="border-b border-[#F2EDE4]/5 pb-6">
                        <p className="text-[#F2EDE4] font-bold text-lg flex items-center gap-3">
                            <span className="text-[#C8A96E]">✦</span>
                            {item.title}
                        </p>
                        <p className="text-[#F2EDE4]/40 text-sm mt-1 pl-6">{item.sub}</p>
                    </div>
                ))}
            </div>
            <div className="bg-[#2E2E30] border-l-2 border-[#C8A96E] p-10 rounded-[1.5rem] space-y-6">
                <blockquote className="text-2xl md:text-3xl font-serif italic text-[#F2EDE4]/90 leading-snug">
                    "A maioria das AVs desiste nos primeiros 30 dias — não por falta de talento, mas por falta de direção."
                </blockquote>
                <p className="text-[#C8A96E] text-xs uppercase tracking-widest">Sandra Santos · sandrasantos.pt</p>
                <p className="text-[#F2EDE4]/60 text-sm leading-relaxed">
                    Este guia existe para que tu não sejas mais uma estatística. É a estrutura que eu própria uso — e que agora coloquei num formato que qualquer AV consegue implementar, mesmo que esteja a começar do zero.
                </p>
            </div>
        </div>
    </section>

    {/* 4. O QUE ESTÁ DENTRO — 5 PARTES */ }
    <section className="py-24 px-6 md:px-12 bg-[#232323]">
        <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
                <p className="text-[#C8A96E] text-xs uppercase tracking-[0.4em] font-bold mb-6">O que está dentro</p>
                <h2 className="text-5xl md:text-7xl font-serif text-[#F2EDE4]">
                    5 partes.<br />
                    <span className="italic text-[#C8A96E]">Tudo o que precisas.</span>
                </h2>
                <div className="w-12 h-[1px] bg-[#C8A96E]/40 mx-auto mt-8" />
            </div>
            <div className="grid md:grid-cols-2 gap-6">
                {[
                    { n: "1", label: "Parte 1", title: "Antes de Publicar", items: ["Define o teu nicho dentro das AVs", "Bio em 3 linhas que converte", "Tom de voz: profissional sem seres fria", "Biolink — o teu cartão de visita digital"] },
                    { n: "2", label: "Parte 2", title: "Os 5 Tipos de Conteúdo", items: ["Conteúdo de Autoridade — mostras que sabes", "Conteúdo de Confiança — mostras quem és", "Conteúdo de Prova Social — mostras resultados", "Conteúdo de Oferta — vendes sem pressão", "Conteúdo de Bastidores — aproximas e humanizas"] },
                    { n: "3", label: "Parte 3", title: "Calendário dos Primeiros 30 Dias", items: ["Semana 1: Apresentação e posicionamento", "Semana 2: Educação e autoridade", "Semana 3: Prova social e aproximação", "Semana 4: Oferta e conversão", "Tabela calendário pronta a preencher"] },
                    { n: "4", label: "Parte 4", title: "Captions com Estrutura", items: ["A fórmula do caption que para o scroll", "10 ganchos prontos a adaptar à tua área", "Erros que afastam clientes (e como evitá-los)"] },
                ].map((parte) => (
                    <div key={parte.n} className="bg-[#1C1C1E] p-10 rounded-[1.5rem] border border-[#F2EDE4]/5 relative overflow-hidden">
                        <span className="absolute top-4 right-6 text-8xl font-serif text-[#F2EDE4]/5">{parte.n}</span>
                        <p className="text-[#C8A96E] text-[10px] uppercase tracking-widest mb-4">{parte.label}</p>
                        <h3 className="text-2xl font-bold text-[#F2EDE4] mb-6">{parte.title}</h3>
                        <ul className="space-y-3">
                            {parte.items.map((item, i) => (
                                <li key={i} className="flex items-start gap-3 text-[#F2EDE4]/70 text-sm">
                                    <ArrowRight className="w-4 h-4 text-[#C8A96E] shrink-0 mt-0.5" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
            <div className="mt-6 bg-[#1C1C1E] p-10 rounded-[1.5rem] border border-[#F2EDE4]/5 relative overflow-hidden">
                <span className="absolute top-4 right-6 text-8xl font-serif text-[#F2EDE4]/5">5</span>
                <p className="text-[#C8A96E] text-[10px] uppercase tracking-widest mb-4">Parte 5</p>
                <h3 className="text-2xl font-bold text-[#F2EDE4] mb-6">IA como Tua Assistente de Conteúdo</h3>
                <div className="grid md:grid-cols-2 gap-4">
                    {[
                        "Como usar o Claude para gerar ideias em 5 minutos",
                        "Como dar contexto à IA para soar como tu",
                        "10 prompts prontos a usar — copia e adapta",
                        "Como ajustar o resultado ao teu tom de voz",
                    ].map((item, i) => (
                        <div key={i} className="flex items-start gap-3 text-[#F2EDE4]/70 text-sm">
                            <ArrowRight className="w-4 h-4 text-[#C8A96E] shrink-0 mt-0.5" />
                            {item}
                        </div>
                    ))}
                </div>
            </div>
            <div className="mt-6 bg-[#2E2E30] border border-[#C8A96E]/20 p-10 rounded-[1.5rem] flex flex-col md:flex-row items-start md:items-center gap-8">
                <span className="text-7xl font-serif text-[#C8A96E]/30 shrink-0">20</span>
                <div>
                    <p className="text-[#C8A96E] text-[10px] uppercase tracking-widest mb-2">Bónus incluído</p>
                    <h3 className="text-2xl font-bold text-[#F2EDE4] mb-3">Checklist da Conta Profissional</h3>
                    <p className="text-[#F2EDE4]/60 text-sm leading-relaxed">
                        20 pontos a verificar antes de começares a publicar. Perfil, conteúdo e estratégia — tudo o que uma conta profissional precisa de ter configurado para converter desde o primeiro dia.
                    </p>
                </div>
            </div>
        </div>
    </section>

    {/* 5. ANTES E DEPOIS */ }
    <section className="py-24 px-6 md:px-12 bg-[#1C1C1E]">
        <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
                <p className="text-[#C8A96E] text-xs uppercase tracking-[0.4em] font-bold mb-4">A Transformação</p>
                <h2 className="text-5xl md:text-6xl font-serif text-[#F2EDE4]">
                    Antes e <span className="italic text-[#C8A96E]">depois.</span>
                </h2>
                <div className="w-12 h-[1px] bg-[#C8A96E]/40 mx-auto mt-6" />
            </div>
            <div className="grid md:grid-cols-2 rounded-[2rem] overflow-hidden border border-[#F2EDE4]/5">
                <div className="bg-[#2E2E30] p-10">
                    <p className="text-[#F2EDE4]/30 text-[10px] uppercase tracking-widest mb-8">Antes do Guia</p>
                    {["Ecrã em branco todas as semanas", "Publicas sem saber porquê", "Copias o que vês noutras contas", "Bio confusa que não explica o que fazes", "Sem sistema, sem consistência", "Gastas horas sem resultados visíveis", "A IA soa genérica e não é teu"].map((item, i) => (
                        <div key={i} className="py-4 border-b border-[#F2EDE4]/5 text-[#F2EDE4]/50 text-sm">{item}</div>
                    ))}
                </div>
                <div className="bg-[#C8A96E] p-10">
                    <p className="text-[#1C1C1E]/50 text-[10px] uppercase tracking-widest mb-8">Depois do Guia</p>
                    {["30 dias de conteúdo planeado e pronto", "Cada post tem um propósito claro", "Voz própria e posicionamento definido", "Bio que converte em 3 linhas", "Sistema que poupas horas por semana", "Conteúdo que atrai os clientes certos", "IA que soa como tu — sempre"].map((item, i) => (
                        <div key={i} className="py-4 border-b border-[#1C1C1E]/10 text-[#1C1C1E] text-sm font-medium flex items-center gap-3">
                            <Check className="w-4 h-4 shrink-0" />{item}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </section>

    {/* 6. O FEED EM EQUILÍBRIO */ }
    <section className="py-24 px-6 md:px-12 bg-[#232323]">
        <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
                <p className="text-[#C8A96E] text-xs uppercase tracking-[0.4em] font-bold mb-4">A Mistura Certa</p>
                <h2 className="text-5xl md:text-6xl font-serif text-[#F2EDE4]">O teu feed<br /><span className="italic text-[#C8A96E]">em equilíbrio.</span></h2>
                <div className="w-12 h-[1px] bg-[#C8A96E]/40 mx-auto mt-6" />
            </div>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                {[
                    { pct: "40%", label: "Autoridade", desc: "Mostras que percebes do assunto" },
                    { pct: "25%", label: "Confiança", desc: "Mostras quem és por dentro" },
                    { pct: "15%", label: "Prova Social", desc: "Mostras resultados reais" },
                    { pct: "10%", label: "Oferta", desc: "Vendes sem pressão" },
                    { pct: "10%", label: "Bastidores", desc: "Aproximas e humanizas" },
                ].map((item) => (
                    <div key={item.label} className="bg-[#1C1C1E] p-8 rounded-[1.5rem] border border-[#F2EDE4]/5 text-center">
                        <p className="text-4xl font-serif text-[#C8A96E] mb-3">{item.pct}</p>
                        <p className="text-[#F2EDE4] font-bold text-xs uppercase tracking-widest mb-2">{item.label}</p>
                        <p className="text-[#F2EDE4]/50 text-xs leading-relaxed">{item.desc}</p>
                    </div>
                ))}
            </div>
        </div>
    </section>

    {/* 7. FÓRMULA DO CAPTION */ }
    <section className="py-24 px-6 md:px-12 bg-[#1C1C1E]">
        <div className="max-w-7xl mx-auto bg-[#2E2E30] border-l-4 border-[#C8A96E] rounded-[2rem] p-12 md:p-16">
            <h2 className="text-4xl md:text-5xl font-serif text-[#F2EDE4] mb-3">A fórmula do caption</h2>
            <p className="text-3xl md:text-4xl font-serif italic text-[#C8A96E] mb-12">que para o scroll.</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                    { step: "Passo 01", title: "Gancho", desc: "A primeira linha que obriga a clicar em 'ver mais'" },
                    { step: "Passo 02", title: "Problema", desc: "Identifica a dor que o teu público reconhece" },
                    { step: "Passo 03", title: "Valor", desc: "A dica, a história ou a informação útil" },
                    { step: "Passo 04", title: "CTA", desc: "O que queres que a pessoa faça a seguir" },
                ].map((item) => (
                    <div key={item.step} className="bg-[#1C1C1E] p-6 rounded-[1rem] border border-[#F2EDE4]/5">
                        <p className="text-[#C8A96E] text-[10px] uppercase tracking-widest mb-3">{item.step}</p>
                        <h3 className="text-xl font-bold text-[#F2EDE4] mb-3">{item.title}</h3>
                        <p className="text-[#F2EDE4]/50 text-xs leading-relaxed">{item.desc}</p>
                    </div>
                ))}
            </div>
        </div>
    </section>

    {/* 8. OS PRIMEIROS 30 DIAS */ }
    <section className="py-24 px-6 md:px-12 bg-[#232323]">
        <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
                <p className="text-[#C8A96E] text-xs uppercase tracking-[0.4em] font-bold mb-4">Calendário Incluído</p>
                <h2 className="text-5xl md:text-6xl font-serif text-[#F2EDE4]">Os primeiros<br /><span className="italic text-[#C8A96E]">30 dias.</span></h2>
                <div className="w-12 h-[1px] bg-[#C8A96E]/40 mx-auto mt-6" />
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                    { n: "01", label: "Apresentação", items: ["Post de apresentação completo", "Bastidores do espaço de trabalho", "Primeira dica de autoridade", "Enquete ou pergunta ao público", "O que é uma AV — educativo"] },
                    { n: "02", label: "Autoridade", items: ["Lista de tarefas que uma AV faz", "Ferramenta que usas e recomendas", "3 sinais de que precisas de uma AV", "Antes/depois de um processo", "Mito ou verdade sobre AVs"] },
                    { n: "03", label: "Prova Social", items: ["Testemunho de cliente ou resultado", "Um dia de trabalho teu", "A tua história — porque foste AV", "Resposta a dúvidas do público", "Resultado de projeto com números"] },
                    { n: "04", label: "Conversão", items: ["Apresentação dos teus serviços", "FAQ — como trabalhas com clientes", "Disponibilidade de vagas", "CTA para WhatsApp", "Reflexão + agradecimento pelo mês"] },
                ].map((semana) => (
                    <div key={semana.n} className="bg-[#1C1C1E] p-8 rounded-[1.5rem] border border-[#F2EDE4]/5">
                        <span className="text-5xl font-serif text-[#F2EDE4]/10 block mb-2">{semana.n}</span>
                        <p className="text-[#C8A96E] text-[10px] uppercase tracking-widest mb-6">{semana.label}</p>
                        <ul className="space-y-3">
                            {semana.items.map((item, i) => (
                                <li key={i} className="flex items-start gap-2 text-[#F2EDE4]/60 text-xs">
                                    <span className="text-[#C8A96E] mt-0.5">✦</span>{item}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    </section>

    {/* 9. TESTEMUNHOS */ }
    <section className="py-24 px-6 md:px-12 bg-[#1C1C1E]">
        <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
                <p className="text-[#C8A96E] text-xs uppercase tracking-[0.4em] font-bold mb-4">O que dizem</p>
                <h2 className="text-5xl md:text-6xl font-serif text-[#F2EDE4]"><span className="italic text-[#C8A96E]">AVs</span> que já aplicaram.</h2>
                <div className="w-12 h-[1px] bg-[#C8A96E]/40 mx-auto mt-6" />
            </div>
            <div className="grid md:grid-cols-3 gap-6">
                {[
                    { text: "Finalmente percebi o que estava a fazer de errado. Em 2 semanas já tinha uma conta que parecia profissional — e apareceu a primeira cliente.", name: "Mariana F.", role: "AV · Gestão de Redes Sociais", initial: "M" },
                    { text: "Os prompts do Claude foram um game changer. Antes passava horas a pensar no que escrever. Agora tenho o mês planeado numa tarde.", name: "Carla S.", role: "AV · Apoio Administrativo", initial: "C" },
                    { text: "O calendário de 30 dias foi o que precisava. Nunca mais acordei sem saber o que publicar. Simples, prático, funciona mesmo.", name: "Inês R.", role: "AV · Gestão Financeira", initial: "I" },
                ].map((t, i) => (
                    <div key={i} className="bg-[#2E2E30] p-10 rounded-[1.5rem] border border-[#F2EDE4]/5 space-y-8">
                        <div className="flex gap-1">{[...Array(5)].map((_, j) => <span key={j} className="text-[#C8A96E] text-xs">✦</span>)}</div>
                        <p className="text-[#F2EDE4]/80 italic text-sm leading-relaxed">"{t.text}"</p>
                        <div className="flex items-center gap-4">
                            <div className="w-10 h-10 rounded bg-[#C8A96E]/20 border border-[#C8A96E]/40 flex items-center justify-center text-[#C8A96E] font-serif italic font-bold shrink-0">{t.initial}</div>
                            <div>
                                <p className="text-[#F2EDE4] font-bold text-xs">{t.name}</p>
                                <p className="text-[#C8A96E] text-[10px] mt-0.5">{t.role}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>

    {/* 10. CTA FINAL */ }
    <section className="py-24 px-6 md:px-12 bg-[#232323]">
        <div className="max-w-3xl mx-auto text-center space-y-10">
            <p className="text-[#C8A96E] text-xs uppercase tracking-[0.4em] font-bold">Pronta para começar?</p>
            <h2 className="text-5xl md:text-7xl font-serif text-[#F2EDE4]">Do Zero ao <span className="italic text-[#C8A96E]">Feed.</span></h2>
            <p className="text-[#F2EDE4]/60 text-lg">O guia que transforma o ecrã em branco numa conta profissional que atrai clientes — em 30 dias.</p>
            <div className="text-6xl font-serif text-[#C8A96E]">27€</div>
            <p className="text-[#F2EDE4]/30 text-xs">Acesso imediato · PDF digital</p>
            <div className="bg-[#1C1C1E] border border-[#F2EDE4]/5 rounded-2xl p-8 text-left space-y-4 max-w-md mx-auto">
                {["5 Partes completas — do perfil ao calendário", "Calendário dos primeiros 30 dias pronto a usar", "10 ganchos prontos a adaptar ao teu nicho", "10 prompts Claude que podes usar hoje", "Fórmula do caption que para o scroll", "Bónus: Checklist da Conta Profissional (20 pontos)"].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 text-[#F2EDE4]/70 text-sm border-b border-[#F2EDE4]/5 pb-4">
                        <span className="text-[#C8A96E]">✦</span>{item}
                    </div>
                ))}
            </div>

            <a
            href="https://gumroad.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block w-full max-w-sm bg-[#C8A96E] text-[#1C1C1E] px-12 py-5 rounded-xl font-bold uppercase tracking-widest text-sm hover:bg-[#8C6D3F] hover:text-[#F2EDE4] transition-all shadow-xl"
            >
            Quero o Guia — 27€
            </a>
        <p className="text-[#F2EDE4]/30 text-xs">Download imediato após pagamento · Pagamento seguro via Gumroad</p>
    </div>
        </section >

        {/* 11. SOBRE A SANDRA */ }
        < section className = "py-24 px-6 md:px-12 bg-[#1C1C1E] border-t border-[#F2EDE4]/5" >
            <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-12">
                <div className="w-32 h-32 rounded-xl bg-[#2E2E30] border border-[#C8A96E]/30 flex items-center justify-center shrink-0">
                    <span className="text-3xl font-serif italic text-[#C8A96E]">SS</span>
                </div>
                <div className="space-y-4 text-center md:text-left">
                    <h3 className="text-2xl font-bold text-[#F2EDE4]">Sandra Santos</h3>
                    <p className="text-[#C8A96E] text-xs uppercase tracking-widest">Consultora Digital · sandrasantos.pt</p>
                    <p className="text-[#F2EDE4]/60 text-sm leading-relaxed">
                        Gestora de redes sociais, website e tráfego pago com mais de 12 anos de experiência em formação e recursos humanos. Uso IA todos os dias no meu trabalho — e ensino outras profissionais a fazer o mesmo.
                    </p>
                    <p className="text-[#F2EDE4]/60 text-sm leading-relaxed">
                        Criei este guia porque vi demasiadas AVs desistir por falta de direção, não por falta de talento. Aqui está tudo o que eu própria uso — estruturado de forma que qualquer AV consegue implementar, mesmo que esteja a começar do zero.
                    </p>
                </div>
            </div>
        </section >

        {/* 12. FAQ */ }
        < section className = "py-24 px-6 md:px-12 bg-[#232323]" >
            <div className="max-w-3xl mx-auto">
                <div className="text-center mb-16">
                    <p className="text-[#C8A96E] text-xs uppercase tracking-[0.4em] font-bold mb-4">Perguntas Frequentes</p>
                    <div className="w-12 h-[1px] bg-[#C8A96E]/40 mx-auto" />
                </div>
                <div className="space-y-0">
                    {faqs.map((faq, i) => (
                        <div key={i} className="border-b border-[#F2EDE4]/5">
                            <button
                                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                                className="w-full flex items-center justify-between py-6 text-left gap-4"
                            >
                                <span className="text-[#F2EDE4] font-medium text-sm md:text-base">{faq.q}</span>
                                {openFaq === i ? <Minus className="w-5 h-5 text-[#C8A96E] shrink-0" /> : <Plus className="w-5 h-5 text-[#C8A96E] shrink-0" />}
                            </button>
                            {openFaq === i && (
                                <p className="pb-6 text-[#F2EDE4]/60 text-sm leading-relaxed">{faq.a}</p>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section >

      </main >

        {/* FOOTER MÍNIMO */ }
        < footer className = "bg-[#1C1C1E] border-t border-[#F2EDE4]/5 py-8 px-6" >
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
                <p className="text-[#F2EDE4]/30 text-xs">© {new Date().getFullYear()} Sandra Santos. Todos os direitos reservados.</p>
                <Link href="/" className="text-[#F2EDE4]/40 text-xs hover:text-[#C8A96E] transition-colors">
                    ← Voltar ao site
                </Link>
            </div>
      </footer >
    </>
  );
}