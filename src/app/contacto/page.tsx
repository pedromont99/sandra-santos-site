"use client";
import { useState } from "react";
import { Mail, ArrowRight } from "lucide-react"; 
import { FaInstagram, FaFacebook } from "react-icons/fa";

export default function Contacto() {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    servico: "Branding & Social Media",
    mensagem: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("success");
        setFormData({ nome: "", email: "", servico: "Branding & Social Media", mensagem: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <main className="pt-32 pb-20 bg-[#1C1C1E] min-h-screen">
      <div className="max-w-7xl mx-auto px-6 md:px-12 text-[#F2EDE4]">

        {/* CABEÇALHO */}
        <div className="mb-24">
          <p className="text-[#8C6D3F] text-xs font-bold uppercase tracking-[0.4em] mb-6">Ligação</p>
          <h1 className="text-5xl md:text-8xl font-bold tracking-tighter italic font-serif">
            Vamos <br />
            <span className="text-[#8C6D3F] not-italic font-sans underline decoration-1 underline-offset-8">conversar?</span>
          </h1>
        </div>

        <div className="grid lg:grid-cols-12 gap-20">

          {/* COLUNA ESQUERDA */}
          <div className="lg:col-span-5 space-y-12">
            <div>
              <h3 className="text-2xl font-bold mb-6 italic font-serif text-[#8C6D3F]">Onde me encontrar</h3>
              <p className="text-lg text-[#F2EDE4]/70 leading-relaxed mb-8">
                Estou disponível para colaborações estratégicas e gestão de projetos digitais que procurem excelência e clareza.
              </p>
              <div className="space-y-6">
                <a href="mailto:ola@sandrasantos.pt" className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-full bg-[#F2EDE4] flex items-center justify-center text-[#C8A96E] group-hover:bg-[#C8A96E] group-hover:text-[#F2EDE4] transition-all">
                    <Mail size={20} />
                  </div>
                  <span className="font-bold border-b border-transparent group-hover:border-[#8C6D3F] transition-all">ola@sandrasantos.pt</span>
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-bold uppercase tracking-[0.2em] mb-6 opacity-50">Social</h3>
              <div className="flex gap-4">
                {[
                  { icon: <FaInstagram size={20} />, label: "Instagram", url: "https://instagram.com/sandrasantos.pt/" },
                  { icon: <FaFacebook size={20} />, label: "Facebook", url: "https://facebook.com/sandrasantos.studio" },
                ].map((social, i) => (
                  <a
                    key={i}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full border border-[#F2EDE4]/10 flex items-center justify-center hover:bg-[#F2EDE4] hover:text-[#1C1C1E] transition-all"
                    title={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* FORMULÁRIO */}
          <div className="lg:col-span-7 bg-[#F2EDE4] p-8 md:p-16 rounded-[3rem] text-[#1C1C1E] shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#C8A96E]/5 blur-[100px] -mr-32 -mt-32" />

            {status === "success" ? (
              <div className="relative z-10 flex flex-col items-center justify-center h-full py-20 text-center space-y-6">
                <div className="w-16 h-16 rounded-full bg-[#C8A96E] flex items-center justify-center">
                  <ArrowRight className="w-8 h-8 text-[#F2EDE4]" />
                </div>
                <h3 className="text-2xl font-serif italic text-[#1C1C1E]">Mensagem enviada!</h3>
                <p className="text-[#1C1C1E]/60">Obrigada pelo contacto. Responderei em breve.</p>
                <button
                  onClick={() => setStatus("idle")}
                  className="text-[#C8A96E] font-bold text-sm underline"
                >
                  Enviar outra mensagem
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase font-bold tracking-widest text-[#C8A96E]">Nome</label>
                    <input
                      type="text"
                      placeholder="Como se chama?"
                      required
                      value={formData.nome}
                      onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                      className="w-full bg-transparent border-b border-[#1C1C1E]/20 py-3 focus:border-[#C8A96E] outline-none transition-colors placeholder:text-[#1C1C1E]/20"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase font-bold tracking-widest text-[#C8A96E]">Email</label>
                    <input
                      type="email"
                      placeholder="O seu melhor email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-transparent border-b border-[#1C1C1E]/20 py-3 focus:border-[#C8A96E] outline-none transition-colors placeholder:text-[#1C1C1E]/20"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] uppercase font-bold tracking-widest text-[#C8A96E]">Serviço de Interesse</label>
                  <select
                    value={formData.servico}
                    onChange={(e) => setFormData({ ...formData, servico: e.target.value })}
                    className="w-full bg-transparent border-b border-[#1C1C1E]/20 py-3 focus:border-[#C8A96E] outline-none transition-colors text-[#1C1C1E]/60 appearance-none cursor-pointer"
                  >
                    <option className="bg-[#F2EDE4]">Branding & Social Media</option>
                    <option className="bg-[#F2EDE4]">Assistência Virtual</option>
                    <option className="bg-[#F2EDE4]">Desenvolvimento Web</option>
                    <option className="bg-[#F2EDE4]">Tráfego & Performance</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] uppercase font-bold tracking-widest text-[#C8A96E]">Mensagem</label>
                  <textarea
                    rows={4}
                    placeholder="Conte-me um pouco sobre o seu projeto..."
                    required
                    value={formData.mensagem}
                    onChange={(e) => setFormData({ ...formData, mensagem: e.target.value })}
                    className="w-full bg-transparent border-b border-[#1C1C1E]/20 py-3 focus:border-[#C8A96E] outline-none transition-colors placeholder:text-[#1C1C1E]/20 resize-none"
                  />
                </div>

                {status === "error" && (
                  <p className="text-red-500 text-sm">Erro ao enviar. Tenta novamente.</p>
                )}

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="group flex items-center gap-4 bg-[#C8A96E] text-[#F2EDE4] px-10 py-5 rounded-2xl font-bold hover:bg-[#1C1C1E] transition-all transform hover:scale-[1.02] active:scale-95 shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status === "loading" ? "A enviar..." : "Enviar Mensagem"}
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}