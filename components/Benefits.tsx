
import React from 'react';
import { Shield, FileText, CheckCircle, Zap, Star } from 'lucide-react';
import { InteractiveHoverButton } from './ui/interactive-hover-button';
import { Button as MovingBorder } from './ui/moving-border';

const DifferentialItem: React.FC<{ icon: React.ReactNode; text: string; sub: string; index: number }> = ({ icon, text, sub, index }) => {
  const mobileTopOffset = 80 + (index * 24);
  const zIndex = 10 + index;

  return (
    <div 
      style={{ 
        top: `${mobileTopOffset}px`,
        zIndex: zIndex
      } as React.CSSProperties}
      className="benefit-card-wrapper group cursor-default sticky lg:static mb-6 lg:mb-0"
    >
      <div className="benefit-card h-full">
        <div className="benefit-card-shimmer"></div>
        
        <div className="flex items-start gap-5 relative z-10">
          <div className="benefit-icon-container shrink-0">
            <div className="benefit-icon-bg"></div>
            <div className="relative z-10 text-blue-600 group-hover:text-white transition-colors duration-500">
              {icon}
            </div>
          </div>
          
          <div className="flex flex-col text-left">
            <h4 className="font-black text-blue-950 tracking-tight text-lg mb-2 group-hover:text-blue-600 transition-colors">
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

  const benefitsList = [
    {
      icon: <Zap className="w-6 h-6" />,
      text: "Visita Técnica Gratuita",
      sub: "Avaliamos seu problema sem custo em todo Cariri."
    },
    {
      icon: <FileText className="w-6 h-6" />,
      text: "Certificado de Qualidade",
      sub: "Documentação completa para alvarás e órgãos sanitários."
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      text: "Seguro para a Família",
      sub: "Produtos atóxicos e sem cheiro para pets e crianças."
    },
    {
      icon: <Shield className="w-6 h-6" />,
      text: "Garantia Alpha",
      sub: "Contrato por escrito com cobertura regional."
    }
  ];

  return (
    <section className="pt-8 pb-24 lg:py-24 px-5 bg-blue-50/30">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <div className="reveal-stagger order-2 lg:order-1">
            <span className="text-blue-600 text-[10px] font-black uppercase tracking-[0.4em] mb-4 block">Diferenciais Alpha</span>
            <h2 className="text-4xl lg:text-6xl font-black text-blue-950 tracking-tighter mb-8 leading-tight">
              A escolha de quem <br/><span className="text-blue-600 italic">preza pela segurança.</span>
            </h2>
            
            <div className="flex flex-col gap-0 mb-12 lg:gap-6">
              {benefitsList.map((benefit, idx) => (
                <DifferentialItem 
                  key={idx}
                  index={idx}
                  icon={benefit.icon}
                  text={benefit.text}
                  sub={benefit.sub}
                />
              ))}
            </div>

            <div className="flex justify-center lg:justify-start mt-8">
              <InteractiveHoverButton 
                text="AGENDAR VISITA AGORA"
                href={WHATSAPP_LINK}
                className="w-full sm:w-auto"
                icon={<img src={WHATSAPP_ICON} alt="WhatsApp" className="w-6 h-6" />}
              />
            </div>
          </div>

          <div className="relative reveal mt-0 lg:mt-0 order-1 lg:order-2">
            <div className="relative z-10 rounded-[3rem] overflow-hidden border-8 border-white shadow-2xl group aspect-square w-full max-w-md mx-auto lg:max-w-none">
              <img 
                src={TEAM_PHOTO} 
                alt="Equipe Profissional Alpha Cupim" 
                className="w-full h-full object-cover object-top transition-transform duration-1000 group-hover:scale-105" 
              />
              <div className="absolute inset-0 bg-blue-900/5 group-hover:bg-transparent transition-colors duration-500"></div>
              
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-blue-600 text-white px-5 py-2 rounded-2xl text-[10px] font-black uppercase tracking-widest shadow-lg flex items-center gap-2 whitespace-nowrap z-20">
                <Star className="w-3.5 h-3.5 fill-current text-white" />
                Satisfação Garantida
              </div>
            </div>
            
            {/* Box da Diretoria com Moving Border Effect */}
            <MovingBorder
              as="div"
              borderRadius="2.5rem"
              duration={4000}
              containerClassName="absolute -bottom-10 -right-10 max-w-xs z-30 hidden md:block shadow-2xl"
              className="bg-white p-8 border-blue-50 flex-col items-start justify-start text-blue-950 h-auto w-full"
            >
               <p className="text-sm font-bold text-blue-950 mb-4 italic leading-relaxed">
                 "Nossa equipe é treinada para resolver seu problema com o máximo de discrição e eficiência."
               </p>
               <div className="flex items-center gap-3">
                  <div className="w-10 h-1 bg-blue-600 rounded-full"></div>
                  <span className="text-[10px] font-black uppercase tracking-widest text-blue-900">Diretoria Alpha</span>
               </div>
            </MovingBorder>

            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-600/5 rounded-full blur-[100px] pointer-events-none"></div>
          </div>

        </div>
      </div>

      <style>{`
        .benefit-card-wrapper {
          perspective: 1200px;
        }

        .benefit-card {
          position: relative;
          background: white;
          padding: 2rem;
          border-radius: 2.5rem;
          border: 1px solid rgba(37, 99, 235, 0.05);
          box-shadow: 0 10px 30px -15px rgba(15, 23, 42, 0.05);
          transition: all 0.7s cubic-bezier(0.16, 1, 0.3, 1);
          overflow: hidden;
        }

        @media (min-width: 1024px) {
          .benefit-card:hover {
            transform: translateY(-5px) rotateX(2deg) rotateY(-1deg);
            box-shadow: 0 30px 60px -15px rgba(15, 23, 42, 0.1);
            border-color: rgba(37, 99, 235, 0.2);
          }
        }

        .benefit-card-shimmer {
          position: absolute;
          top: 0;
          left: -100%;
          width: 50%;
          height: 100%;
          background: linear-gradient(
            to right,
            transparent,
            rgba(255, 255, 255, 0.6),
            transparent
          );
          transform: skewX(-25deg);
          transition: 0.8s;
          pointer-events: none;
          z-index: 5;
        }

        .benefit-card:hover .benefit-card-shimmer {
          left: 150%;
        }

        .benefit-icon-container {
          position: relative;
          width: 4rem;
          height: 4rem;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .benefit-icon-bg {
          position: absolute;
          inset: 0;
          background: #f0f7ff;
          border-radius: 1.25rem;
          transition: all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .benefit-card:hover .benefit-icon-bg {
          background: #1e3a8a;
          transform: scale(1.1) rotate(12deg);
          box-shadow: 0 8px 20px -5px rgba(30, 58, 138, 0.3);
        }
      `}</style>
    </section>
  );
};

export default Benefits;
