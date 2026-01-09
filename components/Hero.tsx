
import React, { useState, useEffect } from 'react';
import { Zap, Star, Users, ClipboardCheck, HardHat } from 'lucide-react';
import { Particles } from './ui/particles.tsx';
import { InteractiveHoverButton } from './ui/interactive-hover-button.tsx';
import { AnimatedText } from './ui/animated-underline-text-one.tsx';
import { AuroraBackground } from './ui/aurora-background.tsx';

const Hero: React.FC = () => {
  const WHATSAPP_LINK = "https://api.whatsapp.com/send?phone=5588999010860&text=Olá, gostaria de começar meu orçamento gratuito";
  const WHATSAPP_ICON = "https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg";
  const HERO_IMAGE = "https://i.ibb.co/Q2r5Smp/9.jpg"; 

  const [activeCard, setActiveCard] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const featureCards = [
    { title: "Profissionalismo Real", sub: "Equipe Uniformizada e Capacitada", icon: <Zap className="w-8 h-8 text-white" /> },
    { title: "Equipe Especializada", sub: "Técnicos Treinados Constantemente", icon: <Users className="w-8 h-8 text-white" /> },
    { title: "Orçamento Gratuito", sub: "Avaliação Sem Compromisso", icon: <ClipboardCheck className="w-8 h-8 text-white" /> },
    { title: "Tecnologia Alpha", sub: "Equipamentos de Última Geração", icon: <HardHat className="w-8 h-8 text-white" /> }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveCard((prev) => (prev + 1) % featureCards.length);
    }, 4000);

    const checkMobile = () => setIsMobile(window.innerWidth <= 1023);
    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => {
      clearInterval(timer);
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  const HeroContent = (
    <div className="max-w-7xl mx-auto relative z-10 w-full">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div className="text-center lg:text-left reveal-stagger">
          <div className="inline-flex items-center gap-2 bg-blue-500/10 backdrop-blur-xl border border-white/10 px-4 py-2 rounded-full mb-8">
            <Star className="w-3.5 h-3.5 text-blue-400 fill-current" />
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-200">
              Qualidade Alpha • 6 Anos de Cariri
            </span>
          </div>
          
          <h1 className="text-[38px] md:text-6xl lg:text-7xl font-black leading-[1.05] tracking-tighter mb-4 text-white">
            Dedetização em <br/>Juazeiro do Norte
          </h1>
          <AnimatedText 
            text="Nós resolvemos." 
            className="items-center lg:items-start mb-8"
            textClassName="text-[38px] md:text-6xl lg:text-7xl font-black italic text-blue-400 tracking-tighter leading-[1.05]"
            underlineClassName="text-blue-500/30"
          />
          
          <p className="text-lg lg:text-xl text-blue-100/70 mb-10 font-medium leading-relaxed max-w-xl mx-auto lg:mx-0">
            Controle de pragas com <span className="text-white font-bold border-b border-blue-500/50">equipe certificada</span> e garantia Alpha. Visita gratuita para sua residência ou empresa.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-6 justify-center lg:justify-start">
            <InteractiveHoverButton text="AGENDAR VISITA AGORA" href={WHATSAPP_LINK} className="w-full sm:w-auto" icon={<img src={WHATSAPP_ICON} alt="WA" className="w-6 h-6" />} />
            <div className="flex items-center gap-3">
              <span className="flex h-3 w-3 relative"><span className="animate-ping absolute h-full w-full rounded-full bg-green-400 opacity-75"></span><span className="relative h-3 w-3 rounded-full bg-green-500"></span></span>
              <span className="text-[10px] font-bold text-blue-300 uppercase tracking-widest">Técnicos Ativos no Cariri</span>
            </div>
          </div>
        </div>

        <div className="relative reveal mt-12 lg:mt-0">
          <div className="relative rounded-[3rem] lg:rounded-[4rem] overflow-hidden border-4 border-white/5 shadow-3xl aspect-[4/3] lg:aspect-square">
            <img src={HERO_IMAGE} alt="Alpha Cupim" className="w-full h-full object-cover grayscale-[0.2] hover:grayscale-0 transition-all duration-1000" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a192f]/60 to-transparent"></div>
            
            <div className="absolute bottom-6 left-6 right-6 lg:bottom-10 lg:left-10 lg:right-10">
              <div className="relative h-24 lg:h-32 w-full">
                {featureCards.map((card, idx) => (
                  <div key={idx} className={`absolute inset-0 bg-white/10 backdrop-blur-2xl p-5 lg:p-6 rounded-3xl border border-white/10 flex items-center gap-5 transition-all duration-1000 ease-in-out ${activeCard === idx ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-4 scale-95 pointer-events-none'}`}>
                    <div className="bg-blue-600 p-3 lg:p-4 rounded-2xl shadow-lg shadow-blue-600/30 shrink-0">{card.icon}</div>
                    <div className="text-left"><h4 className="font-black text-white text-base lg:text-xl leading-tight">{card.title}</h4><p className="text-blue-200/50 text-[9px] font-bold uppercase tracking-[0.2em] mt-1">{card.sub}</p></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <section className="relative bg-[#0a192f] text-white overflow-hidden min-h-[80vh] lg:min-h-screen flex items-center">
      {/* Aurora Background ONLY for Desktop */}
      {!isMobile ? (
        <AuroraBackground className="absolute inset-0 w-full h-full opacity-40 mix-blend-lighten pointer-events-none bg-transparent dark:bg-transparent">
          {/* Empty children since we just want the background effect */}
        </AuroraBackground>
      ) : null}

      <div className="absolute top-0 right-0 w-full h-full pointer-events-none opacity-30">
        <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-blue-500/20 rounded-full blur-[120px]"></div>
      </div>
      
      {/* Particles only on Desktop for premium performance */}
      {!isMobile && (
        <div className="absolute inset-0 z-0 pointer-events-none">
           <Particles className="absolute inset-0" quantity={80} ease={80} color="#3b82f6" refresh />
        </div>
      )}
      
      <div className="w-full pt-28 pb-16 px-5 lg:pt-44 lg:pb-36 relative z-10">
        {HeroContent}
      </div>
    </section>
  );
};

export default Hero;
