
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import WorkGallery from './components/WorkGallery';
import ClientCarousel from './components/ClientCarousel';
import TrustProof from './components/TrustProof';
import Services from './components/Services';
import Benefits from './components/Benefits';
import HowItWorks from './components/HowItWorks';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import CTA from './components/CTA';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

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
