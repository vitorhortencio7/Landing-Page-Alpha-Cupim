
import React from 'react';

const ClientCarousel: React.FC = () => {
  const clients = [
    { name: "Medlar", url: "https://i.ibb.co/TBrZHhGw/MEDLAR.png" },
    { name: "Prediletto", url: "https://i.ibb.co/HT9bbgyL/logo-prediletto.png" },
    { name: "Kalifon", url: "https://i.ibb.co/yF47GSTp/Logo-Kalifon.png" },
    { name: "Agapantos", url: "https://i.ibb.co/yBWTVtSG/Logo-Agapantos.png" },
    { name: "Hotel Verdes Vales", url: "https://i.ibb.co/SDT8H7Z8/HOTEL-VERDES-VALES.png" },
    { name: "Prohospital", url: "https://i.ibb.co/NdMLLGgM/Logo-Phohospital.png" },
    { name: "Voa Nordeste", url: "https://i.ibb.co/RkzxJpR1/Consorcio-Voa-Nordeste.png" }
  ];

  return (
    <div className="bg-white py-12 overflow-hidden border-y border-blue-50/50">
      <div className="max-w-7xl mx-auto px-5 mb-8">
        <p className="text-[10px] font-black uppercase tracking-[0.4em] text-blue-900/30 text-center">Empresas que confiam na Alpha</p>
      </div>
      <div className="relative flex overflow-x-hidden group">
        <div className="animate-marquee whitespace-nowrap flex items-center gap-16 lg:gap-32">
          {[...clients, ...clients, ...clients].map((client, idx) => (
            <div 
              key={idx} 
              className="flex items-center justify-center grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-500 cursor-default px-4"
            >
              <img 
                src={client.url} 
                alt={client.name} 
                className="h-10 lg:h-12 w-auto object-contain max-w-[140px]"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); }
        }
        .animate-marquee {
          animation: marquee 40s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default ClientCarousel;
