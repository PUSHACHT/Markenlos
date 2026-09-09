import React, { useState, useEffect } from 'react';
import imgPhoneCall from '../assets/imgPhoneCall.svg';
import imgPlay from '../assets/imgPlay.svg';
import heroThumbImg from '../assets/thumbnails/hero-thumb.jpg';

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
  const [scrollY, setScrollY] = useState(0);
  const heroVideoId = "dQw4w9WgXcQ"; // Can be replaced with any YouTube ID

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrollY(window.scrollY);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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

  // Subtle smooth parallax offset for hero content (hardware accelerated)
  const parallaxOffset = Math.min(scrollY * 0.1, 80);

  return (
    <header className="bg-[#303030] min-h-screen flex flex-col justify-between pt-20 sm:pt-24 lg:pt-28 pb-10 sm:pb-14 lg:pb-16 px-4 sm:px-8 md:px-16 lg:px-24 w-full overflow-hidden relative">
      <div className="w-full max-w-[1440px] mx-auto flex-1 flex flex-col justify-between gap-8 lg:gap-12 relative z-10">
        
        {/* Main Hero Grid with subtle parallax */}
        <div 
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center my-auto py-4 sm:py-2 transition-transform duration-75 ease-out"
          style={{
            transform: `translate3d(0, ${parallaxOffset}px, 0)`,
            willChange: 'transform',
          }}
        >
          
          {/* Left Column: Headlines & CTAs */}
          <div className="lg:col-span-7 flex flex-col gap-5 lg:gap-6 z-10">
            <div className="flex flex-col gap-3 sm:gap-4">
              <h1 className="text-[28px] xs:text-[34px] sm:text-[42px] md:text-[52px] lg:text-[63px] xl:text-[77px] 2xl:text-[84px] font-bold uppercase leading-[1.04] tracking-[-0.5px] text-white select-none break-words hyphens-auto">
                <span className="block">MARKENLOS</span>
                <span className="block">MACHT</span>
                <span className="block">
                  <span className="text-[#39adca]">MARKEN </span>
                  <span>GROẞ!</span>
                </span>
              </h1>

              <p className="text-sm sm:text-base lg:text-[16px] xl:text-[18px] font-light leading-[22px] sm:leading-[26px] lg:leading-[27px] text-white/90 max-w-xl">
                Wir helfen Unternehmen dabei, neue Mitarbeiter zu gewinnen, Kunden zu überzeugen und online einfach stark auszusehen. Wir kommen zu euch, packen an und liefern pünktlich ab.
              </p>
            </div>

            {/* CTA Buttons - fully responsive and visible */}
            <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3 sm:gap-4 pt-1">
              <button
                onClick={() => onOpenContact('Beraten lassen')}
                className="bg-[#39adca] hover:bg-[#2ba2bf] border-[1.5px] border-[#39adca] text-[#303030] font-semibold text-[15px] sm:text-[17px] leading-[24px] px-5 sm:px-7 py-3 sm:py-3.5 transition-all duration-200 cursor-pointer text-center"
              >
                Beraten lassen
              </button>

              <button
                onClick={() => onOpenContact('Klaas Anrufen')}
                className="bg-[#303030] hover:bg-white/5 border-[1.5px] border-[#39adca] text-[#39adca] font-semibold text-[15px] sm:text-[17px] leading-[24px] px-5 sm:px-7 py-3 sm:py-3.5 flex items-center justify-center gap-2.5 transition-all duration-200 cursor-pointer"
              >
                <img src={imgPhoneCall} alt="" className="w-4 h-4 object-contain" />
                <span>Klaas Anrufen</span>
              </button>

              <a
                href="#testimonials"
                className="bg-[#303030] hover:bg-white/5 border-[1.5px] border-white text-white font-semibold text-[15px] sm:text-[17px] leading-[24px] px-5 sm:px-7 py-3 sm:py-3.5 transition-all duration-200 text-center inline-flex items-center justify-center"
              >
                Bewertungen einsehen
              </a>
            </div>
          </div>

          {/* Right Column: Hero Video Showcase (Locked 16:9 Aspect Ratio on all devices) */}
          <div className="lg:col-span-5 flex flex-col items-center lg:items-end w-full z-10">
            <div 
              className="bg-[#474747] border border-white aspect-video w-full max-w-[560px] flex items-center justify-center relative overflow-hidden group shadow-2xl transition-all rounded-[10px] sm:rounded-none"
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
                  {/* Local Video Preview Thumbnail (100% GDPR Compliant, no initial Google connection) */}
                  <img 
                    src={heroThumbImg}
                    alt="YouTube Preview" 
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 brightness-90"
                  />

                  {/* Dark subtle gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-black/30 group-hover:bg-black/30 transition-colors" />

                  {/* YouTube watermark indicator badge top left */}
                  <div className="absolute top-2.5 sm:top-3 left-2.5 sm:left-3 bg-black/70 backdrop-blur-sm text-white text-[10px] sm:text-[11px] font-medium px-2 sm:px-2.5 py-0.5 sm:py-1 rounded flex items-center gap-1.5 z-10">
                    <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse" />
                    <span>Showreel Preview</span>
                  </div>

                  {/* Play Badge */}
                  <div className="relative z-10 w-[50px] sm:w-[64px] h-[50px] sm:h-[64px] rounded-full bg-[#303030]/90 border border-[#39adca] flex items-center justify-center group-hover:scale-110 group-hover:bg-[#39adca] transition-all duration-300 shadow-2xl">
                    <img src={imgPlay} alt="Play" className="w-5 sm:w-6 h-5 sm:h-6 ml-1 object-contain group-hover:brightness-0" />
                  </div>

                  {/* 2-Click Transparency Note */}
                  <div className="absolute bottom-2 sm:bottom-3 inset-x-2 sm:inset-x-3 z-10 bg-black/75 backdrop-blur-md px-2.5 sm:px-3 py-1 sm:py-1.5 rounded flex items-center justify-between border border-white/10 text-[9px] sm:text-[11px] text-white/80">
                    <span>Mit Klick auf Play wird das Video von YouTube geladen</span>
                    <span className="text-[#39adca] font-medium hidden sm:inline">2-Klick Datenschutz</span>
                  </div>
                </div>
              )}
            </div>
          </div>

        </div>

        {/* Client Logos Marquee - with comfortable padding & separation */}
        <div className="pt-6 sm:pt-8 pb-2 border-t border-white/10 w-full shrink-0 overflow-hidden">
          <div className="w-full relative overflow-hidden py-1">
            <div className="flex gap-8 sm:gap-14 items-center animate-marquee">
              {[...clientLogos, ...clientLogos].map((logo, idx) => (
                <div 
                  key={idx} 
                  className="shrink-0 h-[28px] sm:h-[36px] flex items-center justify-center grayscale opacity-60 hover:grayscale-0 hover:opacity-100 hover:scale-110 transition-all duration-300 cursor-pointer"
                >
                  <img src={logo.src} alt={logo.alt} className="max-h-[24px] sm:max-h-[32px] w-auto max-w-[130px] sm:max-w-[150px] object-contain" />
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </header>
  );
};


