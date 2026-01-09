
import React, { useState, useEffect } from 'react';
import { Star, Quote } from 'lucide-react';

const TestimonialCard: React.FC<{ name: string; loc: string; text: string; initials: string; index: number; isMobile: boolean }> = ({ name, loc, text, initials, index, isMobile }) => {
  const mobileTopOffset = 80 + (index * 20);
  const zIndex = 10 + index;

  return (
    <div 
      style={{ 
        top: isMobile ? `${mobileTopOffset}px` : 'auto',
        zIndex: zIndex
      } as React.CSSProperties}
      className={`${isMobile ? 'sticky' : 'static'} mb-10 lg:mb-0`}
    >
      <div className="bg-white p-8 lg:p-12 rounded-[3rem] shadow-[0_20px_50px_-15px_rgba(0,0,0,0.06)] border border-slate-100 hover-lift relative group overflow-hidden">
        <div className="absolute top-8 right-10 text-slate-100/50 lg:group-hover:text-blue-50/50 transition-colors">
           <Quote className="w-16 h-16 fill-current" />
        </div>
        
        <div className="flex gap-1 mb-6 relative z-10">
          {[1, 2, 3, 4, 5].map(n => <Star key={n} className="w-4 h-4 fill-orange-400 text-orange-400" />)}
        </div>
        
        <p className="text-slate-700 font-bold text-lg lg:text-xl mb-10 leading-relaxed relative z-10">
          "{text}"
        </p>
        
        <div className="flex items-center gap-4 relative z-10">
          <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl flex items-center justify-center font-black text-white text-lg shadow-lg shadow-blue-600/20">
            {initials}
          </div>
          <div className="text-left">
            <h4 className="font-black text-blue-950 text-sm leading-none mb-1">{name}</h4>
            <p className="text-[10px] text-slate-400 font-black uppercase tracking-widest">{loc}</p>
          </div>
        </div>
        
        {!isMobile && <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 via-blue-500/0 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>}
      </div>
    </div>
  );
};

const Testimonials: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 1023);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const reviews = [
    {
      name: "Maria Silva",
      loc: "Juazeiro do Norte",
      text: "Resolveram meu problema com escorpiões no mesmo dia. Atendimento nota 10!",
      initials: "MS"
    },
    {
      name: "João Pereira",
      loc: "Crato",
      text: "Preço justo e técnicos muito profissionais. Recomendei para toda a vizinhança.",
      initials: "JP"
    },
    {
      name: "Francisca Costa",
      loc: "Barbalha",
      text: "O melhor é que não ficou cheiro nenhum na casa. Meus filhos nem sentiram nada.",
      initials: "FC"
    }
  ];

  const GOOGLE_REVIEWS_URL = "https://share.google/nWFRW4Ub6A1Td8eME";

  return (
    <section className="py-32 px-5 bg-[#f8fafc] relative">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20 reveal">
          <span className="text-orange-600 text-[10px] font-black uppercase tracking-[0.4em] mb-4 block">Confiança Regional</span>
          <h2 className="text-4xl lg:text-6xl font-black text-blue-950 tracking-tighter leading-tight">
            O que o Cariri <br/><span className="text-orange-600 italic">diz sobre nós</span>
          </h2>
        </div>
        
        <div className="flex flex-col lg:grid lg:grid-cols-3 lg:gap-8 reveal-stagger">
          {reviews.map((rev, idx) => (
            <TestimonialCard 
              key={idx}
              index={idx}
              name={rev.name}
              loc={rev.loc}
              text={rev.text}
              initials={rev.initials}
              isMobile={isMobile}
            />
          ))}
        </div>
        
        <div className="mt-20 text-center reveal">
          <a 
            href={GOOGLE_REVIEWS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-4 px-8 py-5 bg-white rounded-full shadow-xl border border-blue-50 lg:hover:shadow-2xl lg:hover:-translate-y-1 transition-all duration-500 cursor-pointer group active:scale-95"
          >
            <div className="flex gap-2.5">
               {[1, 2, 3, 4, 5].map(n => (
                 <Star 
                   key={n} 
                   className="w-4 h-4 fill-orange-400 text-orange-400 lg:group-hover:scale-110 transition-transform duration-300" 
                   style={{ transitionDelay: `${n * 40}ms` }}
                 />
               ))}
            </div>
            <span className="text-blue-950 font-black text-sm tracking-tight">5 de 5 estrelas, baseada em +120 avaliações</span>
          </a>
        </div>
      </div>

      <style>{`
        .hover-lift {
          transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
        }
        
        @media (min-width: 1024px) {
          .hover-lift:hover {
            transform: translateY(-12px);
            box-shadow: 0 40px 80px -12px rgba(15, 23, 42, 0.18);
            border-color: rgba(37, 99, 235, 0.1);
          }
        }
      `}</style>
    </section>
  );
};

export default Testimonials;
