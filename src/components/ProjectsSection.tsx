import React, { useState } from 'react';
import imgRow from '../assets/imgRow.svg';
import { Play, TrendingUp, ExternalLink } from 'lucide-react';



interface ProjectsSectionProps {
  onOpenVideo: (url?: string) => void;
  onOpenContact?: (type?: string) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ onOpenContact }) => {
  const [shortformIndex, setShortformIndex] = useState(0);
  const [longformIndex, setLongformIndex] = useState(0);
  const [webIndex, setWebIndex] = useState(0);
  const [playingReelIndex, setPlayingReelIndex] = useState<number | null>(null);
  const [isPlayingLongform, setIsPlayingLongform] = useState(false);

  const shortformReels = [
    {
      title: "TIKTOK RECRUITING KAMPAGNE",
      desc: "Authentische Kurzvideos für Azubi- und Fachkräfte-Gewinnung.",
      kpi: "+240% mehr qualifizierte Bewerbungen in 6 Wochen",
      company: "Handwerksgruppe Süd",
      badge: "Recruiting",
      videoId: "dQw4w9WgXcQ",
      thumb: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&auto=format&fit=crop&q=80",
    },
    {
      title: "INSTAGRAM BRAND AWARENESS",
      desc: "Dynamische Produktinszenierung und Storytelling für Food-Brand.",
      kpi: "1.2M organische Impressionen & 18.000 Likes",
      company: "Okinii Restaurant",
      badge: "Social Media",
      videoId: "dQw4w9WgXcQ",
      thumb: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600&auto=format&fit=crop&q=80",
    },
    {
      title: "VIRAL REEL SERIE",
      desc: "Humorvolle Einblicke hinter die Kulissen im Agenturalltag.",
      kpi: "Ø 85.000 Aufrufe pro Video bei 92% Completion Rate",
      company: "Maya Coaching",
      badge: "Content",
      videoId: "dQw4w9WgXcQ",
      thumb: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=600&auto=format&fit=crop&q=80",
    },
  ];

  const longformProjects = [
    {
      title: "IMAGEFILM & KORPORATE IDENTITY",
      desc: "Cinematische Darstellung des Familienunternehmens mit Fokus auf Innovation, Nachhaltigkeit und regionale Verbundenheit.",
      kpi: "Erreichte 45.000 Entscheidungsträger & 40% mehr Initiativbewerbungen.",
      company: "Becker Gruppe GmbH",
      duration: "03:45 Min",
      videoId: "dQw4w9WgXcQ",
    },
    {
      title: "DOKUMENTATION & MEILENSTEIN-EVENT",
      desc: "Begleitender Imagefilm zum 25-jährigen Firmenjubiläum inklusive Drohnenaufnahmen und Mitarbeiter-Interviews.",
      kpi: "Ausgezeichnet für beste B2B-Unternehmenskommunikation 2024.",
      company: "Velten & Tönnies",
      duration: "05:12 Min",
      videoId: "dQw4w9WgXcQ",
    },
  ];

  const webProjects = [
    {
      title: "DIGITALE BRAND EXPERIENCE & CMS",
      desc: "Kompletter Relaunch der Unternehmens-Website mit integriertem Bewerber-Portal, 3D-Showcase und 100/100 Lighthouse Performance.",
      kpi: "+180% mehr Anfragen über das Kontaktformular im 1. Monat",
      company: "Siam Tulip Gastro",
      url: "https://markenlos.de",
    },
    {
      title: "HIGH-CONVERTING LANDING PAGE",
      desc: "Minimalistisches, klares Webdesign mit klarem Fokus auf Leadgenerierung und nahtloser Terminbuchung.",
      kpi: "Conversion-Rate von 8,4% auf bezahlte Ads",
      company: "Villa First Real Estate",
      url: "https://markenlos.de",
    },
  ];

  return (
    <section id="projekte" className="bg-white text-[#303030] py-20 lg:py-[128px] px-6 sm:px-10 md:px-16 lg:px-24 w-full overflow-hidden">
      <div className="w-full max-w-[1440px] mx-auto flex flex-col gap-12 lg:gap-16">
        
        {/* Section Header */}
        <div className="flex flex-col">
          <p className="text-[32px] sm:text-[36px] font-extralight leading-[48px] text-[#303030]">
            Unsere
          </p>
          <h2 className="text-[36px] sm:text-[40px] font-bold leading-[48px] text-[#303030] tracking-[-0.5px]">
            Projektlandschaft
          </h2>
        </div>

        {/* 1. Showcases Shortform (9:16) */}
        <div className="flex flex-col gap-6">
          <p className="text-[14px] font-light leading-[20px] text-[#39adca]">
            Showcases Shortform (9:16)
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-start">
            {shortformReels.map((reel, idx) => (
              <div key={idx} className="flex flex-col sm:flex-row gap-4 items-stretch group">
                {/* 9:16 Video Frame Card with Inline Playback */}
                <div 
                  className="bg-[#474747] w-full sm:w-[215px] h-[383px] rounded-[12px] flex flex-col justify-between relative overflow-hidden shrink-0 shadow-lg transition-all duration-300 border border-transparent hover:border-[#39adca]"
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
                        <div className="w-8 h-8 rounded-full bg-black/60 border border-white/20 flex items-center justify-center text-white text-xs font-bold">
                          {reel.company.substring(0, 2).toUpperCase()}
                        </div>
                        <span className="bg-[#39adca] text-[#303030] text-[10px] font-extrabold px-2.5 py-0.5 rounded-full uppercase">
                          {reel.badge}
                        </span>
                      </div>

                      {/* Center Play Trigger */}
                      <div className="absolute inset-0 flex items-center justify-center z-10">
                        <div className="w-12 h-12 rounded-full bg-[#303030]/90 border border-[#39adca] flex items-center justify-center group-hover:scale-110 group-hover:bg-[#39adca] transition-all duration-300 shadow-xl">
                          <Play className="w-5 h-5 text-white group-hover:text-[#303030] fill-current ml-0.5 transition-colors" />
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
                <div className="bg-[#303030] flex-1 sm:w-[255px] min-h-[383px] sm:min-h-[459px] rounded-[12px] px-5 py-6 text-white flex flex-col justify-between shadow-lg">
                  <div className="flex flex-col gap-3">
                    <h3 className="text-[22px] sm:text-[24px] font-light leading-[30px] text-white">
                      {reel.title}
                    </h3>
                    <p className="text-[15px] font-light leading-[22px] text-white/80">
                      {reel.desc}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-white/10 flex flex-col gap-1">
                    <p className="text-[13px] font-medium text-[#39adca] flex items-center gap-1">
                      <TrendingUp className="w-3.5 h-3.5" />
                      <span>KPI & Performance:</span>
                    </p>
                    <p className="text-[15px] font-light leading-[22px] text-white">
                      {reel.kpi}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center items-center gap-2 pt-4">
            {[0, 1, 2, 3, 4, 5].map((dot) => (
              <button
                key={dot}
                onClick={() => {
                  setShortformIndex(dot);
                  setPlayingReelIndex(null);
                }}
                className={`w-3 h-3 rounded-full transition-all cursor-pointer ${
                  dot === shortformIndex ? 'bg-[#303030] scale-110' : 'bg-[#959595]'
                }`}
                aria-label={`Slide ${dot + 1}`}
              />
            ))}
          </div>
        </div>

        {/* 2. Showcases Longform (16:9) */}
        <div className="flex flex-col gap-6 pt-8">
          <p className="text-[14px] font-light leading-[20px] text-[#39adca]">
            Showcases Longform (16:9)
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* 16:9 Video Card with Inline Playback */}
            <div 
              className="lg:col-span-6 bg-[#474747] aspect-video min-h-[300px] lg:min-h-[388px] rounded-[12px] flex flex-col justify-between relative overflow-hidden shadow-xl group transition-all border border-transparent hover:border-[#39adca]"
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
                  {/* YouTube Preview Thumbnail */}
                  <img 
                    src={`https://img.youtube.com/vi/${longformProjects[longformIndex % longformProjects.length].videoId}/hqdefault.jpg`}
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
                    <div className="w-16 h-16 rounded-full bg-[#303030]/90 border-2 border-[#39adca] flex items-center justify-center group-hover:scale-110 group-hover:bg-[#39adca] transition-all duration-300 shadow-2xl">
                      <Play className="w-7 h-7 text-white group-hover:text-[#303030] fill-current ml-1 transition-colors" />
                    </div>
                  </div>

                  <div className="z-10 bg-black/70 backdrop-blur-md p-3 rounded-lg flex items-center justify-between border border-white/10">
                    <div>
                      <p className="text-white font-semibold text-sm">{longformProjects[longformIndex % longformProjects.length].company}</p>
                      <p className="text-[#39adca] text-xs">High-End 4K Cinema Production</p>
                    </div>
                    <span className="text-white text-xs bg-[#39adca]/20 text-[#39adca] border border-[#39adca]/40 px-2.5 py-1 rounded">
                      Direkt abspielen
                    </span>
                  </div>
                </div>
              )}
            </div>

            {/* 16:9 Description Card */}
            <div className="lg:col-span-6 bg-[#303030] min-h-[300px] lg:min-h-[388px] rounded-[12px] px-6 sm:px-8 py-8 text-white flex flex-col justify-between shadow-xl">
              <div className="flex flex-col gap-4">
                <h3 className="text-[24px] sm:text-[32px] font-light leading-[36px] text-white">
                  {longformProjects[longformIndex % longformProjects.length].title}
                </h3>
                <p className="text-[16px] sm:text-[18px] font-light leading-[28px] text-white/85">
                  {longformProjects[longformIndex % longformProjects.length].desc}
                </p>
              </div>

              <div className="pt-6 border-t border-white/10 flex flex-col gap-1">
                <p className="text-[14px] font-medium text-[#39adca]">KPI:</p>
                <p className="text-[16px] sm:text-[18px] font-light leading-[24px] text-white">
                  {longformProjects[longformIndex % longformProjects.length].kpi}
                </p>
              </div>
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center items-center gap-2 pt-4">
            {[0, 1, 2, 3, 4, 5].map((dot) => (
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


        {/* 3. Showcases Webprojekte */}
        <div className="flex flex-col gap-6 pt-10">
          <div className="flex items-center justify-between border-b border-[#303030]/10 pb-3">
            <span className="text-[14px] font-light text-[#39adca] tracking-wider uppercase font-semibold">
              Showcases Webprojekte
            </span>
            <span className="text-xs text-[#959595]">
              Moderne Webseiten & Landing Pages
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Description Card (Left) */}
            <div className="lg:col-span-5 bg-[#303030] min-h-[360px] lg:min-h-[393px] rounded-[12px] p-8 text-white flex flex-col justify-between shadow-lg order-2 lg:order-1">
              <div className="flex flex-col gap-4">
                <div className="inline-block bg-[#39adca]/20 text-[#39adca] text-xs font-semibold px-2.5 py-1 rounded-md w-max">
                  Web & Brand Strategy
                </div>
                <h3 className="text-2xl lg:text-3xl font-bold text-white tracking-tight leading-snug">
                  {webProjects[webIndex % webProjects.length].title}
                </h3>
                <p className="text-base font-light text-white/85 leading-relaxed">
                  {webProjects[webIndex % webProjects.length].desc}
                </p>
              </div>

              <div className="pt-6 border-t border-white/10 flex flex-col gap-2">
                <div className="flex items-center gap-2 text-[#39adca] text-sm font-semibold">
                  <ExternalLink className="w-4 h-4" />
                  <span>Wirkung & KPI:</span>
                </div>
                <p className="text-base font-medium text-white">
                  {webProjects[webIndex % webProjects.length].kpi}
                </p>
              </div>
            </div>

            {/* Browser Window Frame (Right) */}
            <div className="lg:col-span-7 bg-[#474747] border border-[#1a1a1a] rounded-[12px] min-h-[360px] lg:min-h-[393px] flex flex-col overflow-hidden shadow-2xl order-1 lg:order-2">
              {/* Browser Window Header */}
              <div className="bg-white h-[28px] px-4 flex items-center justify-between shrink-0 border-b border-gray-200">
                <div className="flex items-center">
                  <img src={imgRow} alt="Browser Controls" className="h-2.5 object-contain" />
                </div>
                <div className="text-[11px] font-mono text-gray-500 bg-gray-100 px-4 py-0.5 rounded-sm">
                  https://kunde.markenlos.de
                </div>
                <div className="w-8" />
              </div>

              {/* Browser Web Content Mockup */}
              <div className="flex-1 bg-[#222222] p-8 flex flex-col justify-between relative overflow-hidden group">
                <div className="flex flex-col gap-4">
                  <div className="flex items-center justify-between">
                    <div className="h-6 w-32 bg-white/20 rounded" />
                    <div className="flex gap-3">
                      <div className="h-4 w-12 bg-white/10 rounded" />
                      <div className="h-4 w-12 bg-white/10 rounded" />
                      <div className="h-4 w-16 bg-[#39adca] rounded" />
                    </div>
                  </div>

                  <div className="pt-6 flex flex-col gap-3">
                    <div className="h-8 w-3/4 bg-white/90 rounded" />
                    <div className="h-4 w-full bg-white/20 rounded" />
                    <div className="h-4 w-2/3 bg-white/20 rounded" />
                  </div>
                </div>

                <div className="flex gap-4 pt-8">
                  <button 
                    onClick={() => onOpenContact?.('Webprojekt')}
                    className="h-10 w-36 bg-[#39adca] hover:bg-[#2ba2bf] rounded flex items-center justify-center text-[#303030] text-xs font-bold transition-colors cursor-pointer"
                  >
                    Jetzt entdecken
                  </button>
                  <button 
                    onClick={() => onOpenContact?.('Portfolio Anfrage')}
                    className="h-10 w-32 border border-white/30 hover:bg-white/10 rounded flex items-center justify-center text-white text-xs transition-colors cursor-pointer"
                  >
                    Portfolio
                  </button>
                </div>

              </div>
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 pt-2">
            {[0, 1, 2, 3, 4, 5].map((dot) => (
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

      </div>
    </section>
  );
};
