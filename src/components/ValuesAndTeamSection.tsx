import React from 'react';
import { Logo } from './Logo';
import imgArrowRight1 from '../assets/imgArrowRight1.svg';
import imgIconSmith from '../assets/imgIconSmith.svg';
import imgStripe from '../assets/imgStripe.svg';
import imgPush8 from '../assets/imgPush8.svg';
import imgBrigs from '../assets/imgBrigs.svg';
import imgPush from '../assets/imgPush.svg';
import { ScrollReveal } from './ScrollReveal';

interface ValuesAndTeamSectionProps {
  onOpenContact: (topic?: string) => void;
}

export const ValuesAndTeamSection: React.FC<ValuesAndTeamSectionProps> = ({ onOpenContact }) => {
  return (
    <>
      {/* 1. Werteversprechen Section (Dark #303030) */}
      <section id="ueber-uns" className="bg-[#303030] text-white py-20 lg:py-[128px] px-6 sm:px-10 md:px-16 lg:px-24 w-full overflow-hidden">
        <div className="w-full max-w-[1440px] mx-auto flex flex-col gap-10 lg:gap-12">
          
          <ScrollReveal direction="up" distance={25}>
            <div className="flex flex-col">
              <p className="text-[24px] sm:text-[30px] lg:text-[36px] font-extralight leading-tight text-white">
                Wir und unser
              </p>
              <h2 className="text-[28px] xs:text-[34px] sm:text-[40px] font-bold leading-tight text-white tracking-[-0.5px] break-words hyphens-auto">
                Werte&shy;versprechen
              </h2>
            </div>
          </ScrollReveal>

          <div className="flex flex-col gap-8 max-w-5xl">
            {/* Quote (Figma: Montserrat Thin Italic 56px, leading 64px) */}
            <ScrollReveal direction="up" distance={30} delay={100}>
              <p className="text-2xl sm:text-4xl md:text-[56px] font-thin italic leading-[1.2] md:leading-[64px] text-white font-serif">
                „Wir bieten Partnerschaft, keine leeren Versprechen"
              </p>
            </ScrollReveal>

            {/* Copy (Figma: Light 18px, leading 28px) */}
            <ScrollReveal direction="up" distance={25} delay={200}>
              <div className="flex flex-col gap-4 text-[16px] sm:text-[18px] font-light leading-[28px] text-white">
                <p>Marketing... bei so manchen KMU-Geschäftsführern stellen sich da verständlicherweise die Fußnägel auf.</p>
                <p>Intransparente Prozesse & Rechnungen, nicht eingehaltene Deadlines und leere Reichweitenversprechen dominieren den Dienstleistungssektor – wir wollen damit Schluss machen.</p>
                <p>Wir bieten euch kein leeres „Wir machen euch viral". Wir bieten Engagement, Expertise und ein autonomes Team, das eure Unternehmensziele versteht.</p>
              </div>

              {/* Link (Figma: Regular 14px text-white) */}
              <button 
                onClick={() => onOpenContact('Team kennenlernen')}
                className="flex items-center gap-2 text-[14px] font-normal leading-[20px] text-white hover:text-[#39adca] transition-colors cursor-pointer w-max pt-4"
              >
                <span>Das Team kennenlernen</span>
                <img src={imgArrowRight1} alt="" className="w-3.5 h-3 object-contain" />
              </button>
            </ScrollReveal>
          </div>

        </div>
      </section>

      {/* 2. Team Section (White Background) */}
      <section id="team" className="bg-white py-20 lg:py-[128px] px-6 sm:px-10 md:px-16 lg:px-24 w-full overflow-hidden">
        <div className="w-full max-w-[1440px] mx-auto flex flex-col gap-12 lg:gap-16 items-center">
          
          {/* Large Staggered Markenlos Logo (Figma: 1022px width) */}
          <ScrollReveal direction="up" distance={25}>
            <div className="w-full max-w-4xl flex items-center justify-center py-4">
              <Logo size="large" theme="light" />
            </div>
          </ScrollReveal>

          {/* Team Partner Cards (Figma: A10, SMITH VISUALS, PUSH & 8) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl">
            
            {/* Card 1: A10 (Figma: bg-[#303030] border-[0.795px] border-white h-[159px]) */}
            <ScrollReveal direction="up" distance={30} delay={100}>
              <div className="bg-[#303030] border-[0.795px] border-white h-[159px] flex items-center justify-center shadow-[0px_3.18px_82px_rgba(0,0,0,0.04)]">
                <div className="text-[56px] font-extrabold leading-[64px] tracking-[-1px]">
                  <span className="text-white">A</span>
                  <span className="text-[#39adca]">10</span>
                </div>
              </div>
            </ScrollReveal>

            {/* Card 2: SMITH VISUALS */}
            <ScrollReveal direction="up" distance={30} delay={200}>
              <div className="bg-[#303030] border-[0.795px] border-white h-[159px] flex items-center justify-center p-6 shadow-[0px_3.18px_82px_rgba(0,0,0,0.04)]">
                <div className="flex items-center gap-3">
                  <img src={imgIconSmith} alt="" className="h-8 object-contain" />
                  <div className="text-[26px] sm:text-[31.8px] font-extrabold leading-[38px]">
                    <span className="text-[#39adca]">SMITH</span>
                    <span className="text-white"> VISUALS</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Card 3: PUSH & 8 */}
            <ScrollReveal direction="up" distance={30} delay={300}>
              <div className="bg-[#303030] border-[0.795px] border-white h-[159px] flex items-center justify-center shadow-[0px_3.18px_82px_rgba(0,0,0,0.04)] relative overflow-hidden">
                <div className="relative flex items-center justify-center w-full">
                  <img src={imgStripe} alt="" className="absolute w-[280px] h-[90px] object-contain opacity-90" />
                  <div className="relative z-10 flex items-center gap-2">
                    <img src={imgPush} alt="PUSH" className="h-8 object-contain" />
                    <img src={imgBrigs} alt="&" className="h-4 object-contain" />
                    <img src={imgPush8} alt="8" className="h-8 object-contain" />
                  </div>
                </div>
              </div>
            </ScrollReveal>

          </div>

        </div>
      </section>
    </>
  );
};

