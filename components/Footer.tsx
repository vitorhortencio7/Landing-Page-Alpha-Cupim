
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
                alt="Alpha Cupim" 
                className="h-10 w-auto brightness-0 invert opacity-90"
                onError={(e) => { e.currentTarget.style.display = 'none'; }}
              />
            </div>
            <p className="text-blue-100/40 text-xs leading-relaxed mb-6 max-w-xs">
              Referência em controle de pragas no Cariri. Qualidade, Segurança e Tecnologia para sua família e seu negócio.
            </p>
            <div className="flex gap-3">
              <a 
                href="https://www.instagram.com/alphacupimdedetizacao/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center hover:bg-blue-600 transition-all border border-white/5"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="https://www.facebook.com/alphacupim?locale=pt_BR" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center hover:bg-blue-600 transition-all border border-white/5"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-black text-white text-[10px] mb-4 uppercase tracking-[0.3em] opacity-40">Setores</h4>
            <ul className="space-y-3 text-xs text-blue-100/60 font-medium">
              <li>Residencial & Condomínios</li>
              <li>Bares & Restaurantes</li>
              <li>Indústrias & Galpões</li>
              <li>Documentação para Alvará</li>
            </ul>
          </div>

          <div>
            <h4 className="font-black text-white text-[10px] mb-4 uppercase tracking-[0.3em] opacity-40">Região</h4>
            <ul className="space-y-3 text-xs text-blue-100/60 font-medium">
              <li>Juazeiro do Norte</li>
              <li>Crato</li>
              <li>Barbalha</li>
              <li>Região do Cariri</li>
            </ul>
          </div>

          <div>
            <h4 className="font-black text-white text-[10px] mb-4 uppercase tracking-[0.3em] opacity-40">Contato</h4>
            <ul className="space-y-3 text-xs text-blue-100/60 font-medium">
              <li className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-blue-400" /> (88) 99901-0860
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-blue-400" /> alphacupim@gmail.com
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-blue-400 shrink-0" /> Cariri - Ceará
              </li>
            </ul>
          </div>
          
        </div>
        
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[9px] font-bold text-blue-100/20 uppercase tracking-[0.2em]">
          <div className="flex flex-col items-center md:items-start gap-1">
            <p>© {new Date().getFullYear()} Alpha Cupim Qualidade & Segurança.</p>
            <p className="opacity-50 tracking-tighter">CNPJ: 42.552.183/0001-06</p>
          </div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacidade</a>
            <a href="#" className="hover:text-white transition-colors">Termos</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
