import React, { useState } from 'react';
import imgPhoneCall from '../assets/imgPhoneCall.svg';
import imgPlay from '../assets/imgPlay.svg';

// Logos
import imgIdrCoaching1 from '../assets/imgIdrCoaching1.svg';
import imgFronhoferGaleria1 from '../assets/imgFronhoferGaleria1.png';
import imgMaya21 from '../assets/imgMaya21.svg';
import imgImages111 from '../assets/imgImages111.png';
import imgSportTreff201 from '../assets/imgSportTreff201.png';
import imgBerufskollegBleibergquelle1 from '../assets/imgBerufskollegBleibergquelle1.png';
import imgFontUndNZeichenflaeche11370XPng1 from '../assets/imgFontUndNZeichenflaeche11370XPng1.png';
import imgSionImCarreLogoRetina300X1611 from '../assets/imgSionImCarreLogoRetina300X1611.png';
import imgEceLogo1 from '../assets/imgEceLogo1.svg';
import imgKolibriBodenseeLogo1Vectorized from '../assets/imgKolibriBodenseeLogo1Vectorized.svg';
import imgLogoMosecDekra1 from '../assets/imgLogoMosecDekra1.png';
import imgHegauJugendwerkGailingenHegauJugendwerk1 from '../assets/imgHegauJugendwerkGailingenHegauJugendwerk1.svg';
import imgOkinii1 from '../assets/imgOkinii1.png';
import imgAlvesMedia1 from '../assets/imgAlvesMedia1.png';
import imgUnitesocial1 from '../assets/imgUnitesocial1.svg';
import imgVillaFirst1 from '../assets/imgVillaFirst1.png';
import imgSiamTulip1 from '../assets/imgSiamTulip1.png';
import imgKoelnerKompass1 from '../assets/imgKoelnerKompass1.png';
import imgVeltenToennies1 from '../assets/imgVeltenToennies1.png';

interface HeroProps {
  onOpenContact: (type?: string) => void;
  onOpenVideo?: (url?: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenContact }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const heroVideoId = "dQw4w9WgXcQ"; // Can be replaced with any YouTube ID

  const clientLogos = [
    { src: imgIdrCoaching1, alt: 'IDR Coaching' },
    { src: imgFronhoferGaleria1, alt: 'Fronhofer Galeria' },
    { src: imgMaya21, alt: 'Maya' },
    { src: imgImages111, alt: 'Partner' },
    { src: imgSportTreff201, alt: 'Sport Treff 2.0' },
    { src: imgBerufskollegBleibergquelle1, alt: 'Berufskolleg Bleibergquelle' },
    { src: imgFontUndNZeichenflaeche11370XPng1, alt: 'Font & N' },
    { src: imgSionImCarreLogoRetina300X1611, alt: 'Sion im Carré' },
    { src: imgEceLogo1, alt: 'ECE' },
    { src: imgKolibriBodenseeLogo1Vectorized, alt: 'Kolibri Bodensee' },
    { src: imgLogoMosecDekra1, alt: 'Dekra Mosec' },
    { src: imgHegauJugendwerkGailingenHegauJugendwerk1, alt: 'Hegau Jugendwerk' },
    { src: imgOkinii1, alt: 'Okinii' },
    { src: imgAlvesMedia1, alt: 'Alves Media' },
    { src: imgUnitesocial1, alt: 'Unite Social' },
    { src: imgVillaFirst1, alt: 'Villa First' },
    { src: imgSiamTulip1, alt: 'Siam Tulip' },
    { src: imgKoelnerKompass1, alt: 'Kölner Kompass' },
    { src: imgVeltenToennies1, alt: 'Velten & Tönnies' },
  ];

  return (
    <header className="bg-[#303030] pt-24 sm:pt-32 lg:pt-[136px] pb-16 lg:pb-[78px] px-6 sm:px-10 md:px-16 lg:px-24 w-full overflow-hidden">
      <div className="w-full max-w-[1440px] mx-auto flex flex-col gap-12 lg:gap-16">
        
        {/* Main Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Headlines & CTAs */}
          <div className="lg:col-span-7 flex flex-col gap-8 z-10">
            <div className="flex flex-col gap-6">
              <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[92px] xl:text-[112px] font-bold uppercase leading-[1.0] lg:leading-[120px] tracking-[-0.5px] text-white select-none">
                <span className="block">MARKENLOS</span>
                <span className="block">MACHT</span>
                <span className="block">
                  <span className="text-[#39adca]">MARKEN </span>
                  <span>GROẞ!</span>
                </span>
              </h1>

              <p className="text-base sm:text-lg lg:text-[18px] font-light leading-[28px] text-white max-w-2xl">
                Wir helfen Unternehmen dabei, neue Mitarbeiter zu gewinnen, Kunden zu überzeugen und online einfach stark auszusehen. Wir kommen zu euch, packen an und liefern pünktlich ab.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={() => onOpenContact('Beraten lassen')}
                className="bg-[#39adca] hover:bg-[#2ba2bf] border-[1.5px] border-[#39adca] text-[#303030] font-semibold text-[16px] sm:text-[18px] leading-[28px] px-6 sm:px-8 py-3.5 sm:py-4 transition-all duration-200 cursor-pointer text-center"
              >
                Beraten lassen
              </button>

              <button
                onClick={() => onOpenContact('Klaas Anrufen')}
                className="bg-[#303030] hover:bg-white/5 border-[1.5px] border-[#39adca] text-[#39adca] font-semibold text-[16px] sm:text-[18px] leading-[28px] px-6 sm:px-8 py-3.5 sm:py-4 flex items-center justify-center gap-3 transition-all duration-200 cursor-pointer"
              >
                <img src={imgPhoneCall} alt="" className="w-5 h-5 object-contain" />
                <span>Klaas Anrufen</span>
              </button>

              <a
                href="#testimonials"
                className="bg-[#303030] hover:bg-white/5 border-[1.5px] border-white text-white font-semibold text-[16px] sm:text-[18px] leading-[28px] px-6 sm:px-8 py-3.5 sm:py-4 transition-all duration-200 text-center inline-flex items-center justify-center"
              >
                Bewertungen einsehen
              </a>
            </div>
          </div>

          {/* Right Column: Hero Video Showcase (16:9 Aspect Ratio) */}
          <div className="lg:col-span-5 flex flex-col gap-4 sm:gap-6 items-end w-full z-10">
            <div 
              className="bg-[#474747] border border-white aspect-video w-full flex items-center justify-center relative overflow-hidden group shadow-2xl transition-all"
            >
              {isPlaying ? (
                <iframe
                  className="absolute inset-0 w-full h-full border-0"
                  src={`https://www.youtube-nocookie.com/embed/${heroVideoId}?autoplay=1&rel=0`}
                  title="Markenlos Showreel"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              ) : (
                <div 
                  onClick={() => setIsPlaying(true)}
                  className="absolute inset-0 w-full h-full cursor-pointer flex items-center justify-center"
                >
                  {/* YouTube Video Preview Thumbnail */}
                  <img 
                    src={`https://img.youtube.com/vi/${heroVideoId}/hqdefault.jpg`}
                    alt="YouTube Preview" 
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 brightness-90"
                  />

                  {/* Dark subtle gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-black/30 group-hover:bg-black/30 transition-colors" />

                  {/* YouTube watermark indicator badge top left */}
                  <div className="absolute top-3 left-3 bg-black/70 backdrop-blur-sm text-white text-[11px] font-medium px-2.5 py-1 rounded flex items-center gap-1.5 z-10">
                    <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse" />
                    <span>Showreel Preview</span>
                  </div>

                  {/* Play Badge */}
                  <div className="relative z-10 w-[60px] sm:w-[68px] h-[60px] sm:h-[68px] rounded-full bg-[#303030]/90 border border-[#39adca] flex items-center justify-center group-hover:scale-110 group-hover:bg-[#39adca] transition-all duration-300 shadow-2xl">
                    <img src={imgPlay} alt="Play" className="w-6 sm:w-7 h-6 sm:h-7 ml-1 object-contain group-hover:brightness-0" />
                  </div>
                </div>
              )}
            </div>

            {/* Video Subtitle Badge */}
            <div className="bg-[#303030] border border-white px-5 sm:px-6 py-3 w-full sm:w-auto">
              <p className="text-base sm:text-[22px] font-light leading-[30px] text-white text-center sm:text-right">
                Lass uns dein Vorhaben umsetzen
              </p>
            </div>
          </div>

        </div>

        {/* Client Logos Marquee */}
        <div className="pt-8 sm:pt-10 border-t border-white/10 w-full overflow-hidden">
          <div className="w-full relative overflow-hidden py-2">
            <div className="flex gap-10 sm:gap-16 items-center animate-marquee">
              {[...clientLogos, ...clientLogos].map((logo, idx) => (
                <div 
                  key={idx} 
                  className="shrink-0 h-[38px] flex items-center justify-center grayscale opacity-60 hover:grayscale-0 hover:opacity-100 hover:scale-110 transition-all duration-300 cursor-pointer"
                >
                  <img src={logo.src} alt={logo.alt} className="max-h-[32px] sm:max-h-[34px] w-auto max-w-[160px] object-contain" />
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </header>
  );
};


