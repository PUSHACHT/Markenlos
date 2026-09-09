import React, { useState } from 'react';
import imgRow from '../assets/imgRow.svg';
import { Play, TrendingUp, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';
import { useShortformReels } from '../hooks/useShortformReels';

interface ProjectsSectionProps {
  onOpenVideo?: (url?: string) => void;
  onOpenContact?: (type?: string) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ onOpenContact }) => {
  const { reels: shortformReels } = useShortformReels();
  const [shortformIndex, setShortformIndex] = useState(0);
  const [longformIndex, setLongformIndex] = useState(0);
  const [webIndex, setWebIndex] = useState(0);
  const [playingReelIndex, setPlayingReelIndex] = useState<number | null>(null);
  const [isPlayingLongform, setIsPlayingLongform] = useState(false);

  const longformProjects = [
    {
      title: "IMAGEFILM & KORPORATE IDENTITY",
      desc: "Cinematische Darstellung des Familienunternehmens mit Fokus auf Innovation, Nachhaltigkeit und regionale Verbundenheit.",
      kpi: "Erreichte 45.000 Entscheidungsträger & 40% mehr Initiativbewerbungen.",
      company: "Becker Gruppe GmbH",
      duration: "03:45 Min",
      videoId: "dQw4w9WgXcQ",
      thumb: "https://images.unsplash.com/photo-1536240478700-b869070f9279?w=1200&auto=format&fit=crop&q=80",
    },
    {
      title: "DOKUMENTATION & MEILENSTEIN-EVENT",
      desc: "Begleitender Imagefilm zum 25-jährigen Firmenjubiläum inklusive Drohnenaufnahmen und Mitarbeiter-Interviews.",
      kpi: "Ausgezeichnet für beste B2B-Unternehmenskommunikation 2024.",
      company: "Velten & Tönnies",
      duration: "05:12 Min",
      videoId: "dQw4w9WgXcQ",
      thumb: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=1200&auto=format&fit=crop&q=80",
    },
    {
      title: "CINEMA WERBESPOT & TV-KAMPAGNE",
      desc: "Gefühlvolles Storytelling und moderne Kameraführung für maximale emotionale Bindung und Markenbekanntheit.",
      kpi: "+310% gesteigerte Markenbekanntheit im regionalen Raum.",
      company: "IDR Coaching",
      duration: "02:30 Min",
      videoId: "dQw4w9WgXcQ",
      thumb: "https://images.unsplash.com/photo-1518133910546-b6c2fb7d79e3?w=1200&auto=format&fit=crop&q=80",
    },
    {
      title: "JUBILÄUMSFILM & EMOTIONAL BRANDING",
      desc: "Ein Vierteljahrhundert Unternehmertum in einem packenden 4K-Meisterwerk, erzählt von den Gründern selbst.",
      kpi: "Über 120.000 organische Videoaufrufe auf YouTube.",
      company: "Hegau Jugendwerk",
      duration: "04:18 Min",
      videoId: "dQw4w9WgXcQ",
      thumb: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=1200&auto=format&fit=crop&q=80",
    },
  ];

  const webProjects = [
    {
      title: "DIGITALE BRAND EXPERIENCE & CMS",
      desc: "Kompletter Relaunch der Unternehmens-Website mit integriertem Bewerber-Portal, 3D-Showcase und 100/100 Lighthouse Performance.",
      kpi: "+180% mehr Anfragen über das Kontaktformular im 1. Monat",
      company: "Siam Tulip Gastro",
      url: "https://markenlos.de",
      badge: "Gastro & CMS",
    },
    {
      title: "HIGH-CONVERTING LANDING PAGE",
      desc: "Minimalistisches, klares Webdesign mit klarem Fokus auf Leadgenerierung und nahtloser Terminbuchung.",
      kpi: "Conversion-Rate von 8,4% auf bezahlte Ads",
      company: "Villa First Real Estate",
      url: "https://markenlos.de",
      badge: "Real Estate Landing Page",
    },
    {
      title: "E-COMMERCE & B2B PLATTFORM",
      desc: "High-Performance Shop-System mit moderner API-Anbindung, schnellen Ladezeiten und intuitiver Nutzerführung.",
      kpi: "+65% höherer durchschnittlicher Warenkorbwert",
      company: "Kolibri Bodensee",
      url: "https://markenlos.de",
      badge: "Shop & B2B Portal",
    },
    {
      title: "MODERNES KARRIERE- & BEWERBERPORTAL",
      desc: "Mitarbeitergewinnung in unter 60 Sekunden ohne Anschreiben. 1-Klick-Bewerbung optimiert für Smartphones.",
      kpi: "Über 350 eingegangene Bewerbungen im ersten Quartal",
      company: "Handwerksgruppe Süd",
      url: "https://markenlos.de",
      badge: "Recruiting Funnel",
    },
  ];

  // Infinite loop slide navigation helpers
  const handleShortformPrev = () => {
    setShortformIndex((prev) => (prev - 1 + shortformReels.length) % shortformReels.length);
    setPlayingReelIndex(null);
  };
  const handleShortformNext = () => {
    setShortformIndex((prev) => (prev + 1) % shortformReels.length);
    setPlayingReelIndex(null);
  };

  const handleLongformPrev = () => {
    setLongformIndex((prev) => (prev - 1 + longformProjects.length) % longformProjects.length);
    setIsPlayingLongform(false);
  };
  const handleLongformNext = () => {
    setLongformIndex((prev) => (prev + 1) % longformProjects.length);
    setIsPlayingLongform(false);
  };

  const handleWebPrev = () => {
    setWebIndex((prev) => (prev - 1 + webProjects.length) % webProjects.length);
  };
  const handleWebNext = () => {
    setWebIndex((prev) => (prev + 1) % webProjects.length);
  };

  // Get current 3 displayed reels for infinite sliding window
  const displayedShortformReels = [
    shortformReels[(shortformIndex) % shortformReels.length],
    shortformReels[(shortformIndex + 1) % shortformReels.length],
    shortformReels[(shortformIndex + 2) % shortformReels.length],
  ];

  return (
    <section id="projekte" className="bg-white text-[#303030] py-20 lg:py-[128px] px-6 sm:px-10 md:px-16 lg:px-24 w-full overflow-hidden">
      <div className="w-full max-w-[1440px] mx-auto flex flex-col gap-12 lg:gap-16">
        
        {/* Section Header */}
        <ScrollReveal direction="up" distance={25}>
          <div className="flex flex-col">
            <p className="text-[32px] sm:text-[36px] font-extralight leading-[48px] text-[#303030]">
              Unsere
            </p>
            <h2 className="text-[36px] sm:text-[40px] font-bold leading-[48px] text-[#303030] tracking-[-0.5px]">
              Projektlandschaft
            </h2>
          </div>
        </ScrollReveal>

        {/* 1. Showcases Shortform (9:16) */}
        <ScrollReveal direction="up" distance={30} delay={100}>
          <div className="flex flex-col gap-6 relative">
            <p className="text-[14px] font-light leading-[20px] text-[#39adca]">
              Showcases Shortform (9:16)
            </p>

          {/* Carousel Wrapper with Desktop Floating Arrows */}
          <div className="relative">
            {/* Desktop Left Float Arrow */}
            <button
              onClick={handleShortformPrev}
              className="hidden lg:flex absolute -left-7 xl:-left-12 2xl:-left-14 top-1/2 -translate-y-1/2 z-20 w-11 h-11 xl:w-12 xl:h-12 rounded-full bg-transparent hover:bg-[#39adca] text-[#303030]/35 hover:text-[#303030] border border-[#303030]/15 hover:border-[#39adca] items-center justify-center transition-all duration-300 hover:shadow-lg cursor-pointer group"
              aria-label="Vorherige Reels"
            >
              <ChevronLeft className="w-6 h-6 transition-transform group-hover:-translate-x-0.5" />
            </button>

            {/* Desktop Right Float Arrow */}
            <button
              onClick={handleShortformNext}
              className="hidden lg:flex absolute -right-7 xl:-right-12 2xl:-right-14 top-1/2 -translate-y-1/2 z-20 w-11 h-11 xl:w-12 xl:h-12 rounded-full bg-transparent hover:bg-[#39adca] text-[#303030]/35 hover:text-[#303030] border border-[#303030]/15 hover:border-[#39adca] items-center justify-center transition-all duration-300 hover:shadow-lg cursor-pointer group"
              aria-label="Nächste Reels"
            >
              <ChevronRight className="w-6 h-6 transition-transform group-hover:translate-x-0.5" />
            </button>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-start">
              {displayedShortformReels.map((reel, idx) => (
                <div key={`${reel.title}-${idx}`} className="flex flex-col sm:flex-row items-center sm:items-stretch gap-4 group w-full transition-all duration-300">
                  {/* 9:16 Video Frame Card - Locked Aspect Ratio */}
                  <div 
                    className="bg-[#474747] w-full max-w-[215px] aspect-[9/16] rounded-[12px] flex flex-col justify-between relative overflow-hidden shrink-0 shadow-lg transition-all duration-300 border border-transparent hover:border-[#39adca]"
                  >
                    {playingReelIndex === idx ? (
                      <iframe
                        className="absolute inset-0 w-full h-full rounded-[12px] border-0"
                        src={`https://www.youtube-nocookie.com/embed/${reel.videoId}?autoplay=1&rel=0`}
                        title={reel.title}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    ) : (
                      <div 
                        onClick={() => setPlayingReelIndex(idx)}
                        className="absolute inset-0 w-full h-full p-3 flex flex-col justify-between cursor-pointer"
                      >
                        {/* Real video poster preview */}
                        <img 
                          src={reel.thumb} 
                          alt={reel.company} 
                          className="absolute inset-0 w-full h-full object-cover brightness-90 group-hover:scale-105 transition-transform duration-500" 
                        />

                        {/* Dark overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/40" />

                        <div className="flex items-center justify-between z-10">
                          <div className="w-7 h-7 rounded-full bg-black/60 border border-white/20 flex items-center justify-center text-white text-[10px] font-bold">
                            {reel.company.substring(0, 2).toUpperCase()}
                          </div>
                          <span className="bg-[#39adca] text-[#303030] text-[9px] sm:text-[10px] font-extrabold px-2 py-0.5 rounded-full uppercase">
                            {reel.badge}
                          </span>
                        </div>

                        {/* Center Play Trigger */}
                        <div className="absolute inset-0 flex items-center justify-center z-10">
                          <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#303030]/90 border border-[#39adca] flex items-center justify-center group-hover:scale-110 group-hover:bg-[#39adca] transition-all duration-300 shadow-xl">
                            <Play className="w-4 h-4 sm:w-5 sm:h-5 text-white group-hover:text-[#303030] fill-current ml-0.5 transition-colors" />
                          </div>
                        </div>

                        <div className="z-10 bg-black/70 backdrop-blur-sm p-2 rounded-md border border-white/10">
                          <p className="text-white text-xs font-medium truncate">{reel.company}</p>
                          <p className="text-[#39adca] text-[10px] flex items-center gap-1">
                            <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-ping" />
                            <span>Direkt abspielen</span>
                          </p>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* 9:16 Description Card */}
                  <div className="bg-[#303030] flex-1 w-full sm:w-[255px] min-h-[260px] sm:min-h-[383px] rounded-[12px] px-5 py-6 text-white flex flex-col justify-between shadow-lg">
                    <div className="flex flex-col gap-3">
                      <h3 className="text-[20px] sm:text-[24px] font-light leading-[28px] sm:leading-[30px] text-white">
                        {reel.title}
                      </h3>
                      <p className="text-[14px] sm:text-[15px] font-light leading-[20px] sm:leading-[22px] text-white/80">
                        {reel.desc}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-white/10 flex flex-col gap-1">
                      <p className="text-[12px] sm:text-[13px] font-medium text-[#39adca] flex items-center gap-1">
                        <TrendingUp className="w-3.5 h-3.5" />
                        <span>KPI & Performance:</span>
                      </p>
                      <p className="text-[14px] sm:text-[15px] font-light leading-[20px] sm:leading-[22px] text-white">
                        {reel.kpi}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center items-center gap-1.5 sm:gap-2 pt-4 max-w-full overflow-x-auto py-2 px-4">
            {shortformReels.map((_, dot) => (
              <button
                key={dot}
                onClick={() => {
                  setShortformIndex(dot);
                  setPlayingReelIndex(null);
                }}
                className={`transition-all cursor-pointer rounded-full ${
                  dot === shortformIndex 
                    ? 'w-6 sm:w-8 h-2 sm:h-2.5 bg-[#303030]' 
                    : 'w-2 sm:w-2.5 h-2 sm:h-2.5 bg-[#959595]/50 hover:bg-[#959595]'
                }`}
                aria-label={`Slide ${dot + 1}`}
              />
            ))}
          </div>
        </div>
        </ScrollReveal>

        {/* 2. Showcases Longform (16:9) */}
        <ScrollReveal direction="up" distance={30} delay={100}>
        <div className="flex flex-col gap-6 pt-8 relative">
          <p className="text-[14px] font-light leading-[20px] text-[#39adca]">
            Showcases Longform (16:9)
          </p>

          <div className="relative">
            {/* Desktop Left Float Arrow */}
            <button
              onClick={handleLongformPrev}
              className="hidden lg:flex absolute -left-7 xl:-left-12 2xl:-left-14 top-1/2 -translate-y-1/2 z-20 w-11 h-11 xl:w-12 xl:h-12 rounded-full bg-transparent hover:bg-[#39adca] text-[#303030]/35 hover:text-[#303030] border border-[#303030]/15 hover:border-[#39adca] items-center justify-center transition-all duration-300 hover:shadow-lg cursor-pointer group"
              aria-label="Vorheriger Imagefilm"
            >
              <ChevronLeft className="w-6 h-6 transition-transform group-hover:-translate-x-0.5" />
            </button>

            {/* Desktop Right Float Arrow */}
            <button
              onClick={handleLongformNext}
              className="hidden lg:flex absolute -right-7 xl:-right-12 2xl:-right-14 top-1/2 -translate-y-1/2 z-20 w-11 h-11 xl:w-12 xl:h-12 rounded-full bg-transparent hover:bg-[#39adca] text-[#303030]/35 hover:text-[#303030] border border-[#303030]/15 hover:border-[#39adca] items-center justify-center transition-all duration-300 hover:shadow-lg cursor-pointer group"
              aria-label="Nächster Imagefilm"
            >
              <ChevronRight className="w-6 h-6 transition-transform group-hover:translate-x-0.5" />
            </button>

            {/* Generous gap (gap-10 xl:gap-14) for optimal desktop spacing between Video and Card */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 xl:gap-14 items-stretch">
              {/* 16:9 Video Card with Inline Playback - Locked Aspect Ratio */}
              <div 
                className="lg:col-span-6 bg-[#474747] aspect-video w-full rounded-[12px] flex flex-col justify-between relative overflow-hidden shadow-xl group transition-all border border-transparent hover:border-[#39adca]"
              >
                {isPlayingLongform ? (
                  <iframe
                    className="absolute inset-0 w-full h-full rounded-[12px] border-0"
                    src={`https://www.youtube-nocookie.com/embed/${longformProjects[longformIndex % longformProjects.length].videoId}?autoplay=1&rel=0`}
                    title={longformProjects[longformIndex % longformProjects.length].title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                ) : (
                  <div 
                    onClick={() => setIsPlayingLongform(true)}
                    className="absolute inset-0 w-full h-full p-4 flex flex-col justify-between cursor-pointer"
                  >
                    {/* Real Video Preview Thumbnail */}
                    <img 
                      src={longformProjects[longformIndex % longformProjects.length].thumb} 
                      alt="YouTube Longform Preview" 
                      className="absolute inset-0 w-full h-full object-cover brightness-90 group-hover:scale-105 transition-transform duration-500" 
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/40" />

                    <div className="flex items-center justify-between z-10">
                      <div className="w-8 h-8 rounded-full bg-black/60 border border-white/20 flex items-center justify-center text-white text-xs font-bold">
                        {longformProjects[longformIndex % longformProjects.length].company.substring(0, 2)}
                      </div>
                      <span className="bg-black/70 backdrop-blur-sm text-white text-xs px-3 py-1 rounded-full border border-white/10">
                        {longformProjects[longformIndex % longformProjects.length].duration}
                      </span>
                    </div>

                    {/* Center Play Button */}
                    <div className="absolute inset-0 flex items-center justify-center z-10">
                      <div className="w-14 sm:w-16 h-14 sm:h-16 rounded-full bg-[#303030]/90 border-2 border-[#39adca] flex items-center justify-center group-hover:scale-110 group-hover:bg-[#39adca] transition-all duration-300 shadow-2xl">
                        <Play className="w-6 sm:w-7 h-6 sm:h-7 text-white group-hover:text-[#303030] fill-current ml-1 transition-colors" />
                      </div>
                    </div>

                    <div className="z-10 bg-black/70 backdrop-blur-md p-3 rounded-lg flex items-center justify-between border border-white/10">
                      <div>
                        <p className="text-white font-semibold text-xs sm:text-sm">{longformProjects[longformIndex % longformProjects.length].company}</p>
                        <p className="text-[#39adca] text-[11px] sm:text-xs">High-End 4K Cinema Production</p>
                      </div>
                      <span className="text-white text-[10px] sm:text-xs bg-[#39adca]/20 text-[#39adca] border border-[#39adca]/40 px-2 sm:px-2.5 py-0.5 sm:py-1 rounded">
                        Direkt abspielen
                      </span>
                    </div>
                  </div>
                )}
              </div>

              {/* 16:9 Description Card */}
              <div className="lg:col-span-6 bg-[#303030] min-h-[260px] lg:min-h-[388px] rounded-[12px] px-6 sm:px-10 py-8 lg:py-10 text-white flex flex-col justify-between shadow-xl">
                <div className="flex flex-col gap-4">
                  <div className="inline-block bg-[#39adca]/20 text-[#39adca] text-xs font-semibold px-2.5 py-1 rounded-md w-max">
                    4K Longform Content
                  </div>
                  <h3 className="text-[22px] sm:text-[32px] font-light leading-[32px] sm:leading-[36px] text-white">
                    {longformProjects[longformIndex % longformProjects.length].title}
                  </h3>
                  <p className="text-[15px] sm:text-[18px] font-light leading-[24px] sm:leading-[28px] text-white/85">
                    {longformProjects[longformIndex % longformProjects.length].desc}
                  </p>
                </div>

                <div className="pt-6 border-t border-white/10 flex flex-col gap-1">
                  <p className="text-[14px] font-medium text-[#39adca]">KPI:</p>
                  <p className="text-[15px] sm:text-[18px] font-light leading-[22px] sm:leading-[24px] text-white">
                    {longformProjects[longformIndex % longformProjects.length].kpi}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center items-center gap-2 pt-4">
            {longformProjects.map((_, dot) => (
              <button
                key={dot}
                onClick={() => {
                  setLongformIndex(dot);
                  setIsPlayingLongform(false);
                }}
                className={`w-3 h-3 rounded-full transition-all cursor-pointer ${
                  dot === longformIndex ? 'bg-[#303030] scale-110' : 'bg-[#959595]'
                }`}
                aria-label={`Slide ${dot + 1}`}
              />
            ))}
          </div>
        </div>
        </ScrollReveal>

        {/* 3. Showcases Webprojekte */}
        <ScrollReveal direction="up" distance={30} delay={100}>
        <div className="flex flex-col gap-6 pt-10 relative">
          <div className="border-b border-[#303030]/10 pb-3">
            <span className="text-[14px] font-light text-[#39adca] tracking-wider uppercase font-semibold">
              Showcases Webprojekte
            </span>
            <p className="text-xs text-[#959595] mt-0.5">
              Moderne Webseiten & Landing Pages
            </p>
          </div>

          <div className="relative">
            {/* Desktop Left Float Arrow */}
            <button
              onClick={handleWebPrev}
              className="hidden lg:flex absolute -left-7 xl:-left-12 2xl:-left-14 top-1/2 -translate-y-1/2 z-20 w-11 h-11 xl:w-12 xl:h-12 rounded-full bg-transparent hover:bg-[#39adca] text-[#303030]/35 hover:text-[#303030] border border-[#303030]/15 hover:border-[#39adca] items-center justify-center transition-all duration-300 hover:shadow-lg cursor-pointer group"
              aria-label="Vorherige Webseite"
            >
              <ChevronLeft className="w-6 h-6 transition-transform group-hover:-translate-x-0.5" />
            </button>

            {/* Desktop Right Float Arrow */}
            <button
              onClick={handleWebNext}
              className="hidden lg:flex absolute -right-7 xl:-right-12 2xl:-right-14 top-1/2 -translate-y-1/2 z-20 w-11 h-11 xl:w-12 xl:h-12 rounded-full bg-transparent hover:bg-[#39adca] text-[#303030]/35 hover:text-[#303030] border border-[#303030]/15 hover:border-[#39adca] items-center justify-center transition-all duration-300 hover:shadow-lg cursor-pointer group"
              aria-label="Nächste Webseite"
            >
              <ChevronRight className="w-6 h-6 transition-transform group-hover:translate-x-0.5" />
            </button>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 xl:gap-14 items-stretch">
              {/* Description Card (Left) */}
              <div className="lg:col-span-5 bg-[#303030] min-h-[300px] lg:min-h-[393px] rounded-[12px] p-6 sm:p-8 lg:p-10 text-white flex flex-col justify-between shadow-lg order-2 lg:order-1">
                <div className="flex flex-col gap-4">
                  <div className="inline-block bg-[#39adca]/20 text-[#39adca] text-xs font-semibold px-2.5 py-1 rounded-md w-max">
                    {webProjects[webIndex % webProjects.length].badge}
                  </div>
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white tracking-tight leading-snug">
                    {webProjects[webIndex % webProjects.length].title}
                  </h3>
                  <p className="text-sm sm:text-base font-light text-white/85 leading-relaxed">
                    {webProjects[webIndex % webProjects.length].desc}
                  </p>
                </div>

                <div className="pt-6 border-t border-white/10 flex flex-col gap-2">
                  <div className="flex items-center gap-2 text-[#39adca] text-sm font-semibold">
                    <ExternalLink className="w-4 h-4" />
                    <span>Wirkung & KPI:</span>
                  </div>
                  <p className="text-sm sm:text-base font-medium text-white">
                    {webProjects[webIndex % webProjects.length].kpi}
                  </p>
                </div>
              </div>

              {/* Browser Window Frame (Right) - Locked 16:10 Screen Aspect Ratio on all devices */}
              <div className="lg:col-span-7 bg-[#474747] border border-[#1a1a1a] rounded-[12px] aspect-[16/10] w-full max-w-full flex flex-col overflow-hidden shadow-2xl order-1 lg:order-2">
                {/* Browser Window Header */}
                <div className="bg-white h-[26px] sm:h-[30px] px-3 sm:px-4 flex items-center justify-between shrink-0 border-b border-gray-200">
                  <div className="flex items-center">
                    <img src={imgRow} alt="Browser Controls" className="h-2 sm:h-2.5 object-contain" />
                  </div>
                  <div className="text-[9px] sm:text-[11px] font-mono text-gray-500 bg-gray-100 px-2 sm:px-4 py-0.5 rounded-sm truncate max-w-[180px] sm:max-w-none">
                    https://kunde.markenlos.de
                  </div>
                  <div className="w-4 sm:w-8" />
                </div>

                {/* Browser Web Content Mockup - Perfectly Proportional */}
                <div className="flex-1 bg-[#222222] p-4 sm:p-6 lg:p-8 flex flex-col justify-between relative overflow-hidden group">
                  <div className="flex flex-col gap-3 sm:gap-4">
                    <div className="flex items-center justify-between">
                      <div className="h-4 sm:h-6 w-24 sm:w-32 bg-white/20 rounded" />
                      <div className="flex gap-2 sm:gap-3">
                        <div className="h-3 sm:h-4 w-8 sm:w-12 bg-white/10 rounded" />
                        <div className="h-3 sm:h-4 w-8 sm:w-12 bg-white/10 rounded" />
                        <div className="h-3 sm:h-4 w-12 sm:w-16 bg-[#39adca] rounded" />
                      </div>
                    </div>

                    <div className="pt-3 sm:pt-6 flex flex-col gap-2 sm:gap-3">
                      <div className="h-5 sm:h-8 w-3/4 bg-white/90 rounded" />
                      <div className="h-3 sm:h-4 w-full bg-white/20 rounded" />
                      <div className="h-3 sm:h-4 w-2/3 bg-white/20 rounded" />
                    </div>
                  </div>

                  <div className="flex gap-2 sm:gap-4 pt-4 sm:pt-8">
                    <button 
                      onClick={() => onOpenContact?.('Webprojekt')}
                      className="h-8 sm:h-10 px-3 sm:px-5 bg-[#39adca] hover:bg-[#2ba2bf] rounded flex items-center justify-center text-[#303030] text-[10px] sm:text-xs font-bold transition-colors cursor-pointer"
                    >
                      Jetzt entdecken
                    </button>
                    <button 
                      onClick={() => onOpenContact?.('Portfolio Anfrage')}
                      className="h-8 sm:h-10 px-3 sm:px-5 border border-white/30 hover:bg-white/10 rounded flex items-center justify-center text-white text-[10px] sm:text-xs transition-colors cursor-pointer"
                    >
                      Portfolio
                    </button>
                  </div>

                </div>
              </div>
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 pt-2">
            {webProjects.map((_, dot) => (
              <div
                key={dot}
                onClick={() => setWebIndex(dot)}
                className={`w-2.5 h-2.5 rounded-full cursor-pointer transition-all ${
                  dot === webIndex ? 'bg-[#303030] scale-125' : 'bg-[#959595]/40 hover:bg-[#959595]'
                }`}
              />
            ))}
          </div>
        </div>
        </ScrollReveal>

      </div>
    </section>
  );
};
