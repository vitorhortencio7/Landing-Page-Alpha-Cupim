
import React, { useState, useEffect } from 'react';
import { Bug, Home, ShieldAlert, ArrowRight, FileCheck, Building2 } from 'lucide-react';
import { GlowingEffect } from './ui/glowing-effect.tsx';
import { InteractiveHoverButton } from './ui/interactive-hover-button.tsx';

const ServiceCard: React.FC<{ title: string; desc: string; icon: React.ReactNode; index: number; isMobile: boolean }> = ({ title, desc, icon, index, isMobile }) => {
  const topOffset = isMobile ? 80 + (index * 20) : 100 + (index * 24);
  const zIndex = 10 + index;

  return (
    <div 
      style={{ top: `${topOffset}px`, zIndex }}
      className="sticky lg:static mb-8 lg:mb-0 h-full p-[2px] rounded-[3rem] relative group cursor-pointer"
      onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}
    >
      {!isMobile && <GlowingEffect spread={40} glow proximity={64} inactiveZone={0.01} borderWidth={3} disabled={false} />}
      <div className="service-card relative bg-white p-10 lg:p-12 rounded-[3rem] border border-blue-50/50 shadow-xl overflow-hidden h-full">
        {!isMobile && <div className="shimmer-desktop"></div>}
        <div className="mb-8 relative z-10">
          <div className="icon-container w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-900 lg:group-hover:bg-blue-900 lg:group-hover:text-white transition-all duration-500">
            {icon}
          </div>
        </div>
        <div className="relative z-10">
          <h3 className="text-xl font-black text-blue-950 mb-3 tracking-tight lg:group-hover:text-blue-600 transition-colors">{title}</h3>
          <p className="text-sm text-slate-500 font-medium leading-relaxed mb-8">{desc}</p>
          <div className="flex items-center gap-2 text-blue-600 font-black text-[10px] uppercase tracking-widest lg:group-hover:translate-x-1 transition-transform">
            Saber Mais <ArrowRight className="w-3.5 h-3.5" />
          </div>
        </div>
      </div>
    </div>
  );
};

const Services: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 1023);
    check(); window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  const list = [
    { title: "Dedetização", desc: "Controle de baratas, formigas e escorpiões com laudo técnico.", icon: <Bug className="w-8 h-8"/> },
    { title: "Descupinização", desc: "Tratamento preventivo e corretivo para madeiras e estruturas.", icon: <Home className="w-8 h-8"/> },
    { title: "Desratização", desc: "Monitoramento moderno para áreas críticas e residenciais.", icon: <ShieldAlert className="w-8 h-8"/> },
    { title: "Documentação", desc: "Certificados para órgãos sanitários e prefeitura.", icon: <FileCheck className="w-8 h-8"/> }
  ];

  return (
    <section className="py-24 px-5 bg-slate-50/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 reveal">
          <span className="text-blue-600 text-[10px] font-black uppercase tracking-[0.4em] block mb-4">Setores Atendidos</span>
          <h2 className="text-4xl lg:text-6xl font-black text-blue-950 tracking-tighter leading-tight mb-6">Qualidade Total no Cariri.</h2>
          <p className="text-slate-500 max-w-2xl mx-auto font-medium">Soluções para <strong>residências, indústrias e comércio</strong> com garantia Alpha.</p>
        </div>
        <div className="flex flex-col lg:grid lg:grid-cols-4 lg:gap-8 reveal-stagger">
          {list.map((s, i) => <ServiceCard key={i} index={i} {...s} isMobile={isMobile} />)}
        </div>
      </div>
      <style>{`
        .service-card { transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1); }
        @media (min-width: 1024px) {
          .service-card:hover { transform: translateY(-10px); box-shadow: 0 40px 80px -20px rgba(15, 23, 42, 0.12); }
          .shimmer-desktop { position: absolute; top: 0; left: -100%; width: 50%; height: 100%; background: linear-gradient(to right, transparent, rgba(255,255,255,0.8), transparent); transform: skewX(-25deg); transition: 0.8s; pointer-events: none; }
          .service-card:hover .shimmer-desktop { left: 150%; }
        }
      `}</style>
    </section>
  );
};

export default Services;
