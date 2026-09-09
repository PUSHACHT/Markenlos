import React, { useState, useEffect } from 'react';
import imgRow from '../assets/imgRow.svg';
import { Play, TrendingUp, ExternalLink, ChevronLeft, ChevronRight, Monitor } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';
import { useShortformReels } from '../hooks/useShortformReels';
import { useLongformProjects } from '../hooks/useLongformProjects';
import { initialWebProjects } from '../data/webProjects';

interface ProjectsSectionProps {
  onOpenVideo?: (url?: string) => void;
  onOpenContact?: (type?: string) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ onOpenContact }) => {
  const { reels: shortformReels } = useShortformReels();
  const { projects: longformProjects } = useLongformProjects();
  const webProjects = initialWebProjects;
  const [itemsPerPage, setItemsPerPage] = useState(3);
  const [shortformIndex, setShortformIndex] = useState(0);
  const [longformIndex, setLongformIndex] = useState(0);
  const [webIndex, setWebIndex] = useState(0);
  const [playingReelIndex, setPlayingReelIndex] = useState<number | null>(null);
  const [isPlayingLongform, setIsPlayingLongform] = useState(false);
  const [activeLiveIframe, setActiveLiveIframe] = useState<number | null>(null);

  useEffect(() => {
    const updateItemsPerPage = () => {
      if (window.innerWidth >= 1024) {
        setItemsPerPage(3);
      } else if (window.innerWidth >= 768) {
        setItemsPerPage(2);
      } else {
        setItemsPerPage(1);
      }
    };
    updateItemsPerPage();
    window.addEventListener('resize', updateItemsPerPage);
    return () => window.removeEventListener('resize', updateItemsPerPage);
  }, []);

  // Calculate pagination values
  const totalShortformPages = Math.ceil(shortformReels.length / itemsPerPage);
  const currentShortformPage = Math.min(
    Math.floor(shortformIndex / itemsPerPage),
    totalShortformPages - 1
  );

  const handleShortformNext = () => {
    setPlayingReelIndex(null);
    setShortformIndex((prev) => {
      const maxStart = Math.max(0, shortformReels.length - itemsPerPage);
      if (prev >= maxStart) return 0;
      return Math.min(prev + itemsPerPage, maxStart);
    });
  };

  const handleShortformPrev = () => {
    setPlayingReelIndex(null);
    setShortformIndex((prev) => {
      const maxStart = Math.max(0, shortformReels.length - itemsPerPage);
      if (prev <= 0) return maxStart;
      return Math.max(0, prev - itemsPerPage);
    });
  };

  const handleShortformDotClick = (page: number) => {
    setPlayingReelIndex(null);
    const maxStart = Math.max(0, shortformReels.length - itemsPerPage);
    setShortformIndex(Math.min(page * itemsPerPage, maxStart));
  };

  const handleLongformPrev = () => {
    setIsPlayingLongform(false);
    setLongformIndex((prev) => (prev - 1 + longformProjects.length) % longformProjects.length);
  };
  const handleLongformNext = () => {
    setIsPlayingLongform(false);
    setLongformIndex((prev) => (prev + 1) % longformProjects.length);
  };

  const handleWebPrev = () => {
    setActiveLiveIframe(null);
    setWebIndex((prev) => (prev - 1 + webProjects.length) % webProjects.length);
  };
  const handleWebNext = () => {
    setActiveLiveIframe(null);
    setWebIndex((prev) => (prev + 1) % webProjects.length);
  };

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
              className="hidden lg:flex absolute -left-7 xl:-left-12 2xl:-left-14 top-1/2 -translate-y-1/2 z-20 w-11 h-11 xl:w-12 xl:h-12 rounded-full bg-white/80 hover:bg-[#39adca] text-[#303030]/60 hover:text-[#303030] border border-[#303030]/15 hover:border-[#39adca] items-center justify-center transition-all duration-300 hover:shadow-xl cursor-pointer group shadow-md"
              aria-label="Vorherige Reels"
            >
              <ChevronLeft className="w-6 h-6 transition-transform group-hover:-translate-x-0.5" />
            </button>

            {/* Desktop Right Float Arrow */}
            <button
              onClick={handleShortformNext}
              className="hidden lg:flex absolute -right-7 xl:-right-12 2xl:-right-14 top-1/2 -translate-y-1/2 z-20 w-11 h-11 xl:w-12 xl:h-12 rounded-full bg-white/80 hover:bg-[#39adca] text-[#303030]/60 hover:text-[#303030] border border-[#303030]/15 hover:border-[#39adca] items-center justify-center transition-all duration-300 hover:shadow-xl cursor-pointer group shadow-md"
              aria-label="Nächste Reels"
            >
              <ChevronRight className="w-6 h-6 transition-transform group-hover:translate-x-0.5" />
            </button>

            {/* Animated Slider Track */}
            <div className="overflow-hidden w-full py-1">
              <div 
                className="flex transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] items-stretch"
                style={{
                  transform: `translate3d(-${shortformIndex * (100 / itemsPerPage)}%, 0, 0)`,
                }}
              >
                {shortformReels.map((reel, idx) => (
                  <div 
                    key={`${reel.videoId}-${idx}`} 
                    className="w-full min-w-full md:w-1/2 md:min-w-[50%] lg:w-1/3 lg:min-w-[33.333333%] shrink-0 px-2 sm:px-3 lg:px-3.5 flex flex-col sm:flex-row items-center sm:items-stretch gap-4 group"
                  >
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

                          <div className="flex items-center justify-end z-10">
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
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center items-center gap-1.5 sm:gap-2 pt-4 max-w-full overflow-x-auto py-2 px-4">
            {Array.from({ length: totalShortformPages }).map((_, page) => (
              <button
                key={page}
                onClick={() => handleShortformDotClick(page)}
                className={`transition-all cursor-pointer rounded-full ${
                  page === currentShortformPage 
                    ? 'w-6 sm:w-8 h-2 sm:h-2.5 bg-[#303030]' 
                    : 'w-2 sm:w-2.5 h-2 sm:h-2.5 bg-[#959595]/50 hover:bg-[#959595]'
                }`}
                aria-label={`Slide ${page + 1}`}
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
              className="hidden lg:flex absolute -left-7 xl:-left-12 2xl:-left-14 top-1/2 -translate-y-1/2 z-20 w-11 h-11 xl:w-12 xl:h-12 rounded-full bg-white/80 hover:bg-[#39adca] text-[#303030]/60 hover:text-[#303030] border border-[#303030]/15 hover:border-[#39adca] items-center justify-center transition-all duration-300 hover:shadow-xl cursor-pointer group shadow-md"
              aria-label="Vorheriger Imagefilm"
            >
              <ChevronLeft className="w-6 h-6 transition-transform group-hover:-translate-x-0.5" />
            </button>

            {/* Desktop Right Float Arrow */}
            <button
              onClick={handleLongformNext}
              className="hidden lg:flex absolute -right-7 xl:-right-12 2xl:-right-14 top-1/2 -translate-y-1/2 z-20 w-11 h-11 xl:w-12 xl:h-12 rounded-full bg-white/80 hover:bg-[#39adca] text-[#303030]/60 hover:text-[#303030] border border-[#303030]/15 hover:border-[#39adca] items-center justify-center transition-all duration-300 hover:shadow-xl cursor-pointer group shadow-md"
              aria-label="Nächster Imagefilm"
            >
              <ChevronRight className="w-6 h-6 transition-transform group-hover:translate-x-0.5" />
            </button>

            {/* Animated Slider Track */}
            <div className="overflow-hidden w-full py-1">
              <div 
                className="flex transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] items-stretch"
                style={{
                  transform: `translate3d(-${longformIndex * 100}%, 0, 0)`,
                }}
              >
                {longformProjects.map((project, idx) => (
                  <div key={`${project.title}-${idx}`} className="w-full min-w-full shrink-0 px-1">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 xl:gap-14 items-stretch">
                      {/* 16:9 Video Card with Inline Playback - Locked Aspect Ratio */}
                      <div 
                        className="lg:col-span-6 bg-[#474747] aspect-video w-full rounded-[12px] flex flex-col justify-between relative overflow-hidden shadow-xl group transition-all border border-transparent hover:border-[#39adca]"
                      >
                        {isPlayingLongform && longformIndex === idx ? (
                          <iframe
                            className="absolute inset-0 w-full h-full rounded-[12px] border-0"
                            src={`https://www.youtube-nocookie.com/embed/${project.videoId}?autoplay=1&rel=0`}
                            title={project.title}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                          />
                        ) : (
                          <div 
                            onClick={() => {
                              setLongformIndex(idx);
                              setIsPlayingLongform(true);
                            }}
                            className="absolute inset-0 w-full h-full p-4 flex flex-col justify-between cursor-pointer"
                          >
                            {/* Real Video Preview Thumbnail */}
                            <img 
                              src={project.thumb} 
                              alt="YouTube Longform Preview" 
                              className="absolute inset-0 w-full h-full object-cover brightness-90 group-hover:scale-105 transition-transform duration-500" 
                            />

                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/40" />

                            <div className="flex items-center justify-end z-10">
                              <span className="bg-black/70 backdrop-blur-sm text-white text-xs px-3 py-1 rounded-full border border-white/10">
                                {project.duration}
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
                                <p className="text-white font-semibold text-xs sm:text-sm">{project.company}</p>
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
                            {project.title}
                          </h3>
                          <p className="text-[15px] sm:text-[18px] font-light leading-[24px] sm:leading-[28px] text-white/85">
                            {project.desc}
                          </p>
                        </div>

                        <div className="pt-6 border-t border-white/10 flex flex-col gap-1">
                          <p className="text-[14px] font-medium text-[#39adca]">KPI:</p>
                          <p className="text-[15px] sm:text-[18px] font-light leading-[22px] sm:leading-[24px] text-white">
                            {project.kpi}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
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
              className="hidden lg:flex absolute -left-7 xl:-left-12 2xl:-left-14 top-1/2 -translate-y-1/2 z-20 w-11 h-11 xl:w-12 xl:h-12 rounded-full bg-white/80 hover:bg-[#39adca] text-[#303030]/60 hover:text-[#303030] border border-[#303030]/15 hover:border-[#39adca] items-center justify-center transition-all duration-300 hover:shadow-xl cursor-pointer group shadow-md"
              aria-label="Vorherige Webseite"
            >
              <ChevronLeft className="w-6 h-6 transition-transform group-hover:-translate-x-0.5" />
            </button>

            {/* Desktop Right Float Arrow */}
            <button
              onClick={handleWebNext}
              className="hidden lg:flex absolute -right-7 xl:-right-12 2xl:-right-14 top-1/2 -translate-y-1/2 z-20 w-11 h-11 xl:w-12 xl:h-12 rounded-full bg-white/80 hover:bg-[#39adca] text-[#303030]/60 hover:text-[#303030] border border-[#303030]/15 hover:border-[#39adca] items-center justify-center transition-all duration-300 hover:shadow-xl cursor-pointer group shadow-md"
              aria-label="Nächste Webseite"
            >
              <ChevronRight className="w-6 h-6 transition-transform group-hover:translate-x-0.5" />
            </button>

            {/* Animated Slider Track */}
            <div className="overflow-hidden w-full py-1">
              <div 
                className="flex transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] items-stretch"
                style={{
                  transform: `translate3d(-${webIndex * 100}%, 0, 0)`,
                }}
              >
                {webProjects.map((project, idx) => (
                  <div key={`${project.title}-${idx}`} className="w-full min-w-full shrink-0 px-1">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 xl:gap-14 items-stretch">
                      {/* Description Card (Left) */}
                      <div className="lg:col-span-5 bg-[#303030] min-h-[300px] lg:min-h-[393px] rounded-[12px] p-6 sm:p-8 lg:p-10 text-white flex flex-col justify-between shadow-lg order-2 lg:order-1">
                        <div className="flex flex-col gap-4">
                          <div className="inline-block bg-[#39adca]/20 text-[#39adca] text-xs font-semibold px-2.5 py-1 rounded-md w-max">
                            {project.badge}
                          </div>
                          <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white tracking-tight leading-snug">
                            {project.title}
                          </h3>
                          <p className="text-sm sm:text-base font-light text-white/85 leading-relaxed">
                            {project.desc}
                          </p>
                        </div>

                        <div className="pt-6 border-t border-white/10 flex flex-col gap-2">
                          <div className="flex items-center gap-2 text-[#39adca] text-sm font-semibold">
                            <ExternalLink className="w-4 h-4" />
                            <span>Wirkung & KPI:</span>
                          </div>
                          <p className="text-sm sm:text-base font-medium text-white">
                            {project.kpi}
                          </p>
                        </div>
                      </div>

                      {/* Browser Window Frame (Right) - Locked 16:10 Screen Aspect Ratio on all devices */}
                      <div className="lg:col-span-7 bg-[#1c1c1c] border border-[#303030]/40 rounded-[12px] aspect-[16/10] w-full max-w-full flex flex-col overflow-hidden shadow-2xl order-1 lg:order-2 group relative">
                        {/* Browser Window Header */}
                        <div className="bg-[#222222] h-[30px] sm:h-[36px] px-3 sm:px-4 flex items-center justify-between shrink-0 border-b border-white/10 z-20">
                          <div className="flex items-center gap-2">
                            <img src={imgRow} alt="Browser Controls" className="h-2 sm:h-2.5 object-contain opacity-80" />
                          </div>
                          
                          {/* Live URL Bar */}
                          <a
                            href={project.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[10px] sm:text-[12px] font-mono text-white/80 bg-black/50 hover:bg-black/80 hover:text-[#39adca] px-3 sm:px-4 py-0.5 sm:py-1 rounded flex items-center gap-1.5 truncate max-w-[180px] sm:max-w-none transition-colors border border-white/10"
                            title={`Öffne ${project.url}`}
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0 animate-pulse" />
                            <span>https://{project.displayUrl}</span>
                            <ExternalLink className="w-2.5 sm:w-3 h-2.5 sm:h-3 opacity-60 ml-0.5" />
                          </a>

                          <div className="flex items-center gap-1 sm:gap-2">
                            {project.allowsIframe && (
                              <button
                                onClick={() => setActiveLiveIframe(activeLiveIframe === idx ? null : idx)}
                                className={`text-[9px] sm:text-[11px] px-2 py-0.5 rounded border transition-colors cursor-pointer flex items-center gap-1 ${
                                  activeLiveIframe === idx
                                    ? 'bg-[#39adca] text-[#303030] font-bold border-[#39adca]'
                                    : 'bg-white/10 text-white/80 hover:bg-white/20 border-white/10'
                                }`}
                                title={activeLiveIframe === idx ? "Zurück zur statischen Vorschau" : "Live-Interaktivität im Frame aktivieren"}
                              >
                                <Monitor className="w-2.5 sm:w-3 h-2.5 sm:h-3" />
                                <span className="hidden sm:inline">{activeLiveIframe === idx ? "Vorschau" : "Live View"}</span>
                              </button>
                            )}
                          </div>
                        </div>

                        {/* Browser Live Viewport */}
                        <div className="flex-1 w-full h-full relative overflow-hidden bg-[#111111] flex flex-col justify-end">
                          {activeLiveIframe === idx && project.allowsIframe ? (
                            /* Real Interactive Iframe */
                            <div className="w-full h-full bg-white relative">
                              <iframe
                                src={project.url}
                                title={project.title}
                                className="w-full h-full border-0"
                                sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
                                loading="lazy"
                              />
                            </div>
                          ) : (
                            /* High-Fidelity Website Screenshot Preview */
                            <div className="relative w-full h-full overflow-hidden flex flex-col justify-end group/view">
                              <img
                                src={project.previewImage}
                                alt={project.title}
                                className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                              />

                              {/* Subtle ambient overlay */}
                              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent pointer-events-none" />

                              {/* Bottom Floating Action Bar */}
                              <div className="relative z-10 p-3 sm:p-5 flex flex-wrap items-center justify-between gap-2 backdrop-blur-[2px]">
                                <div className="hidden sm:block">
                                  <p className="text-white text-xs font-semibold drop-shadow">{project.company}</p>
                                  <p className="text-[#39adca] text-[10px] font-medium drop-shadow">Echtzeit Web-Showcase</p>
                                </div>

                                <div className="flex items-center gap-2">
                                  <a
                                    href={project.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="h-7 sm:h-9 px-3 sm:px-4 bg-[#39adca] hover:bg-[#2ba2bf] rounded-md flex items-center justify-center text-[#1e1e1e] text-[10px] sm:text-xs font-bold transition-all duration-200 cursor-pointer shadow-lg hover:scale-105 active:scale-95"
                                  >
                                    <span>Website live ansehen</span>
                                    <ExternalLink className="w-3 h-3 ml-1.5" />
                                  </a>

                                  {project.allowsIframe && (
                                    <button
                                      onClick={() => setActiveLiveIframe(idx)}
                                      className="h-7 sm:h-9 px-2.5 sm:px-3 bg-black/60 hover:bg-black/90 border border-white/20 text-white rounded-md flex items-center justify-center text-[10px] sm:text-xs font-medium transition-colors cursor-pointer backdrop-blur-md"
                                      title="Direkt hier im Fenster interagieren"
                                    >
                                      <Monitor className="w-3 h-3 sm:mr-1 text-[#39adca]" />
                                      <span className="hidden sm:inline">Interaktiv</span>
                                    </button>
                                  )}

                                  <button
                                    onClick={() => onOpenContact?.(project.title)}
                                    className="h-7 sm:h-9 px-2.5 sm:px-3 border border-white/20 hover:border-white/40 hover:bg-white/20 bg-black/40 text-white rounded-md flex items-center justify-center text-[10px] sm:text-xs font-medium transition-all duration-200 cursor-pointer backdrop-blur-md"
                                  >
                                    Anfragen
                                  </button>
                                </div>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
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
