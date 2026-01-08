
import React, { useState, useEffect } from 'react';
import { Zap, Star, Users, ClipboardCheck, HardHat } from 'lucide-react';
import { Particles } from './ui/particles';
import { InteractiveHoverButton } from './ui/interactive-hover-button';
import { AnimatedText } from './ui/animated-underline-text-one';

const Hero: React.FC = () => {
  const WHATSAPP_LINK = "https://api.whatsapp.com/send?phone=5588999010860&text=Olá, gostaria de começar meu orçamento gratuito";
  const WHATSAPP_ICON = "https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg";
  
  // URL da nova imagem fornecida pelo usuário
  const HERO_IMAGE = "https://i.ibb.co/Q2r5Smp/9.jpg"; 

  const [activeCard, setActiveCard] = useState(0);
  const featureCards = [
    {
      title: "Profissionalismo Real",
      sub: "Equipe Uniformizada e Capacitada",
      icon: <Zap className="w-8 h-8 text-white" />
    },
    {
      title: "Equipe Especializada",
      sub: "Técnicos Treinados Constantemente",
      icon: <Users className="w-8 h-8 text-white" />
    },
    {
      title: "Orçamento Gratuito",
      sub: "Avaliação Sem Compromisso no Cariri",
      icon: <ClipboardCheck className="w-8 h-8 text-white" />
    },
    {
      title: "Equipamentos de Ponta",
      sub: "Tecnologia Avançada em Dedetização",
      icon: <HardHat className="w-8 h-8 text-white" />
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveCard((prev) => (prev + 1) % featureCards.length);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative bg-[#0a192f] text-white pt-28 pb-16 px-5 lg:pt-40 lg:pb-36 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-0 right-0 w-full h-full pointer-events-none overflow-hidden opacity-50">
        <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-blue-500/20 rounded-full blur-[120px]"></div>
      </div>
      
      {/* Particles Background - Desktop Only */}
      <div className="absolute inset-0 z-0 hidden lg:block overflow-hidden">
         <Particles
          className="absolute inset-0"
          quantity={120}
          ease={100}
          color="#3b82f6"
          refresh
        />
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left reveal-stagger">
            <div className="inline-flex items-center gap-2 bg-blue-500/10 backdrop-blur-xl border border-white/10 px-3 py-1.5 md:px-4 md:py-2 rounded-full mb-6 md:mb-8 shadow-lg">
              <Star className="w-3 h-3 md:w-3.5 md:h-3.5 text-blue-400 fill-current shrink-0" />
              <span className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.1em] md:tracking-[0.2em] text-blue-200 whitespace-nowrap">
                Qualidade Alpha no Cariri • 6 Anos
              </span>
            </div>
            
            <div className="mb-6">
              <h1 className="text-[38px] md:text-5xl lg:text-7xl font-black leading-[1.1] tracking-tight text-white mb-2">
                Pragas no imóvel?
              </h1>
              <AnimatedText 
                text="Nós resolvemos."
                className="items-center lg:items-start"
                textClassName="text-[38px] md:text-5xl lg:text-7xl font-black italic text-blue-400 tracking-tight leading-[1.1]"
                underlineClassName="text-blue-500/40"
                underlineDuration={2}
              />
            </div>
            
            <p className="text-lg md:text-xl text-blue-100/80 mb-8 font-medium leading-relaxed max-w-xl mx-auto lg:mx-0">
              Controle de pragas com <span className="text-white font-bold underline decoration-blue-500/40">equipe especializada</span> e orçamento gratuito. A solução real para sua casa ou empresa.
            </p>

            <div className="lg:hidden mb-10 relative">
              <div className="relative z-10 rounded-[2.5rem] overflow-hidden border-4 border-white/10 shadow-2xl aspect-[4/3]">
                <img 
                  src={HERO_IMAGE} 
                  alt="Equipe Alpha Cupim em ação" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a192f]/80 to-transparent"></div>
                
                {/* Mobile Rotating Card Overlay */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/20 min-h-[80px]">
                   {featureCards.map((card, idx) => (
                     <div 
                       key={idx}
                       className={`transition-all duration-700 absolute inset-x-4 top-4 ${activeCard === idx ? 'opacity-100 translate-y-0 z-20 pointer-events-auto' : 'opacity-0 translate-y-2 z-10 pointer-events-none'}`}
                     >
                       <div className="flex items-center gap-3">
                         <div className="bg-blue-600 p-2 rounded-xl shrink-0 shadow-lg shadow-blue-600/20">
                            {React.cloneElement(card.icon as React.ReactElement<any>, { className: "w-5 h-5 text-white" })}
                         </div>
                         <div className="text-left flex flex-col justify-center overflow-hidden">
                            <h4 className="font-black text-white text-xs leading-tight truncate">{card.title}</h4>
                            <p className="text-blue-100/60 text-[8px] font-bold uppercase tracking-widest mt-0.5 leading-tight">{card.sub}</p>
                         </div>
                       </div>
                     </div>
                   ))}
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-6 justify-center lg:justify-start">
              <InteractiveHoverButton 
                text="AGENDAR VISITA AGORA"
                href={WHATSAPP_LINK}
                className="w-full sm:w-auto"
                icon={<img src={WHATSAPP_ICON} alt="WhatsApp" className="w-6 h-6" />}
              />
              
              <div className="flex items-center gap-3">
                <div className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                </div>
                <span className="text-[10px] font-bold text-blue-400 uppercase tracking-widest whitespace-nowrap">Técnicos em Rota Hoje</span>
              </div>
            </div>
          </div>

          <div className="hidden lg:block relative reveal">
            <div className="relative z-10 rounded-[3.5rem] overflow-hidden border-8 border-white/5 shadow-2xl group transition-transform duration-700 hover:scale-[1.01]">
              <img 
                src={HERO_IMAGE} 
                alt="Técnico Alpha Cupim trabalhando" 
                className="w-full h-auto object-cover min-h-[500px]"
              />
              <div className="absolute inset-0 bg-blue-900/10 group-hover:bg-transparent transition-colors duration-500"></div>
              
              {/* Desktop Rotating Card System */}
              <div className="absolute bottom-10 left-10 right-10">
                <div className="relative h-32 w-full">
                  {featureCards.map((card, idx) => (
                    <div 
                      key={idx}
                      className={`absolute inset-0 bg-[#1e293b]/60 backdrop-blur-2xl p-6 rounded-3xl border border-white/10 flex items-center gap-6 shadow-2xl transition-all duration-1000 ease-out
                        ${activeCard === idx ? 'opacity-100 translate-y-0 scale-100 z-20 pointer-events-auto' : 'opacity-0 translate-y-8 scale-95 z-10 pointer-events-none'}
                      `}
                    >
                      <div className="bg-blue-600 p-4 rounded-2xl shadow-lg shadow-blue-600/30 shrink-0">
                        {card.icon}
                      </div>
                      <div className="flex flex-col justify-center text-left overflow-hidden">
                        <h4 className="font-black text-white text-xl tracking-tight leading-tight">{card.title}</h4>
                        <p className="text-blue-100/60 text-[10px] font-bold uppercase tracking-[0.2em] mt-1 leading-snug">{card.sub}</p>
                      </div>
                      
                      {/* Indicator dots inside the card */}
                      <div className="flex flex-col gap-1.5 ml-auto shrink-0">
                        {featureCards.map((_, dotIdx) => (
                          <div 
                            key={dotIdx} 
                            className={`w-1 h-3 rounded-full transition-all duration-500 ${activeCard === dotIdx ? 'bg-blue-400 h-6' : 'bg-white/20'}`}
                          />
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-400 rounded-full blur-[80px] opacity-20"></div>
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-orange-500 rounded-full blur-[80px] opacity-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
