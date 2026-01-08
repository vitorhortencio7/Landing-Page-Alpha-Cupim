
import React from 'react';
import { MessageCircle, Search, ShieldCheck, ClipboardCheck, ArrowDown } from 'lucide-react';
import { motion } from 'framer-motion';
import { InteractiveHoverButton } from './ui/interactive-hover-button';
import { Button as MovingBorderButton } from './ui/moving-border';

const Step: React.FC<{ number: string; title: string; desc: string; icon: React.ReactNode; isLast?: boolean; index: number }> = ({ number, title, desc, icon, isLast, index }) => (
  <motion.div 
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
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

  const mobileSteps = [
    { n: "1", t: "Chama no WhatsApp", d: "Diga qual o seu problema e receba um orçamento prévio.", i: <MessageCircle className="w-8 h-8"/> },
    { n: "2", t: "Agendamos Visita", d: "Técnico vai ao local fazer a inspeção gratuita.", i: <Search className="w-8 h-8"/> },
    { n: "3", t: "Executamos o Serviço", d: "Aplicação profissional com produtos certificados.", i: <ShieldCheck className="w-8 h-8"/> },
    { n: "4", t: "Certificado Emitido", d: "Você recebe a garantia por escrito na hora.", i: <ClipboardCheck className="w-8 h-8"/> }
  ];

  return (
    <section className="py-24 px-5 bg-blue-50/50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20 reveal">
          <span className="text-blue-600 text-xs font-black uppercase tracking-[0.4em] mb-4 block">Processo Rápido</span>
          <h2 className="text-4xl lg:text-5xl font-black text-blue-950 mb-4 tracking-tighter">Como resolvemos seu problema:</h2>
          <p className="text-slate-500 max-w-lg mx-auto font-medium leading-relaxed">Em 4 passos simples você fica livre de pragas com total segurança e garantia Alpha.</p>
        </div>

        {/* Mobile View: Vertical List with perfectly aligned connectors */}
        <div className="lg:hidden max-w-[320px] mx-auto flex flex-col items-stretch">
           {mobileSteps.map((s, idx) => (
             <React.Fragment key={idx}>
               {/* Step Card with Appear Effect */}
               <motion.div 
                 initial={{ opacity: 0, y: 40, scale: 0.95 }}
                 whileInView={{ opacity: 1, y: 0, scale: 1 }}
                 viewport={{ once: true, margin: "-50px" }}
                 transition={{ 
                   duration: 0.8, 
                   delay: 0.05, 
                   ease: [0.16, 1, 0.3, 1] 
                 }}
                 className="relative z-10"
               >
                 <MovingBorderButton
                    borderRadius="2rem"
                    duration={3500}
                    className="w-full bg-white dark:bg-white"
                    containerClassName="w-full shadow-lg"
                    borderClassName="bg-[radial-gradient(var(--blue-500)_40%,transparent_60%)]"
                 >
                   <div className="flex gap-4 items-center p-6 w-full text-left">
                     <div className="w-14 h-14 bg-blue-50 text-blue-900 rounded-2xl flex items-center justify-center font-black shrink-0 relative">
                        {s.i}
                        <span className="absolute -top-1 -right-1 bg-orange-500 text-white text-[8px] w-5 h-5 rounded-full flex items-center justify-center border-2 border-white shadow-sm font-black">
                          {s.n}
                        </span>
                     </div>
                     <div className="flex-1">
                       <h4 className="font-black text-blue-950 text-sm leading-tight">{s.t}</h4>
                       <p className="text-[11px] text-slate-500 mt-1 leading-snug font-medium">{s.d}</p>
                     </div>
                   </div>
                 </MovingBorderButton>
               </motion.div>
               
               {/* Vertical Connector: Guaranteed Centering */}
               {idx < mobileSteps.length - 1 && (
                 <div className="w-full h-16 flex items-center justify-center relative z-0">
                    {/* The Line - Perfectly centered */}
                    <motion.div 
                      initial={{ scaleY: 0, opacity: 0 }}
                      whileInView={{ scaleY: 1, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.3 }}
                      className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-[3px] bg-gradient-to-b from-blue-600/40 via-blue-400/20 to-orange-500/40 rounded-full origin-top"
                    />
                    
                    {/* The Centered Arrow - Perfectly centered */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <motion.div 
                        initial={{ scale: 0, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ 
                          type: "spring", 
                          stiffness: 260, 
                          damping: 20, 
                          delay: 0.7 
                        }}
                        className="bg-white rounded-full p-1.5 border border-blue-100 shadow-md ring-4 ring-blue-50/50"
                      >
                        <ArrowDown className="w-3.5 h-3.5 text-blue-600 stroke-[3px]" />
                      </motion.div>
                    </div>
                 </div>
               )}
             </React.Fragment>
           ))}
        </div>

        {/* Desktop View: Horizontal Timeline */}
        <div className="hidden lg:flex justify-between items-start gap-0 relative">
          {mobileSteps.map((step, index) => (
            <Step 
              key={index}
              index={index} 
              number={step.n} 
              title={step.t} 
              desc={step.d} 
              icon={React.cloneElement(step.i as React.ReactElement<any>, { className: "w-10 h-10" })} 
              isLast={index === mobileSteps.length - 1}
            />
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-20 flex justify-center"
        >
          <InteractiveHoverButton 
            text="AGENDAR VISITA AGORA"
            href={WHATSAPP_LINK}
            className="w-full sm:w-auto"
            icon={<img src={WHATSAPP_ICON} alt="WhatsApp" className="w-7 h-7" />}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;
