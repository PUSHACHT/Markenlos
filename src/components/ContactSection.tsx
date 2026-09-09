import React from 'react';
import imgArrowRight2 from '../assets/imgArrowRight2.svg';
import { ScrollReveal } from './ScrollReveal';

interface ContactSectionProps {
  onOpenContact: (type?: string) => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenContact }) => {
  return (
    <section id="kontakt" className="bg-[#303030] text-white py-20 lg:py-[128px] px-6 sm:px-10 md:px-16 lg:px-24 w-full overflow-hidden">
      <div className="w-full max-w-[1440px] mx-auto flex flex-col gap-10 lg:gap-12 items-center text-center">
        
        <div className="w-full h-px bg-white/20 mb-4" />

        <ScrollReveal direction="up" distance={30}>
          <div className="flex flex-col gap-6 items-center max-w-4xl">
            <p className="text-[14px] font-light leading-[20px] text-[#39adca] tracking-widest uppercase">
              KONTAKT
            </p>

            <h2 className="text-2xl xs:text-3xl sm:text-5xl md:text-[64px] lg:text-[72px] font-extralight leading-[1.1] md:leading-[76px] text-white break-words hyphens-auto">
              <span>Bereit für euren </span>
              <span className="font-bold">
                <span className="text-[#39adca]">digitalen</span>
                <span> Auftritt?</span>
              </span>
            </h2>

            <p className="text-[16px] sm:text-[20px] font-light leading-[28px] text-white max-w-[640px]">
              Lass uns in 15 Minuten prüfen, ob und wie wir dein Projekt umsetzen können. Ehrlich & ohne Verkaufsdruck.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal direction="up" distance={20} delay={150}>
          <div className="pt-2 w-full sm:w-auto">
            <button
              onClick={() => onOpenContact('Unverbindliches Erstgespräch')}
              className="w-full sm:w-auto bg-[#303030] hover:bg-[#39adca] hover:text-[#303030] border-2 border-[#39adca] text-white font-semibold text-[18px] sm:text-[20px] leading-[28px] px-6 sm:px-16 py-5 sm:py-6 flex items-center justify-center gap-3 transition-all cursor-pointer group shadow-2xl"
            >
              <span>Unverbindliches Erstgespräch vereinbaren</span>
              <img src={imgArrowRight2} alt="" className="w-4 h-3.5 object-contain group-hover:brightness-0" />
            </button>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
};

