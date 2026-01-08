
import React, { useState, useEffect } from 'react';
import { Phone, Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // URL oficial fornecida pelo usuário
  const LOGO_URL = "https://i.ibb.co/Nnns7snz/Logo-Alpha-Cupim.png";

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: 'Início', href: '#inicio' },
    { name: 'Serviços', href: '#servicos' },
    { name: 'Diferenciais', href: '#beneficios' },
    { name: 'Como Funciona', href: '#como-funciona' },
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const id = href.substring(1);
      const element = document.getElementById(id);
      
      if (element) {
        if (isMenuOpen) {
          closeMenu();
          setTimeout(() => {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }, 150);
        } else {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    }
  };

  return (
    <header className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${isScrolled ? 'py-3' : 'py-5'}`}>
      <div className="max-w-7xl mx-auto px-4">
        <div className={`relative flex items-center justify-between rounded-3xl px-6 py-3 transition-all duration-500 ${isScrolled ? 'bg-white/80 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.08)] border border-white/40' : 'bg-transparent'}`}>
          
          <div className="flex items-center">
            <a href="#inicio" onClick={(e) => handleAnchorClick(e, '#inicio')} className="transition-transform active:scale-95">
              <img 
                src={LOGO_URL} 
                alt="Alpha Cupim" 
                className={`h-10 w-auto object-contain transition-all duration-500 ${!isScrolled ? 'brightness-0 invert' : ''}`}
                onError={(e) => { e.currentTarget.style.display = 'none'; }}
              />
            </a>
          </div>

          <nav className="hidden lg:flex items-center gap-8">
            {menuItems.map((item) => (
              <a 
                key={item.name} 
                href={item.href} 
                onClick={(e) => handleAnchorClick(e, item.href)}
                className={`text-sm font-bold uppercase tracking-widest transition-all hover:text-blue-500 ${isScrolled ? 'text-blue-900/70' : 'text-white/70'}`}
              >
                {item.name}
              </a>
            ))}
          </nav>
          
          <div className="flex items-center gap-4">
            <a 
              href="tel:88999010860" 
              className="hidden sm:flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-2xl text-xs font-black uppercase tracking-widest transition-all shadow-lg hover:shadow-blue-500/30 active:scale-95 border border-blue-400/20"
            >
              <Phone className="w-3.5 h-3.5" />
              Ligar Agora
            </a>

            <button 
              className={`lg:hidden p-2 rounded-xl transition-colors ${isScrolled ? 'text-blue-950 bg-blue-50' : 'text-white bg-white/10'}`}
              onClick={toggleMenu}
              aria-label="Menu"
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden absolute top-full left-0 w-full transition-all duration-500 ease-in-out ${isMenuOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-4 pointer-events-none'}`}>
        <div className="mx-4 mt-2 bg-white rounded-3xl p-6 shadow-2xl border border-gray-100">
          <nav className="flex flex-col gap-4">
            {menuItems.map((item) => (
              <a 
                key={item.name} 
                href={item.href} 
                onClick={(e) => handleAnchorClick(e, item.href)}
                className="text-lg font-black text-blue-950 border-b border-gray-50 pb-2 hover:text-blue-600 transition-colors"
              >
                {item.name}
              </a>
            ))}
            <a 
              href="tel:88999010860"
              className="mt-4 bg-blue-600 text-white p-4 rounded-2xl text-center font-black flex items-center justify-center gap-3 shadow-lg shadow-blue-600/20 active:scale-95 transition-all"
            >
              <Phone className="w-5 h-5" />
              FALAR COM ESPECIALISTA
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
