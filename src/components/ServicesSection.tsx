import React from 'react';
import imgArrowRight from '../assets/imgArrowRight.svg';
import imgHubRing from '../assets/imgHubRing.svg';
import imgHubRingStroke from '../assets/imgHubRingStroke.svg';
import imgGroupServices1 from '../assets/imgGroupServices1.svg';
import imgGroupServices2 from '../assets/imgGroupServices2.svg';

interface ServicesSectionProps {
  onOpenContact: (service?: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onOpenContact }) => {
  const services = [
    {
      id: 'imagefilm',
      title: 'Imagefilm',
      desc: 'Wir erzählen die Geschichte eurer Marke – visuell, emotional und unverwechselbar. Von der Konzeption bis zum finalen Schnitt: Filme, die Eindruck hinterlassen.',
      side: 'left',
    },
    {
      id: 'webdesign',
      title: 'Webdesign und -entwicklung',
      desc: 'Digitale Erlebnisse, die überzeugen. Wir gestalten und entwickeln Websites, die eure Marke ins beste Licht rücken – responsiv, performant und nutzerfreundlich.',
      side: 'left',
    },
    {
      id: 'recruiting',
      title: 'Recruiting & Mitarbeitergewinnung',
      desc: 'Die richtigen Talente finden und begeistern. Wir entwickeln authentische Employer-Branding-Kampagnen, die eure Unternehmenskultur erlebbar machen und die passenden Menschen anziehen.',
      side: 'right',
    },
    {
      id: 'social',
      title: 'Social Media Management',
      desc: 'Konsistente Markenpräsenz auf allen Kanälen. Strategie, Content-Erstellung und Community-Management aus einer Hand.',
      side: 'right',
    },
  ];

  return (
    <section id="services" className="bg-white text-[#303030] py-28 md:py-36 px-6 md:px-16 lg:px-24 relative overflow-hidden">
      <div className="max-w-[1440px] mx-auto flex flex-col gap-16">
        
        {/* Section Header */}
        <div className="flex flex-col gap-2">
          <p className="text-[36px] font-extralight text-[#303030] leading-none">
            Unsere
          </p>
          <h2 className="text-[40px] md:text-[48px] font-bold text-[#303030] tracking-tight leading-none">
            Dienstleistungen
          </h2>
          <span className="text-[14px] font-light text-[#39adca] tracking-wider uppercase mt-2">
            Services
          </span>
        </div>

        {/* Services Hub & Cards Layout */}
        <div className="relative">
          {/* Desktop Central Diagram View */}
          <div className="hidden lg:grid grid-cols-3 gap-8 items-center py-12">
            
            {/* Left Column: Imagefilm & Webdesign */}
            <div className="flex flex-col gap-12 z-10">
              {services.filter(s => s.side === 'left').map((service) => (
                <div 
                  key={service.id}
                  className="bg-white border border-[#2a2725]/25 rounded-[24px] p-8 shadow-[0px_12px_14px_rgba(0,0,0,0.04)] flex flex-col gap-4 hover:border-[#39adca] transition-all duration-300 hover:shadow-xl"
                >
                  <div className="w-14 h-1 bg-[#39adca] rounded-full" />
                  <h3 className="text-2xl xl:text-3xl font-bold text-[#303030] tracking-tight leading-snug">
                    {service.title}
                  </h3>
                  <p className="text-base font-light text-[#303030]/90 leading-relaxed">
                    {service.desc}
                  </p>
                  <button 
                    onClick={() => onOpenContact(service.title)}
                    className="flex items-center gap-2 text-xs font-light text-[#39adca] tracking-wider uppercase pt-2 cursor-pointer hover:underline group"
                  >
                    <span>Mehr erfahren</span>
                    <img src={imgArrowRight} alt="" className="w-3 h-2.5 transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              ))}
            </div>

            {/* Center Column: Hub Ring */}
            <div className="flex items-center justify-center relative p-8">
              {/* Outer decorative SVG branches */}
              <div className="absolute inset-0 flex flex-col items-center justify-between pointer-events-none scale-125 z-0">
                <img src={imgGroupServices1} alt="" className="w-full object-contain opacity-80" />
                <img src={imgGroupServices2} alt="" className="w-full object-contain opacity-80 mt-12" />
              </div>


              {/* Rotating outer ring */}
              <div className="relative w-[340px] h-[340px] flex items-center justify-center">
                <img 
                  src={imgHubRing} 
                  alt="" 
                  className="absolute inset-0 w-full h-full object-contain animate-spin-slow opacity-90" 
                />
                <img 
                  src={imgHubRingStroke} 
                  alt="" 
                  className="absolute inset-0 w-full h-full object-contain" 
                />

                {/* Central Hub Circle */}
                <div className="w-[240px] h-[240px] rounded-full bg-[#303030] text-white flex flex-col items-center justify-center text-center p-6 shadow-2xl z-20 border-4 border-white">
                  <p className="text-2xl font-bold leading-tight">
                    Unsere
                  </p>
                  <p className="text-2xl font-bold text-[#39adca] leading-tight">
                    Dienstleistungen
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column: Recruiting & Social Media */}
            <div className="flex flex-col gap-12 z-10">
              {services.filter(s => s.side === 'right').map((service) => (
                <div 
                  key={service.id}
                  className="bg-white border border-[#2a2725]/25 rounded-[24px] p-8 shadow-[0px_12px_14px_rgba(0,0,0,0.04)] flex flex-col gap-4 hover:border-[#39adca] transition-all duration-300 hover:shadow-xl"
                >
                  <div className="w-14 h-1 bg-[#39adca] rounded-full" />
                  <h3 className="text-2xl xl:text-3xl font-bold text-[#303030] tracking-tight leading-snug">
                    {service.title}
                  </h3>
                  <p className="text-base font-light text-[#303030]/90 leading-relaxed">
                    {service.desc}
                  </p>
                  <button 
                    onClick={() => onOpenContact(service.title)}
                    className="flex items-center gap-2 text-xs font-light text-[#39adca] tracking-wider uppercase pt-2 cursor-pointer hover:underline group"
                  >
                    <span>Mehr erfahren</span>
                    <img src={imgArrowRight} alt="" className="w-3 h-2.5 transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              ))}
            </div>

          </div>

          {/* Mobile & Tablet Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:hidden">
            {services.map((service) => (
              <div 
                key={service.id}
                className="bg-white border border-[#2a2725]/25 rounded-[24px] p-8 shadow-[0px_12px_14px_rgba(0,0,0,0.04)] flex flex-col gap-4 hover:border-[#39adca] transition-all"
              >
                <div className="w-14 h-1 bg-[#39adca] rounded-full" />
                <h3 className="text-2xl font-bold text-[#303030]">
                  {service.title}
                </h3>
                <p className="text-base font-light text-[#303030]/90 leading-relaxed">
                  {service.desc}
                </p>
                <button 
                  onClick={() => onOpenContact(service.title)}
                  className="flex items-center gap-2 text-xs font-light text-[#39adca] tracking-wider uppercase pt-2 group"
                >
                  <span>Mehr erfahren</span>
                  <img src={imgArrowRight} alt="" className="w-3 h-2.5 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
