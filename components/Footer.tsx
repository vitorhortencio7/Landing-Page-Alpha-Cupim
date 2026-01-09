
import React from 'react';
import { MapPin, Instagram, Facebook, Phone, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const LOGO_URL = "https://i.ibb.co/Nnns7snz/Logo-Alpha-Cupim.png";

  return (
    <footer className="bg-[#0a192f] text-white pt-12 pb-8 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          
          <div className="col-span-1">
            <div className="flex items-center mb-6">
               <img 
                src={LOGO_URL} 
                alt="Alpha Cupim Dedetização" 
                className="h-10 w-auto brightness-0 invert opacity-90"
                loading="lazy"
                onError={(e) => { e.currentTarget.style.display = 'none'; }}
              />
            </div>
            <p className="text-blue-100/40 text-xs leading-relaxed mb-6 max-w-xs">
              Referência em dedetização e controle de pragas em Juazeiro do Norte e região. Qualidade, Segurança e Tecnologia para sua família.
            </p>
            <div className="flex gap-3">
              <a 
                href="https://www.instagram.com/alphacupimdedetizacao/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center hover:bg-blue-600 transition-all border border-white/5"
                aria-label="Instagram Alpha Cupim"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="https://www.facebook.com/alphacupim?locale=pt_BR" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center hover:bg-blue-600 transition-all border border-white/5"
                aria-label="Facebook Alpha Cupim"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-black text-white text-[10px] mb-4 uppercase tracking-[0.3em] opacity-40">Serviços</h4>
            <ul className="space-y-3 text-xs text-blue-100/60 font-medium">
              <li>Dedetização Juazeiro</li>
              <li>Controle de Escorpiões</li>
              <li>Descupinização Crato</li>
              <li>Desratização Barbalha</li>
            </ul>
          </div>

          <div>
            <h4 className="font-black text-white text-[10px] mb-4 uppercase tracking-[0.3em] opacity-40">Atendimento</h4>
            <ul className="space-y-3 text-xs text-blue-100/60 font-medium">
              <li>Juazeiro do Norte - CE</li>
              <li>Crato - CE</li>
              <li>Barbalha - CE</li>
              <li>Missão Velha - CE</li>
            </ul>
          </div>

          <div>
            <h4 className="font-black text-white text-[10px] mb-4 uppercase tracking-[0.3em] opacity-40">Fale Conosco</h4>
            <ul className="space-y-3 text-xs text-blue-100/60 font-medium">
              <li className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-blue-400" /> (88) 99901-0860
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-blue-400" /> alphacupim@gmail.com
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-blue-400 shrink-0" /> Juazeiro do Norte, Cariri - CE
              </li>
            </ul>
          </div>
          
        </div>
        
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[9px] font-bold text-blue-100/20 uppercase tracking-[0.2em]">
          <div className="flex flex-col items-center md:items-start gap-1">
            <p>© {new Date().getFullYear()} Alpha Cupim - Dedetização Juazeiro do Norte.</p>
            <p className="opacity-50 tracking-tighter">CNPJ: 42.552.183/0001-06</p>
          </div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacidade</a>
            <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
