import React from 'react';
import { ScrollReveal } from './ScrollReveal';

export const ProcessSection: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'Analyse',
      desc: 'Wir verstehen eure Marke, sprechen mit eurem Team, ermitteln Ziele und eure Zielgruppe – bevor wir einen einzigen Pixel setzen.',
    },
    {
      num: '02',
      title: 'Strategie',
      desc: 'Aus Erkenntnissen wird ein klarer Plan. Wir definieren Botschaft, Format und Kanal für maximale Wirkung.',
    },
    {
      num: '03',
      title: 'Umsetzung',
      desc: 'Produktion auf höchstem Niveau. Unser Team realisiert eure Vision – präzise, kreativ und termingerecht.',
    },
    {
      num: '04',
      title: 'Optimierung',
      desc: 'Wir messen, lernen und verbessern kontinuierlich – damit eure Marke langfristig wächst.',
    },
  ];

  return (
    <section id="prozess" className="bg-[#303030] text-white py-28 md:py-36 px-6 md:px-16 lg:px-24 border-t border-b border-white/5">
      <div className="max-w-[1440px] mx-auto flex flex-col gap-12">
        
        {/* Section Header */}
        <ScrollReveal direction="up">
          <div className="flex flex-col gap-2">
            <p className="text-[36px] font-extralight text-white leading-none">
              Der
            </p>
            <h2 className="text-[40px] md:text-[48px] font-bold text-white tracking-tight leading-none">
              Prozess
            </h2>
            <span className="text-[14px] font-light text-[#39adca] tracking-wider uppercase mt-2">
              Prozess
            </span>
          </div>
        </ScrollReveal>

        {/* 4 Process Step Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, idx) => (
            <ScrollReveal key={step.num} direction="up" delay={idx * 120} duration={750}>
              <div 
                className="bg-[#474747] border border-[#1a1a1a] p-6 lg:p-8 flex flex-col gap-4 rounded-none shadow-lg relative group hover:border-[#39adca] transition-all duration-300 hover:-translate-y-1 h-full"
              >
                <div className="flex flex-col gap-1">
                  <span className="text-5xl lg:text-6xl font-extrabold text-white tracking-tighter">
                    {step.num}
                  </span>
                  <h3 className="text-2xl lg:text-3xl font-bold text-[#39adca] tracking-tight">
                    {step.title}
                  </h3>
                </div>

                <div className="w-full h-[1px] bg-white/70" />

                <p className="text-[16px] font-light text-white/90 leading-relaxed pt-1">
                  {step.desc}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
};
