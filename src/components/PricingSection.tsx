import React from 'react';
import { Check } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

interface PricingSectionProps {
  onOpenContact: (plan?: string) => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ onOpenContact }) => {
  return (
    <section id="preise" className="bg-white text-[#303030] py-28 md:py-36 px-6 md:px-16 lg:px-24">
      <div className="max-w-[1440px] mx-auto flex flex-col gap-12">
        
        {/* Section Header */}
        <ScrollReveal direction="up" distance={25}>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <p className="text-[24px] sm:text-[30px] md:text-[36px] font-extralight text-[#303030] leading-tight">
                Unsere
              </p>
              <h2 className="text-[28px] xs:text-[34px] sm:text-[40px] md:text-[48px] font-bold text-[#303030] tracking-tight leading-tight break-words hyphens-auto">
                Pakete
              </h2>
            </div>

            <div className="flex flex-col gap-2 max-w-3xl">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-[#303030] break-words hyphens-auto">
                Kein Versteck&shy;spiel beim Budget.
              </h3>
              <p className="text-base md:text-[18px] font-light text-[#303030]/85 leading-relaxed">
                Wir finden es selbst anstrengend, wenn man erst drei Telefonate führen muss, um überhaupt eine Zahl zu hören. Deshalb stehen hier unsere Startpreise. Wenn die Richtung für euch passt, sprechen wir über die Details.
              </p>
            </div>

            <span className="text-[14px] font-light text-[#39adca] tracking-wider uppercase mt-1">
              Preise
            </span>
          </div>
        </ScrollReveal>

        {/* Pricing Row 1: 3 Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          
          {/* Card 1: Einzelprojekte & Einstieg */}
          <ScrollReveal direction="up" distance={30} delay={100} className="flex">
          <div className="w-full bg-white border border-[#1a1a1a]/40 rounded-[16px] p-8 md:p-10 flex flex-col justify-between shadow-[0px_8px_12px_rgba(0,0,0,0.04)] hover:shadow-xl transition-all">
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-1">
                <h3 className="text-3xl lg:text-4xl font-bold text-[#303030] tracking-tight">
                  Einzelprojekte & Einstieg
                </h3>
                <p className="text-base font-light text-[#303030]/70">
                  Feste Leistungen
                </p>
              </div>

              <div className="flex flex-col gap-4 pt-2">
                <div className="flex justify-between items-center text-[16px] pb-2 border-b border-gray-100">
                  <span className="font-light text-[#303030]">Kurzvideo (Social Media)</span>
                  <span className="font-medium text-[#303030]">ab 160 €</span>
                </div>
                <div className="flex justify-between items-center text-[16px] pb-2 border-b border-gray-100">
                  <span className="font-light text-[#303030]">Mittelformat (1-3 Min.)</span>
                  <span className="font-medium text-[#303030]">ab 280 €</span>
                </div>
                <div className="flex justify-between items-center text-[16px] pb-2 border-b border-gray-100">
                  <span className="font-light text-[#303030]">Imagefilm (2-5 Min.)</span>
                  <span className="font-medium text-[#303030]">ab 800 €</span>
                </div>
                <div className="flex justify-between items-center text-[16px]">
                  <span className="font-light text-[#303030]">Drohnen-Aufnahmen</span>
                  <span className="font-medium text-[#303030]">als Add-On buchbar</span>
                </div>
              </div>
            </div>

            <button
              onClick={() => onOpenContact('Einzelprojekte & Einstieg')}
              className="mt-8 w-full bg-white hover:bg-[#303030] hover:text-white border-[1.5px] border-[#303030] text-[#303030] font-semibold text-[18px] py-4 rounded-full transition-colors cursor-pointer"
            >
              Projekt anfragen
            </button>
          </div>
          </ScrollReveal>

          {/* Card 2: Content-Flatrate (HIGHLIGHTED) */}
          <ScrollReveal direction="up" distance={30} delay={200} className="flex">
          <div className="w-full bg-white border-t-4 border-t-[#39adca] border-x border-b border-[#39adca] rounded-[16px] p-8 md:p-10 flex flex-col justify-between shadow-[0px_12px_24px_rgba(57,173,202,0.15)] relative transform lg:-translate-y-2">
            <div className="flex flex-col gap-6">
              <div className="flex items-center justify-between">
                <span className="text-[14px] font-light text-[#39adca] uppercase font-semibold">
                  Beliebteste Wahl
                </span>
                <span className="bg-[#39adca] text-white text-[12px] font-extrabold px-3 py-1 rounded-full uppercase tracking-wider">
                  Beliebteste Wahl
                </span>
              </div>

              <div className="flex flex-col gap-1">
                <h3 className="text-3xl lg:text-4xl font-bold text-[#303030] tracking-tight">
                  Content-Flatrate
                </h3>
                <p className="text-2xl font-light text-[#303030]">
                  ab 1.500 € / Monat
                </p>
              </div>

              <div className="flex flex-col gap-4 pt-2">
                <div className="flex items-center gap-3 text-[16px]">
                  <div className="w-5 h-5 rounded-full bg-[#39adca]/10 text-[#39adca] flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span className="font-light text-[#303030]">5-10 Videos pro Monat</span>
                </div>
                <div className="flex items-center gap-3 text-[16px]">
                  <div className="w-5 h-5 rounded-full bg-[#39adca]/10 text-[#39adca] flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span className="font-light text-[#303030]">Ganztagsdreh inklusive</span>
                </div>
                <div className="flex items-center gap-3 text-[16px]">
                  <div className="w-5 h-5 rounded-full bg-[#39adca]/10 text-[#39adca] flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span className="font-light text-[#303030]">Multi-Platform-Cut</span>
                </div>
                <div className="flex justify-between items-center text-[16px] pt-1 border-t border-gray-100">
                  <span className="font-light text-[#303030]">Optional: Social-Media-Betreuung</span>
                  <span className="font-medium text-[#303030]">+300 € / Monat</span>
                </div>
              </div>
            </div>

            <button
              onClick={() => onOpenContact('Content-Flatrate')}
              className="mt-8 w-full bg-[#39adca] hover:bg-[#2ba2bf] border-[1.5px] border-[#39adca] text-white font-semibold text-[18px] py-4 rounded-full transition-all cursor-pointer shadow-md hover:shadow-lg"
            >
              Erstgespräch vereinbaren
            </button>
          </div>
          </ScrollReveal>

          {/* Card 3: Enterprise & Campaign */}
          <ScrollReveal direction="up" distance={30} delay={300} className="flex">
          <div className="w-full bg-white border border-[#1a1a1a]/40 rounded-[16px] p-8 md:p-10 flex flex-col justify-between shadow-[0px_8px_12px_rgba(0,0,0,0.04)] hover:shadow-xl transition-all">
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-1">
                <h3 className="text-3xl lg:text-4xl font-bold text-[#303030] tracking-tight">
                  Enterprise & Campaign
                </h3>
                <p className="text-base font-light text-[#303030]/70">
                  Full Service
                </p>
              </div>

              <div className="flex flex-col gap-4 pt-2">
                <div className="flex items-center gap-3 text-[16px]">
                  <div className="w-5 h-5 rounded-full bg-gray-100 text-[#303030] flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span className="font-light text-[#303030]">Ganztags-Profi-Production</span>
                </div>
                <div className="flex items-center gap-3 text-[16px]">
                  <div className="w-5 h-5 rounded-full bg-gray-100 text-[#303030] flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span className="font-light text-[#303030]">48h-Erstschnitt-SLA</span>
                </div>
                <div className="flex items-center gap-3 text-[16px]">
                  <div className="w-5 h-5 rounded-full bg-gray-100 text-[#303030] flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span className="font-light text-[#303030]">Erweiterte Broadcast-Nutzungsrechte</span>
                </div>
                <div className="flex items-center gap-3 text-[16px]">
                  <div className="w-5 h-5 rounded-full bg-gray-100 text-[#303030] flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span className="font-light text-[#303030]">Fester Ansprechpartner</span>
                </div>

                <p className="text-xl font-light text-[#303030] pt-2">
                  ab 3.500 € (Projekte) / ab 6.000 € (Pakete)
                </p>
              </div>
            </div>

            <button
              onClick={() => onOpenContact('Enterprise & Campaign')}
              className="mt-8 w-full bg-white hover:bg-[#303030] hover:text-white border-[1.5px] border-[#303030] text-[#303030] font-semibold text-[18px] py-4 rounded-full transition-colors cursor-pointer"
            >
              Enterprise-Angebot anfordern
            </button>
          </div>
          </ScrollReveal>

        </div>

        {/* Pricing Row 2: 2 Cards (Web) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch pt-4">
          
          {/* Web Card 1: Statische Landing Page */}
          <ScrollReveal direction="up" distance={30} delay={100} className="flex">
          <div className="w-full bg-white border border-[#1a1a1a]/40 rounded-[16px] p-8 md:p-10 flex flex-col justify-between shadow-[0px_8px_12px_rgba(0,0,0,0.04)] hover:shadow-xl transition-all">
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-1">
                <h3 className="text-3xl lg:text-4xl font-bold text-[#303030] tracking-tight">
                  Statische Landing Page
                </h3>
                <p className="text-base font-light text-[#303030]/70">
                  Einzelprojekt
                </p>
              </div>

              <div className="flex flex-col gap-4 pt-2">
                <div className="flex justify-between items-center text-[16px] pb-2 border-b border-gray-100">
                  <span className="font-light text-[#303030]">Design System & Corporate Design</span>
                  <span className="font-medium text-[#303030]">optional</span>
                </div>
                <div className="flex justify-between items-center text-[16px]">
                  <span className="font-light text-[#303030]">Print Design Service</span>
                  <span className="font-medium text-[#303030]">optional</span>
                </div>
                
                <p className="text-3xl font-light text-[#303030] pt-4">
                  ab 600 €
                </p>
              </div>
            </div>

            <button
              onClick={() => onOpenContact('Statische Landing Page')}
              className="mt-8 w-full bg-white hover:bg-[#303030] hover:text-white border-[1.5px] border-[#303030] text-[#303030] font-semibold text-[18px] py-4 rounded-full transition-colors cursor-pointer"
            >
              Projekt anfragen
            </button>
          </div>
          </ScrollReveal>

          {/* Web Card 2: Webprojekt (DARK CARD WITH ACCENT BORDER) */}
          <ScrollReveal direction="up" distance={30} delay={200} className="flex">
          <div className="w-full bg-[#303030] border-[1.5px] border-[#39adca] rounded-[16px] p-8 md:p-10 flex flex-col justify-between text-white shadow-[0px_12px_24px_rgba(0,0,0,0.25)] relative">
            <div className="flex flex-col gap-6">
              <div className="flex items-center justify-between">
                <span className="text-[14px] font-light text-[#39adca] uppercase font-semibold">
                  Premium Paket
                </span>
                <span className="bg-[#39adca] text-[#303030] text-[12px] font-extrabold px-3 py-1 rounded-full uppercase tracking-wider">
                  Premium Paket
                </span>
              </div>

              <div className="flex flex-col gap-1">
                <h3 className="text-3xl lg:text-4xl font-bold text-white tracking-tight">
                  Webprojekt
                </h3>
                <p className="text-2xl font-light text-white/90">
                  Full Service Paket
                </p>
              </div>

              <div className="flex flex-col gap-4 pt-2">
                <div className="flex items-center gap-3 text-[16px]">
                  <div className="w-5 h-5 rounded-full bg-[#39adca] text-[#303030] flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5 font-bold" />
                  </div>
                  <span className="font-light text-white">Design System inklusive</span>
                </div>
                <div className="flex items-center gap-3 text-[16px]">
                  <div className="w-5 h-5 rounded-full bg-[#39adca] text-[#303030] flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5 font-bold" />
                  </div>
                  <span className="font-light text-white">CMS inklusive</span>
                </div>
                <div className="flex items-center gap-3 text-[16px]">
                  <div className="w-5 h-5 rounded-full bg-[#39adca] text-[#303030] flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5 font-bold" />
                  </div>
                  <span className="font-light text-white">Print Design Service inklusive</span>
                </div>

                <p className="text-3xl font-light text-white pt-2">
                  ab 1.450 €
                </p>
              </div>
            </div>

            <button
              onClick={() => onOpenContact('Webprojekt (Full Service)')}
              className="mt-8 w-full bg-white hover:bg-[#39adca] hover:text-white border-[1.5px] border-[#39adca] text-[#303030] font-semibold text-[18px] py-4 rounded-full transition-all cursor-pointer shadow-lg"
            >
              Angebot anfordern
            </button>
          </div>
          </ScrollReveal>

        </div>

        {/* Tax disclaimer */}
        <p className="text-[12px] text-[#959595] text-center font-normal pt-4">
          Alle angegebenen Preise sind Endpreise. Gemäß § 19 UStG wird keine Umsatzsteuer erhoben und ausgewiesen.
        </p>

      </div>
    </section>
  );
};
