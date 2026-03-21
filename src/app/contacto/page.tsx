import { Mail, Instagram, Linkedin, Facebook, ArrowRight } from "lucide-react";

export default function Contacto() {
  return (
    <main className="pt-32 pb-20 bg-[#F8F5F2] min-h-screen">
      <div className="max-w-7xl mx-auto px-6 md:px-12 text-[#382622]">
        
        {/* CABEÇALHO */}
        <div className="mb-24">
          <p className="text-[#59310b] text-xs font-bold uppercase tracking-[0.4em] mb-6">Ligação</p>
          <h1 className="text-5xl md:text-8xl font-bold tracking-tighter italic font-serif">
            Vamos <br />
            <span className="text-[#59310b] not-italic font-sans underline decoration-1 underline-offset-8">conversar?</span>
          </h1>
        </div>

        <div className="grid lg:grid-cols-12 gap-20">
          
          {/* COLUNA ESQUERDA: INFOS & REDES */}
          <div className="lg:col-span-5 space-y-12">
            <div>
              <h3 className="text-2xl font-bold mb-6 italic font-serif text-[#59310b]">Onde me encontrar</h3>
              <p className="text-lg text-[#382622]/70 leading-relaxed mb-8">
                Estou disponível para colaborações estratégicas e gestão de projetos digitais que procurem excelência e clareza.
              </p>
              
              <div className="space-y-6">
                <a href="mailto:geral@sandrasantos.pt" className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-full bg-[#382622] flex items-center justify-center text-[#D4A373] group-hover:bg-[#D4A373] group-hover:text-[#382622] transition-all">
                    <Mail size={20} />
                  </div>
                  <span className="font-bold border-b border-transparent group-hover:border-[#59310b] transition-all">ola@sandrasantos.pt</span>
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-bold uppercase tracking-[0.2em] mb-6 opacity-50">Social</h3>
              <div className="flex gap-4">
                {[
                  { icon: <Instagram size={20} />, label: "Instagram", url: "#" },
                  { icon: <Linkedin size={20} />, label: "LinkedIn", url: "#" },
                  { icon: <Facebook size={20} />, label: "Facebook", url: "#" },
                ].map((social, i) => (
                  <a 
                    key={i}
                    href={social.url}
                    className="w-12 h-12 rounded-full border border-[#382622]/10 flex items-center justify-center hover:bg-[#382622] hover:text-[#F8F5F2] transition-all"
                    title={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* COLUNA DIREITA: FORMULÁRIO PRADA */}
          <div className="lg:col-span-7 bg-[#382622] p-8 md:p-16 rounded-[3rem] text-[#F8F5F2] shadow-2xl relative overflow-hidden">
            {/* Detalhe de luz para o nosso castanho iluminado brilhar */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#D4A373]/5 blur-[100px] -mr-32 -mt-32" />
            
            <form className="space-y-8 relative z-10">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase font-bold tracking-widest text-[#D4A373]">Nome</label>
                  <input 
                    type="text" 
                    placeholder="Como se chama?" 
                    className="w-full bg-transparent border-b border-[#F8F5F2]/20 py-3 focus:border-[#D4A373] outline-none transition-colors placeholder:text-[#F8F5F2]/20"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase font-bold tracking-widest text-[#D4A373]">Email</label>
                  <input 
                    type="email" 
                    placeholder="O seu melhor email" 
                    className="w-full bg-transparent border-b border-[#F8F5F2]/20 py-3 focus:border-[#D4A373] outline-none transition-colors placeholder:text-[#F8F5F2]/20"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] uppercase font-bold tracking-widest text-[#D4A373]">Serviço de Interesse</label>
                <select className="w-full bg-transparent border-b border-[#F8F5F2]/20 py-3 focus:border-[#D4A373] outline-none transition-colors text-[#F8F5F2]/60 appearance-none cursor-pointer">
                  <option className="bg-[#382622]">Branding & Social Media</option>
                  <option className="bg-[#382622]">Assistência Virtual</option>
                  <option className="bg-[#382622]">Desenvolvimento Web</option>
                  <option className="bg-[#382622]">Tráfego & Performance</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] uppercase font-bold tracking-widest text-[#D4A373]">Mensagem</label>
                <textarea 
                  rows={4}
                  placeholder="Conte-me um pouco sobre o seu projeto..." 
                  className="w-full bg-transparent border-b border-[#F8F5F2]/20 py-3 focus:border-[#D4A373] outline-none transition-colors placeholder:text-[#F8F5F2]/20 resize-none"
                />
              </div>

              <button className="group flex items-center gap-4 bg-[#D4A373] text-[#382622] px-10 py-5 rounded-2xl font-bold hover:bg-[#F8F5F2] transition-all transform hover:scale-[1.02] active:scale-95 shadow-xl">
                Enviar Mensagem
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </button>
            </form>
          </div>

        </div>
      </div>
    </main>
  );
}