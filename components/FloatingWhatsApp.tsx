
import React from 'react';

const FloatingWhatsApp: React.FC = () => {
  const WHATSAPP_LINK = "https://api.whatsapp.com/send?phone=5588999010860&text=Olá, gostaria de começar meu orçamento gratuito";
  const WHATSAPP_ICON = "https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg";

  return (
    <div className="fixed bottom-6 right-6 z-[100] flex flex-col items-end gap-3 pointer-events-none">
      <div className="bg-white/95 backdrop-blur-md px-4 py-2 rounded-2xl shadow-2xl border border-blue-50 text-[10px] font-black text-blue-900 uppercase tracking-widest animate-bounce pointer-events-auto">
        Orçamento Grátis
      </div>
      <a 
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-pulse pointer-events-auto flex items-center justify-center bg-green-500 hover:bg-green-600 text-white w-14 h-14 lg:w-16 lg:h-16 rounded-full shadow-2xl transition-all border-4 border-white p-3 hover:scale-110 active:scale-95"
        aria-label="WhatsApp Alpha"
      >
        <img src={WHATSAPP_ICON} alt="WA" className="w-full h-full object-contain" />
      </a>
    </div>
  );
};

export default FloatingWhatsApp;
