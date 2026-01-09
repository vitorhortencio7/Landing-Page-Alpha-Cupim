
import React, { useState, useEffect } from 'react';
import { Shield, FileText, CheckCircle, Zap, Star } from 'lucide-react';
import { InteractiveHoverButton } from './ui/interactive-hover-button';
import { Button as MovingBorder } from './ui/moving-border';
import { GlowingEffect } from './ui/glowing-effect';

const DifferentialItem: React.FC<{ icon: React.ReactNode; text: string; sub: string; index: number; isMobile: boolean }> = ({ icon, text, sub, index, isMobile }) => {
  // Mobile Only Sticky logic
  const topOffset = isMobile ? 80 + (index * 20) : undefined;
  const zIndex = isMobile ? 10 + index : undefined;

  return (
    <div 
      style={{ 
        top: topOffset ? `${topOffset}px` : undefined,
        zIndex: zIndex
      }}
      className={`benefit-card-wrapper group cursor-default relative p-[2px] rounded-[2.5rem] ${isMobile ? 'sticky mb-6' : 'mb-0 lg:mb-4'}`}
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
      <div className="benefit-card h-full relative z-10">
        {!isMobile && <div className="benefit-card-shimmer"></div>}
        
        <div className="flex items-start gap-5 relative z-10">
          <div className="benefit-icon-container shrink-0">
            <div className="benefit-icon-bg"></div>
            <div className="relative z-10 text-blue-600 lg:group-hover:text-white transition-colors duration-500">
              {icon}
            </div>
          </div>
          
          <div className="flex flex-col text-left">
            <h4 className="font-black text-blue-950 tracking-tight text-lg mb-1.5 lg:group-hover:text-blue-600 transition-colors">
              {text}
            </h4>
            <p className="text-sm text-slate-500 leading-relaxed font-medium">
              {sub}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const Benefits: React.FC = () => {
  const WHATSAPP_LINK = "https://api.whatsapp.com/send?phone=5588999010860&text=Olá, gostaria de começar meu orçamento gratuito";
  const WHATSAPP_ICON = "https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg";
  const TEAM_PHOTO = "https://i.ibb.co/kshG4frj/Imagem-do-Whats-App-de-2024-12-04-s-11-30-26-afd6ea56.png"; 

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 1023);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const benefitsList = [
    { icon: <Zap className="w-6 h-6" />, text: "Visita Técnica Gratuita", sub: "Avaliamos seu problema sem custo em todo Cariri." },
    { icon: <FileText className="w-6 h-6" />, text: "Certificado de Qualidade", sub: "Documentação completa para alvarás e órgãos sanitários." },
    { icon: <CheckCircle className="w-6 h-6" />, text: "Seguro para a Família", sub: "Produtos atóxicos e sem cheiro para pets e crianças." },
    { icon: <Shield className="w-6 h-6" />, text: "Garantia Alpha", sub: "Contrato por escrito com cobertura regional." }
  ];

  return (
    <section className="pt-8 pb-24 lg:py-28 px-5 bg-blue-50/30">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="reveal mb-12">
              <span className="text-blue-600 text-[10px] font-black uppercase tracking-[0.4em] mb-4 block">Diferenciais Alpha</span>
              <h2 className="text-4xl lg:text-6xl font-black text-blue-950 tracking-tighter leading-tight mb-4">
                A escolha de quem <br/><span className="text-blue-600 italic">preza pela segurança.</span>
              </h2>
            </div>
            
            <div className="flex flex-col gap-0 lg:gap-2 mb-12 reveal-stagger">
              {benefitsList.map((benefit, idx) => (
                <DifferentialItem key={idx} index={idx} icon={benefit.icon} text={benefit.text} sub={benefit.sub} isMobile={isMobile} />
              ))}
            </div>

            <div className="flex justify-center lg:justify-start reveal" style={{ transitionDelay: '400ms' }}>
              <InteractiveHoverButton 
                text="AGENDAR VISITA AGORA" 
                href={WHATSAPP_LINK} 
                className="w-full sm:w-auto" 
                icon={<img src={WHATSAPP_ICON} alt="WhatsApp" className="w-6 h-6" />} 
              />
            </div>
          </div>

          <div className="relative reveal order-1 lg:order-2">
            <div className="relative z-10 rounded-[3rem] overflow-hidden border-8 border-white shadow-3xl group aspect-square w-full max-w-md mx-auto lg:max-w-none">
              <img src={TEAM_PHOTO} alt="Equipe Profissional Alpha" className="w-full h-full object-cover object-top transition-transform duration-1000 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent"></div>
              
              {/* Badge realocado para a esquerda para não ser coberto pelo card da Diretoria Alpha */}
              <div className="absolute bottom-10 left-8 bg-blue-600 text-white px-5 py-2.5 rounded-2xl text-[10px] font-black uppercase tracking-widest shadow-lg flex items-center gap-2 whitespace-nowrap z-20 lg:group-hover:scale-110 transition-transform duration-500">
                <Star className="w-3.5 h-3.5 fill-current" /> Satisfação Garantida
              </div>
            </div>

            {!isMobile && (
              <MovingBorder borderRadius="2.5rem" duration={4000} containerClassName="absolute -bottom-10 -right-10 max-w-xs z-30 shadow-2xl" className="bg-white p-8 border-blue-50 flex-col items-start justify-start text-blue-950">
                <p className="text-sm font-bold text-blue-950 mb-4 italic leading-relaxed">"Nossa equipe é treinada para resolver seu problema com total discrição e máxima eficiência."</p>
                <div className="flex items-center gap-3"><div className="w-10 h-1 bg-blue-600 rounded-full"></div><span className="text-[10px] font-black uppercase tracking-widest text-blue-900">Diretoria Alpha</span></div>
              </MovingBorder>
            )}
          </div>
        </div>
      </div>
      <style>{`
        .benefit-card-wrapper { perspective: 1200px; }
        .benefit-card { position: relative; background: white; padding: 2.25rem 2rem; border-radius: 2.5rem; border: 1px solid rgba(37, 99, 235, 0.04); box-shadow: 0 10px 40px -15px rgba(15, 23, 42, 0.05); transition: all 0.7s cubic-bezier(0.16, 1, 0.3, 1); overflow: hidden; }
        
        @media (min-width: 1024px) { 
          .benefit-card:hover { transform: translateY(-5px); box-shadow: 0 35px 70px -15px rgba(15, 23, 42, 0.12); border-color: rgba(37, 99, 235, 0.15); }
          .benefit-card:hover .benefit-card-shimmer { left: 150%; }
          .benefit-card:hover .benefit-icon-bg { background: #1e3a8a; transform: scale(1.1) rotate(12deg); box-shadow: 0 8px 20px -5px rgba(30, 58, 138, 0.3); }
        }

        .benefit-card-shimmer { position: absolute; top: 0; left: -100%; width: 50%; height: 100%; background: linear-gradient(to right, transparent, rgba(255, 255, 255, 0.7), transparent); transform: skewX(-25deg); transition: 0.8s; pointer-events: none; z-index: 5; }
        .benefit-icon-container { position: relative; width: 4.25rem; height: 4.25rem; display: flex; align-items: center; justify-content: center; }
        .benefit-icon-bg { position: absolute; inset: 0; background: #f0f7ff; border-radius: 1.4rem; transition: all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1); }
      `}</style>
    </section>
  );
};

export default Benefits;
