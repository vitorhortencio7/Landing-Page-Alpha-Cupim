
import React from 'react';
import { Clock } from 'lucide-react';
import { InteractiveHoverButton } from './ui/interactive-hover-button';
import { AnimatedText } from './ui/animated-underline-text-one';

const CTA: React.FC = () => {
  const WHATSAPP_LINK = "https://api.whatsapp.com/send?phone=5588999010860&text=Olá, gostaria de começar meu orçamento gratuito";
  const WHATSAPP_ICON = "https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg";

  return (
    <section className="py-24 px-5 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full mesh-bg opacity-30 pointer-events-none"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="bg-[#0a192f] rounded-[3.5rem] p-10 lg:p-16 text-center text-white shadow-2xl border border-white/5 relative overflow-hidden reveal">
          
          <div className="absolute top-[-10%] right-[-10%] w-64 h-64 bg-blue-600/10 rounded-full blur-[80px]"></div>

          <div className="relative z-10">
            {/* Tag superior ajustada para ser mais sutil e compacta, igual ao Hero */}
            <div className="inline-flex items-center gap-2 bg-blue-500/10 backdrop-blur-xl border border-white/10 px-3 py-1.5 md:px-4 md:py-2 rounded-full mb-8 shadow-lg">
              <Clock className="w-3 h-3 md:w-3.5 md:h-3.5 text-blue-400 shrink-0" />
              <span className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.1em] md:tracking-[0.2em] text-blue-200 whitespace-nowrap">
                Suporte Técnico Local no Cariri
              </span>
            </div>
            
            <div className="mb-8">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black leading-[1.1] tracking-tighter mb-2">
                A segurança que
              </h2>
              <AnimatedText 
                text="seu imóvel merece."
                className="items-center"
                textClassName="text-4xl md:text-5xl lg:text-6xl font-black italic text-blue-400 tracking-tighter leading-[1.1]"
                underlineClassName="text-blue-500/40"
                underlineDuration={2}
              />
            </div>
            
            <p className="text-base lg:text-lg text-blue-100/60 font-medium mb-10 max-w-xl mx-auto leading-relaxed">
              Receba seu <span className="text-white font-black underline underline-offset-4 decoration-blue-500/50">orçamento técnico de qualidade</span> agora mesmo. A resposta mais rápida da região.
            </p>
            
            <div className="flex flex-col items-center gap-6">
              <InteractiveHoverButton 
                text="AGENDAR VISITA AGORA"
                href={WHATSAPP_LINK}
                className="w-fit"
                icon={<img src={WHATSAPP_ICON} alt="WhatsApp" className="w-5 h-5" />}
              />
              
              <div className="flex flex-wrap justify-center items-center gap-6 opacity-30 text-[9px] font-black uppercase tracking-[0.2em] mt-2">
                <div className="flex items-center gap-2">
                   <div className="w-1.5 h-1.5 bg-green-400 rounded-full"></div>
                   <span>Técnicos em Rota Hoje</span>
                </div>
                <div className="flex items-center gap-2">
                   <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                   <span>Qualidade Garantida</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
