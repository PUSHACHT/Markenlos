import React from 'react';
import { ScrollReveal } from './ScrollReveal';

export const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      quote: "Markenlos hat unseren Imagefilm nicht einfach produziert - sie haben verstanden, wer wir sind. Das Ergebnis hat uns selbst überrascht. Unsere Bewerberzahlen stiegen um 40 % innerhalb von drei Monaten.",
      name: "Thomas Becker",
      role: "CEO · Becker Gruppe GmbH",
    },
    {
      quote: "Die Social-Media-Kampagne hat unsere Marke komplett neu positioniert. Professionell, kreativ und immer auf den Punkt - mit Markenlos arbeiten wir nicht mehr mit anderen zusammen.",
      name: "Laura Sommer",
      role: "Head of Marketing · Sommer & Co. KG",
    },
  ];

  return (
    <section id="testimonials" className="bg-[#303030] text-white py-28 md:py-36 px-6 md:px-16 lg:px-24 border-t border-b border-white/5">
      <div className="max-w-[1440px] mx-auto flex flex-col gap-12">
        
        {/* Section Header */}
        <ScrollReveal direction="up">
          <div className="flex flex-col gap-2">
            <p className="text-[24px] sm:text-[30px] md:text-[36px] font-extralight text-white leading-tight">
              Zufriedene
            </p>
            <h2 className="text-[28px] xs:text-[34px] sm:text-[40px] md:text-[48px] font-bold text-white tracking-tight leading-tight break-words hyphens-auto">
              Kunden
            </h2>
            <span className="text-[14px] font-light text-[#39adca] tracking-wider uppercase mt-2">
              Stimmen
            </span>
          </div>
        </ScrollReveal>

        {/* Testimonial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((item, idx) => (
            <ScrollReveal key={idx} direction="up" delay={idx * 150} duration={800}>
              <div 
                className="bg-[#474747] border border-[#1a1a1a] p-8 md:p-11 flex flex-col justify-between rounded-none shadow-xl relative transition-transform hover:-translate-y-1 duration-200 h-full"
              >
                <div className="flex flex-col gap-6">
                  {/* Accent Quotation Mark */}
                  <span className="text-6xl md:text-7xl font-bold text-[#39adca] leading-none select-none font-serif">
                    „
                  </span>
                  
                  <p className="text-base md:text-[18px] font-light text-white leading-relaxed">
                    {item.quote}
                  </p>
                </div>

                <div className="pt-8 mt-6 flex flex-col gap-2">
                  <div className="w-10 h-[1px] bg-white/80" />
                  <p className="text-[16px] font-medium text-white tracking-wide">
                    {item.name}
                  </p>
                  <p className="text-[14px] font-light text-white/80">
                    {item.role}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
};
