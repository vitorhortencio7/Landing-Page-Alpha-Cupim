
import React from 'react';

const FloatingWhatsApp: React.FC = () => {
  const WHATSAPP_LINK = "https://api.whatsapp.com/send?phone=5588999010860&text=Olá, gostaria de começar meu orçamento gratuito";
  const WHATSAPP_ICON = "https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg";

  return (
    <div className="fixed bottom-6 right-6 z-[100] flex flex-col items-end gap-3 pointer-events-none">
      <div className="bg-white px-4 py-2 rounded-xl shadow-xl border border-gray-100 text-xs font-black text-blue-900 animate-bounce pointer-events-auto shadow-blue-900/10">
        Orçamento Gratuito
      </div>
      <a 
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-pulse pointer-events-auto flex items-center justify-center bg-green-500 hover:bg-green-600 text-white w-16 h-16 rounded-full shadow-2xl transition-all border-4 border-white/20 p-3"
        aria-label="Falar no WhatsApp"
      >
        <img src={WHATSAPP_ICON} alt="WhatsApp" className="w-full h-full object-contain" />
      </a>
    </div>
  );
};

export default FloatingWhatsApp;
