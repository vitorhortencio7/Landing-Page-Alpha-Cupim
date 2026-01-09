
import React from 'react';
import { Camera, CheckCircle2 } from 'lucide-react';

const WorkGallery: React.FC = () => {
  // Imagens reais fornecidas pelo cliente com tags atualizadas conforme solicitação
  const images = [
    { url: "https://i.ibb.co/7NjjqsGG/10.jpg", tag: "Dedetização em Juazeiro do Norte", alt: "Técnico Alpha Cupim realizando dedetização residencial em Juazeiro do Norte" },
    { url: "https://i.ibb.co/Rkmv9hcp/1.jpg", tag: "Dedetização Comercial Cariri", alt: "Controle de pragas em restaurante no Cariri" },
    { url: "https://i.ibb.co/DPpBn5qD/4.jpg", tag: "Descupinização Profissional", alt: "Tratamento contra cupins em estruturas de madeira no Crato" },
    { url: "https://i.ibb.co/rK54H95J/2.jpg", tag: "Desinfecção Industrial", alt: "Aplicação de sanitizante em galpão industrial em Barbalha" }
  ];

  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-5">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 reveal">
          <div className="max-w-xl">
            <div className="flex items-center gap-2 mb-4">
               <div className="w-10 h-1 px-0 bg-blue-600 rounded-full"></div>
               <span className="text-blue-600 font-black text-[10px] uppercase tracking-[0.4em]">Trabalho no Cariri</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-blue-950 tracking-tighter leading-tight">
              Equipe Alpha Cupim <br/><span className="text-blue-600 italic">em tempo real.</span>
            </h2>
          </div>
          <p className="text-slate-500 font-medium max-w-sm mb-2 leading-relaxed">
            Veja a nossa equipe real atuando nos principais condomínios e estabelecimentos de Juazeiro do Norte, Crato e Barbalha.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 reveal-stagger">
          {images.map((img, idx) => (
            <div key={idx} className="group relative rounded-3xl md:rounded-[2.5rem] overflow-hidden aspect-[3/4] shadow-xl hover-premium">
              <img 
                src={img.url} 
                alt={img.alt} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute bottom-4 left-4 right-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-between">
                <span className="text-white font-black text-[10px] uppercase tracking-widest leading-tight pr-2">{img.tag}</span>
                <Camera className="w-4 h-4 text-white/50 shrink-0" />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 flex items-center justify-center gap-8 opacity-50 grayscale hover:grayscale-0 transition-all">
           <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-blue-900">
              <CheckCircle2 className="w-4 h-4 text-green-500" />
              Técnicos Treinados
           </div>
           <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-blue-900">
              <CheckCircle2 className="w-4 h-4 text-green-500" />
              Certificação Sanitária
           </div>
        </div>
      </div>
    </section>
  );
};

export default WorkGallery;
