
import React, { useState, useEffect } from 'react';
import { MessageCircle, Search, ShieldCheck, ClipboardCheck, ArrowDown } from 'lucide-react';
import { motion } from 'framer-motion';
import { InteractiveHoverButton } from './ui/interactive-hover-button';

const Step: React.FC<{ number: string; title: string; desc: string; icon: React.ReactNode; isLast?: boolean; index: number; isMobile: boolean }> = ({ number, title, desc, icon, isLast, index, isMobile }) => (
  <motion.div 
    initial={isMobile ? false : { opacity: 0, y: 30 }}
    whileInView={isMobile ? false : { opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.7, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
    className="flex flex-col lg:items-center text-center flex-1 relative px-4 group"
  >
    {!isLast && (
      <div className="hidden lg:block absolute top-[40px] left-[calc(50%+40px)] right-[-50%] h-[2px] bg-blue-100 z-0 transition-all duration-700 group-hover:bg-blue-500/30"></div>
    )}
    
    <div className="shrink-0 mb-6 relative z-10 mx-auto lg:mx-0">
      <div className="w-20 h-20 bg-white rounded-3xl flex items-center justify-center text-blue-900 relative shadow-xl shadow-blue-900/5 border border-blue-50 group-hover:bg-blue-900 group-hover:text-white transition-all duration-500 group-hover:-translate-y-2">
        {icon}
        <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-[12px] font-black w-7 h-7 rounded-full flex items-center justify-center border-4 border-white shadow-md">
          {number}
        </span>
      </div>
    </div>
    
    <div className="lg:max-w-[200px]">
      <h4 className="font-black text-blue-950 text-xl mb-3 leading-tight tracking-tight group-hover:text-blue-600 transition-colors">{title}</h4>
      <p className="text-sm text-slate-500 font-medium leading-relaxed">{desc}</p>
    </div>
  </motion.div>
);

const HowItWorks: React.FC = () => {
  const WHATSAPP_LINK = "https://api.whatsapp.com/send?phone=5588999010860&text=Olá, gostaria de começar meu orçamento gratuito";
  const WHATSAPP_ICON = "https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg";
  
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 1023);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const stepsData = [
    { n: "1", t: "Chama no WhatsApp", d: "Diga qual o seu problema e receba um orçamento prévio.", i: <MessageCircle className="w-8 h-8"/> },
    { n: "2", t: "Agendamos Visita", d: "Técnico vai ao local fazer a inspeção gratuita.", i: <Search className="w-8 h-8"/> },
    { n: "3", t: "Executamos o Serviço", d: "Aplicação profissional com produtos certificados.", i: <ShieldCheck className="w-8 h-8"/> },
    { n: "4", t: "Certificado Emitido", d: "Você recebe a garantia por escrito na hora.", i: <ClipboardCheck className="w-8 h-8"/> }
  ];

  return (
    <section className="py-24 px-5 bg-blue-50/50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16 reveal">
          <span className="text-blue-600 text-xs font-black uppercase tracking-[0.4em] mb-4 block">Processo Rápido</span>
          <h2 className="text-4xl lg:text-5xl font-black text-blue-950 mb-4 tracking-tighter">Como resolvemos seu problema:</h2>
          <p className="text-slate-500 max-w-lg mx-auto font-medium leading-relaxed">Em 4 passos simples você fica livre de pragas com total segurança e garantia Alpha.</p>
        </div>

        {/* Mobile View: Vertical List */}
        <div className="lg:hidden flex flex-col gap-4 reveal-stagger">
           {stepsData.map((s, idx) => (
             <React.Fragment key={idx}>
               <div className="bg-white rounded-[2rem] p-6 shadow-xl shadow-blue-900/5 border border-blue-50 flex items-center gap-5">
                  <div className="w-16 h-16 bg-blue-50 text-blue-900 rounded-2xl flex items-center justify-center shrink-0 relative">
                     {React.cloneElement(s.i as React.ReactElement<any>, { className: "w-7 h-7" })}
                     <span className="absolute -top-1 -right-1 bg-orange-500 text-white text-[9px] w-6 h-6 rounded-full flex items-center justify-center border-2 border-white shadow-sm font-black">
                       {s.n}
                     </span>
                  </div>
                  <div>
                    <h4 className="font-black text-blue-950 text-base leading-tight">{s.t}</h4>
                    <p className="text-xs text-slate-500 mt-1 leading-snug font-medium">{s.d}</p>
                  </div>
               </div>
               
               {idx < stepsData.length - 1 && (
                 <div className="flex justify-center -my-2 opacity-30">
                    <ArrowDown className="w-5 h-5 text-blue-400" />
                 </div>
               )}
             </React.Fragment>
           ))}
        </div>

        {/* Desktop View: Horizontal Timeline */}
        <div className="hidden lg:flex justify-between items-start gap-0 relative">
          {stepsData.map((step, index) => (
            <Step 
              key={index}
              index={index} 
              number={step.n} 
              title={step.t} 
              desc={step.d} 
              icon={React.cloneElement(step.i as React.ReactElement<any>, { className: "w-10 h-10" })} 
              isLast={index === stepsData.length - 1}
              isMobile={isMobile}
            />
          ))}
        </div>

        <div className="mt-16 flex justify-center reveal">
          <InteractiveHoverButton 
            text="AGENDAR VISITA AGORA"
            href={WHATSAPP_LINK}
            className="w-full sm:w-auto"
            icon={<img src={WHATSAPP_ICON} alt="WhatsApp" className="w-7 h-7" />}
          />
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
