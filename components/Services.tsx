
import React, { useState, useEffect } from 'react';
import { Bug, Home, ShieldAlert, ArrowRight, FileCheck, Building2 } from 'lucide-react';
import { GlowingEffect } from './ui/glowing-effect.tsx';
import { InteractiveHoverButton } from './ui/interactive-hover-button.tsx';

const ServiceCard: React.FC<{ title: string; desc: string; icon: React.ReactNode; index: number; isMobile: boolean }> = ({ title, desc, icon, index, isMobile }) => {
  const handleClick = () => {
    const element = document.getElementById('contato');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const desktopTopOffset = 80 + (index * 24);
  const zIndex = 10 + index;

  return (
    <div 
      onClick={handleClick}
      style={!isMobile ? { 
        top: `${desktopTopOffset}px`,
        zIndex: zIndex
      } : {}}
      className={`service-card-wrapper group cursor-pointer ${!isMobile ? 'sticky' : 'static'} mb-10 lg:mb-0 h-full p-[2px] rounded-[3rem] relative`}
    >
      {!isMobile && (
        <GlowingEffect
          spread={40}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
          borderWidth={3}
        />
      )}
      
      <div className="service-card h-full relative z-10">
        {!isMobile && <div className="service-card-shimmer"></div>}
        
        <div className="service-icon-container">
          <div className="service-icon-bg"></div>
          <div className="relative z-10 text-blue-900 group-hover:text-white transition-colors duration-500">
            {icon}
          </div>
        </div>

        <div className="text-left w-full relative z-10">
          <h3 className="text-xl font-black text-blue-950 mb-3 tracking-tight group-hover:text-blue-600 transition-colors">
            {title}
          </h3>
          
          <p className="text-sm text-blue-900/60 leading-relaxed font-medium mb-8">
            {desc}
          </p>

          <div className="flex items-center gap-2 text-blue-600 font-black text-[10px] uppercase tracking-widest group-hover:translate-x-1 transition-transform duration-300">
            Saber Mais <ArrowRight className="w-3.5 h-3.5" />
          </div>
        </div>
      </div>
    </div>
  );
};

const Services: React.FC = () => {
  const WHATSAPP_LINK = "https://api.whatsapp.com/send?phone=5588999010860&text=Olá, gostaria de começar meu orçamento gratuito";
  const WHATSAPP_ICON = "https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg";

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 1023);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const serviceList = [
    {
      title: "Dedetização",
      desc: "Controle absoluto de baratas, formigas e escorpiões com laudo técnico.",
      icon: <Bug className="w-10 h-10" />
    },
    {
      title: "Descupinização",
      desc: "Tratamento preventivo e corretivo para madeiras e estruturas.",
      icon: <Home className="w-10 h-10" />
    },
    {
      title: "Desratização",
      desc: "Sistemas modernos de iscagem e monitoramento para áreas críticas.",
      icon: <ShieldAlert className="w-10 h-10" />
    },
    {
      title: "Documentação",
      desc: "Certificados válidos para órgãos reguladores e prefeitura.",
      icon: <FileCheck className="w-10 h-10" />
    }
  ];

  return (
    <section className="py-24 px-5 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16 max-w-3xl mx-auto reveal">
          <span className="inline-block bg-blue-100 text-blue-700 text-[10px] font-black uppercase tracking-[0.3em] px-4 py-1.5 rounded-full mb-6">
            Soluções de Segurança
          </span>
          <h2 className="text-4xl lg:text-5xl font-black text-blue-950 tracking-tighter leading-tight mb-6">
            Qualidade Total para <br/> todos os setores.
          </h2>
          <p className="text-blue-900/70 font-medium">
            Atendemos <strong>Residências, Bares, Restaurantes, Indústrias e Condomínios</strong> com a confiança reconhecida pelo mercado caririense.
          </p>
        </div>
        
        <div className="flex flex-col lg:grid lg:grid-cols-4 lg:gap-8 reveal-stagger">
          {serviceList.map((service, idx) => (
            <ServiceCard 
              key={idx}
              index={idx}
              title={service.title}
              desc={service.desc}
              icon={service.icon}
              isMobile={isMobile}
            />
          ))}
        </div>

        <div className="mt-20 reveal relative z-20">
          <div className="bg-white/60 backdrop-blur-xl p-10 rounded-[3.5rem] text-center border border-blue-100 shadow-2xl shadow-blue-900/5 max-w-4xl mx-auto overflow-hidden relative group">
             <div className="flex flex-col lg:flex-row items-center justify-center gap-12 relative z-10">
                <div className="flex items-center gap-4 text-left">
                   <div className="bg-blue-600 p-4 rounded-2xl text-white shadow-lg shrink-0">
                      <Building2 className="w-8 h-8" />
                   </div>
                   <div>
                      <h4 className="font-black text-blue-950 tracking-tight">Atendimento Corporativo</h4>
                      <p className="text-sm text-blue-900/60 font-medium leading-snug">Cronograma mensal e certificado sanitário para sua empresa.</p>
                   </div>
                </div>
                <div className="h-10 w-[1px] bg-blue-100 hidden lg:block"></div>
                
                <InteractiveHoverButton 
                  text="AGENDAR VISITA AGORA"
                  href={WHATSAPP_LINK}
                  className="w-full lg:w-auto"
                  icon={<img src={WHATSAPP_ICON} alt="WhatsApp" className="w-6 h-6" />}
                />
             </div>
          </div>
        </div>
      </div>

      <style>{`
        .service-card-wrapper {
          perspective: 1200px;
        }
        .service-card {
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          text-align: left;
          background: white;
          padding: 3rem 2.5rem;
          border-radius: 3rem;
          border: 1px solid rgba(37, 99, 235, 0.05);
          box-shadow: 0 15px 40px -20px rgba(15, 23, 42, 0.05);
          transition: all 0.7s cubic-bezier(0.16, 1, 0.3, 1);
          overflow: hidden;
        }
        @media (min-width: 1024px) {
          .service-card:hover {
            transform: translateY(-10px) rotateX(4deg) rotateY(-2deg);
            box-shadow: 0 40px 80px -20px rgba(15, 23, 42, 0.12);
            border-color: rgba(37, 99, 235, 0.2);
          }
        }
        .service-card-shimmer {
          position: absolute;
          top: 0; left: -100%; width: 50%; height: 100%;
          background: linear-gradient(to right, transparent, rgba(255, 255, 255, 0.6), transparent);
          transform: skewX(-25deg); transition: 0.8s; pointer-events: none; z-index: 5;
        }
        .service-card:hover .service-card-shimmer { left: 150%; }
        .service-icon-container { position: relative; width: 5rem; height: 5rem; display: flex; align-items: center; justify-content: center; margin-bottom: 2rem; }
        .service-icon-bg { position: absolute; inset: 0; background: #f0f7ff; border-radius: 1.75rem; transition: all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1); transform: rotate(0deg); }
        .service-card:hover .service-icon-bg { background: #1e3a8a; transform: scale(1.1) rotate(12deg); box-shadow: 0 10px 25px -5px rgba(30, 58, 138, 0.3); }
      `}</style>
    </section>
  );
};

export default Services;
