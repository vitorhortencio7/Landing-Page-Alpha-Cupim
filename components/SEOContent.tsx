
import React from 'react';
import { ShieldAlert, Info, Calendar, ArrowRight } from 'lucide-react';

const SEOCard: React.FC<{ 
  title: string; 
  icon: React.ReactNode; 
  children: React.ReactNode; 
  bgColor: string; 
  borderColor: string;
  iconBg: string;
  index: number;
}> = ({ title, icon, children, bgColor, borderColor, iconBg, index }) => {
  // Efeito de empilhamento no mobile com offset para não cobrir totalmente o anterior
  const mobileTopOffset = 80 + (index * 32);
  const zIndex = 10 + index;

  const handleClick = () => {
    const element = document.getElementById('contato');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div 
      onClick={handleClick}
      style={{ 
        top: `${mobileTopOffset}px`,
        zIndex: zIndex
      } as React.CSSProperties}
      className="sticky lg:static mb-8 lg:mb-0 group cursor-pointer h-full active:scale-95 transition-transform duration-200"
    >
      <div className={`relative ${bgColor} ${borderColor} border p-8 md:p-10 rounded-[2.5rem] h-full shadow-[0_20px_50px_-12px_rgba(0,0,0,0.15)] transition-all duration-700 lg:group-hover:scale-[1.02] lg:group-hover:shadow-2xl overflow-hidden backdrop-blur-md`}>
        
        {/* Decorative background element */}
        <div className="absolute -right-8 -top-8 w-32 h-32 bg-white/30 rounded-full blur-3xl lg:group-hover:scale-150 transition-transform duration-1000 pointer-events-none"></div>
        
        <div className={`${iconBg} w-14 h-14 rounded-2xl flex items-center justify-center text-white mb-8 shadow-lg lg:group-hover:rotate-12 transition-transform duration-500 relative z-10`}>
          {icon}
        </div>
        
        <h3 className="font-black text-blue-950 text-2xl mb-6 tracking-tight relative z-10 lg:group-hover:text-blue-600 transition-colors">
          {title}
        </h3>
        
        <div className="relative z-10 text-slate-700 leading-relaxed">
          {children}
        </div>

        <div className="mt-8 flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-blue-950/40 lg:group-hover:text-blue-600 lg:group-hover:translate-x-2 transition-all duration-300">
          Solicitar Informação Técnica <ArrowRight className="w-3 h-3" />
        </div>
      </div>
    </div>
  );
};

const SEOContent: React.FC = () => {
  const handleBannerClick = () => {
    const element = document.getElementById('contato');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="py-24 px-5 bg-white relative">
      <div className="max-w-6xl mx-auto">
        
        <div className="text-center mb-16 reveal">
          <span className="inline-block bg-blue-100 text-blue-700 text-[10px] font-black uppercase tracking-[0.3em] px-4 py-1.5 rounded-full mb-6">
            Guia de Saúde Ambiental
          </span>
          <h2 className="text-4xl lg:text-6xl font-black text-blue-950 tracking-tighter leading-[1.1] mb-6">
            Por que fazer <br/><span className="text-blue-600 italic">Dedetização no Cariri?</span>
          </h2>
          <p className="text-slate-600 font-medium leading-relaxed max-w-2xl mx-auto text-lg">
            Entenda a importância estratégica de manter sua casa ou comércio livre de infestações em Juazeiro do Norte e toda a região.
          </p>
        </div>

        <div className="flex flex-col lg:grid lg:grid-cols-2 lg:gap-8 reveal-stagger">
          <SEOCard 
            index={0}
            title="Sinais de Infestação"
            icon={<ShieldAlert className="w-7 h-7" />}
            bgColor="bg-blue-50"
            borderColor="border-blue-100"
            iconBg="bg-blue-600"
          >
            <ul className="space-y-4 text-sm md:text-base font-medium">
              <li className="flex items-start gap-3 group/item">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2 shrink-0 lg:group-hover/item:scale-150 transition-transform"></span> 
                <span>Presença de fezes pequenas em armários ou frestas.</span>
              </li>
              <li className="flex items-start gap-3 group/item">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2 shrink-0 lg:group-hover/item:scale-150 transition-transform"></span> 
                <span>Barulhos de arranhões em paredes durante a noite.</span>
              </li>
              <li className="flex items-start gap-3 group/item">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2 shrink-0 lg:group-hover/item:scale-150 transition-transform"></span> 
                <span>Manchas ou pequenos furos em móveis de madeira.</span>
              </li>
              <li className="flex items-start gap-3 group/item">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2 shrink-0 lg:group-hover/item:scale-150 transition-transform"></span> 
                <span>Embalagens de alimentos roídas ou restos de asas.</span>
              </li>
            </ul>
          </SEOCard>

          <SEOCard 
            index={1}
            title="Quando Dedetizar?"
            icon={<Calendar className="w-7 h-7" />}
            bgColor="bg-[#fff9f2]"
            borderColor="border-orange-100"
            iconBg="bg-orange-600"
          >
            <p className="text-sm md:text-base font-medium leading-relaxed mb-6">
              Recomendamos a dedetização preventiva a cada <span className="text-orange-700 font-bold">6 meses</span>. No clima tropical e quente do Cariri, pragas urbanas se proliferam rapidamente.
            </p>
            <p className="text-sm md:text-base font-medium leading-relaxed">
              Manter um cronograma regular é <span className="text-blue-900 font-bold underline decoration-blue-200 underline-offset-4">investimento em saúde</span>: garante a segurança da sua família e evita prejuízos.
            </p>
          </SEOCard>
        </div>

        {/* Banner Final Sólido - Também clicável */}
        <div 
          onClick={handleBannerClick}
          style={{ top: '150px', zIndex: 15 } as React.CSSProperties}
          className="mt-12 lg:mt-16 sticky lg:static reveal cursor-pointer active:scale-[0.98] transition-transform duration-200"
        >
          <div className="bg-[#0a192f] rounded-[2.5rem] lg:rounded-[3.5rem] p-8 md:p-14 text-center text-white relative overflow-hidden shadow-[0_30px_60px_-15px_rgba(0,0,0,0.4)] group border border-white/5">
            {/* Mesh background effect */}
            <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none bg-[radial-gradient(circle_at_center,_#2563eb_0%,_transparent_70%)]"></div>
            
            <div className="relative z-10 flex flex-col items-center">
              <div className="bg-blue-600/20 p-5 rounded-3xl border border-blue-500/20 mb-8 lg:group-hover:scale-110 transition-transform duration-700">
                <Info className="w-8 h-8 md:w-10 md:h-10 text-blue-400" />
              </div>
              
              <h3 className="text-2xl md:text-4xl font-black mb-6 tracking-tight">
                Alpha Cupim: Líder no Cariri
              </h3>
              
              <p className="text-blue-100/60 max-w-3xl text-sm md:text-lg leading-relaxed font-medium mb-6">
                Utilizamos <span className="text-white font-bold">biotecnologia avançada</span> para o controle de pragas. Atendemos com laudo técnico oficial em todo o Cariri, garantindo proteção total para seu imóvel.
              </p>

              <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-blue-400 opacity-60 lg:group-hover:opacity-100 lg:group-hover:translate-y-1 transition-all duration-300">
                Clique para Orçamento Gratuito <ArrowRight className="w-3 h-3" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SEOContent;
