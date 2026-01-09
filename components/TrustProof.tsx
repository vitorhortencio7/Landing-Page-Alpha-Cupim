
import React, { useState, useEffect } from 'react';
import { Award, Users, MapPin } from 'lucide-react';
import { GlowingEffect } from './ui/glowing-effect';

const TrustCard: React.FC<{ icon: React.ReactNode; title: string; subtitle: string; index: number; isMobile: boolean }> = ({ icon, title, subtitle, index, isMobile }) => {
  const mobileTopOffset = 80 + (index * 20);
  const desktopTopOffset = 100 + (index * 24);
  const zIndex = 10 + index;

  return (
    <div 
      style={{ 
        top: isMobile ? `${mobileTopOffset}px` : `${desktopTopOffset}px`,
        zIndex: zIndex
      } as React.CSSProperties}
      className="card-container group sticky lg:static mb-8 lg:mb-0 p-[2px] rounded-[2.5rem] relative"
    >
      {!isMobile && (
        <GlowingEffect
          spread={40}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
          borderWidth={3}
        />
      )}
      <div className="premium-card relative z-10 h-full">
        {!isMobile && <div className="card-shimmer"></div>}
        <div className="icon-wrapper shrink-0">
          <div className="relative z-10">
            {icon}
          </div>
        </div>
        <div className="card-content flex flex-col justify-center text-left">
          <p className="card-title">{title}</p>
          <p className="card-subtitle">{subtitle}</p>
        </div>
      </div>
    </div>
  );
};

const TrustProof: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 1023);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const trustData = [
    {
      icon: <Award className="w-8 h-8 text-blue-700" />,
      title: "6 ANOS",
      subtitle: "De Experiência no Setor"
    },
    {
      icon: <Users className="w-8 h-8 text-blue-700" />,
      title: "2.500+",
      subtitle: "Clientes Satisfeitos"
    },
    {
      icon: <MapPin className="w-8 h-8 text-blue-700" />,
      title: "CARIRI",
      subtitle: "Juazeiro, Crato e Barbalha"
    }
  ];

  return (
    <section className="bg-white py-16 lg:py-24 relative">
      <div className="max-w-6xl mx-auto px-5">
        <div className="flex flex-col lg:grid lg:grid-cols-3 lg:gap-8 reveal-stagger">
          {trustData.map((item, idx) => (
            <TrustCard 
              key={idx}
              index={idx}
              icon={item.icon}
              title={item.title}
              subtitle={item.subtitle}
              isMobile={isMobile}
            />
          ))}
        </div>
      </div>

      <style>{`
        .card-container {
          perspective: 1000px;
          z-index: 10;
        }

        .premium-card {
          position: relative;
          display: flex;
          align-items: center;
          gap: 1.5rem;
          background: white;
          padding: 2.5rem 2rem;
          border-radius: 2.5rem;
          border: 1px solid rgba(37, 99, 235, 0.08);
          box-shadow: 0 15px 40px -20px rgba(15, 23, 42, 0.1);
          transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);
          overflow: hidden;
        }

        .icon-wrapper {
          display: flex;
          align-items: center;
          justify-content: center;
          background: #f0f7ff;
          width: 4.5rem;
          height: 4.5rem;
          border-radius: 1.25rem;
          flex-shrink: 0;
          transition: all 0.5s ease;
          border: 1px solid rgba(37, 99, 235, 0.05);
        }

        .card-title {
          font-size: 2rem;
          font-weight: 900;
          color: #0f172a;
          line-height: 1;
          letter-spacing: -0.02em;
          margin-bottom: 0.25rem;
        }

        .card-subtitle {
          font-size: 0.65rem;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: #2563eb;
        }

        .card-shimmer {
          position: absolute;
          top: 0;
          left: -100%;
          width: 50%;
          height: 100%;
          background: linear-gradient(
            to right,
            transparent,
            rgba(255, 255, 255, 0.8),
            transparent
          );
          transform: skewX(-25deg);
          transition: 0.75s;
          pointer-events: none;
        }

        @media (min-width: 1024px) {
          .premium-card:hover {
            transform: translateY(-8px) rotateX(4deg) rotateY(-2deg);
            box-shadow: 0 40px 80px -20px rgba(15, 23, 42, 0.15);
            border-color: rgba(37, 99, 235, 0.3);
          }
          .premium-card:hover .card-shimmer {
            left: 150%;
          }
          .premium-card:hover .icon-wrapper {
            background: #1e3a8a;
            transform: scale(1.1) rotate(8deg);
          }
          .premium-card:hover .icon-wrapper svg {
            color: white;
          }
        }
      `}</style>
    </section>
  );
};

export default TrustProof;
