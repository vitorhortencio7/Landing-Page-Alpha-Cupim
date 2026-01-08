
import React from 'react';
import Header from './components/Header.tsx';
import Hero from './components/Hero.tsx';
import WorkGallery from './components/WorkGallery.tsx';
import ClientCarousel from './components/ClientCarousel.tsx';
import TrustProof from './components/TrustProof.tsx';
import Services from './components/Services.tsx';
import Benefits from './components/Benefits.tsx';
import HowItWorks from './components/HowItWorks.tsx';
import Testimonials from './components/Testimonials.tsx';
import FAQ from './components/FAQ.tsx';
import CTA from './components/CTA.tsx';
import Footer from './components/Footer.tsx';
import FloatingWhatsApp from './components/FloatingWhatsApp.tsx';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <section id="inicio" className="scroll-mt-32">
          <Hero />
        </section>
        
        <WorkGallery />
        <ClientCarousel />
        <TrustProof />
        
        <section id="servicos" className="scroll-mt-32">
          <Services />
        </section>
        
        <section id="beneficios" className="scroll-mt-32">
          <Benefits />
        </section>
        
        <section id="como-funciona" className="scroll-mt-32">
          <HowItWorks />
        </section>
        
        <Testimonials />
        <FAQ />
        
        <section id="contato" className="scroll-mt-32">
          <CTA />
        </section>
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default App;
