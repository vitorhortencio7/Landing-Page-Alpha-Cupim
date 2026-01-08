
import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQItem: React.FC<{ q: string; a: string }> = ({ q, a }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-gray-200 last:border-0">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between py-4 text-left focus:outline-none"
      >
        <span className="font-bold text-blue-900 pr-4 leading-tight">{q}</span>
        {isOpen ? <ChevronUp className="w-5 h-5 text-blue-500" /> : <ChevronDown className="w-5 h-5 text-blue-500" />}
      </button>
      {isOpen && (
        <div className="pb-4 text-sm text-gray-600 animate-fadeIn">
          {a}
        </div>
      )}
    </div>
  );
};

const FAQ: React.FC = () => {
  const faqs = [
    {
      q: "Preciso sair de casa durante a dedetização?",
      a: "Para pulverização comum, recomendamos 2 a 4 horas de afastamento, especialmente para crianças e pets. Se usarmos apenas gel, não é necessário sair."
    },
    {
      q: "O produto tem cheiro forte?",
      a: "Trabalhamos com os melhores produtos do mercado. Temos opções totalmente sem cheiro que são muito eficazes."
    },
    {
      q: "Quanto tempo dura a garantia?",
      a: "Nossa garantia varia de 3 meses a 1 ano, dependendo da praga e do local. Entregamos certificado de garantia por escrito."
    },
    {
      q: "Qual o valor da visita para orçamento?",
      a: "A visita técnica e o orçamento são 100% gratuitos para toda a região de Juazeiro, Crato e Barbalha."
    }
  ];

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-extrabold text-blue-900 mb-8 text-center">Dúvidas Comuns</h2>
        <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
          {faqs.map((f, i) => <FAQItem key={i} q={f.q} a={f.a} />)}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
