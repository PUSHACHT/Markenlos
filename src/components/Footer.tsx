import React from 'react';

interface FooterProps {
  onOpenLegal: (type: 'impressum' | 'datenschutz') => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenLegal }) => {
  return (
    <footer className="bg-[#1a1a1a] text-white py-16 sm:py-20 lg:py-[160px] px-6 sm:px-10 md:px-16 lg:px-24 w-full overflow-hidden">
      <div className="w-full max-w-[1440px] mx-auto flex flex-col gap-12 lg:gap-14">
        
        {/* Top row: Copyright & Legal (Figma: Light 12px leading-16px tracking-[0.25px]) */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-[12px] font-light leading-[16px] tracking-[0.25px] text-white">
          <p>
            © 2025 Markenlos GmbH · Alle Rechte vorbehalten
          </p>
          <div className="flex gap-6">
            <button 
              onClick={() => onOpenLegal('impressum')}
              className="hover:text-[#39adca] transition-colors cursor-pointer"
            >
              Impressum
            </button>
            <button 
              onClick={() => onOpenLegal('datenschutz')}
              className="hover:text-[#39adca] transition-colors cursor-pointer"
            >
              Datenschutz
            </button>
          </div>
        </div>

        {/* Middle row: Contact details (Figma: E-Mail, Telefon, Standort with 32px vertical dividers) */}
        <div className="flex flex-wrap items-center gap-6 sm:gap-10">
          
          {/* E-Mail */}
          <div className="flex flex-col items-start gap-1">
            <span className="text-[12px] font-light leading-[16px] tracking-[0.25px] text-white">
              E-Mail
            </span>
            <a 
              href="mailto:hallo@markenlos.de" 
              className="text-[14px] font-light leading-[20px] text-white hover:text-[#39adca] transition-colors"
            >
              hallo@markenlos.de
            </a>
          </div>

          <div className="w-px h-[32px] bg-white hidden sm:block" />

          {/* Telefon */}
          <div className="flex flex-col items-start gap-1">
            <span className="text-[12px] font-light leading-[16px] tracking-[0.25px] text-white">
              Telefon
            </span>
            <a 
              href="tel:+498912345678" 
              className="text-[14px] font-light leading-[20px] text-white hover:text-[#39adca] transition-colors"
            >
              +49 89 123 456 78
            </a>
          </div>

          <div className="w-px h-[32px] bg-white hidden sm:block" />

          {/* Standort */}
          <div className="flex flex-col items-start gap-1">
            <span className="text-[12px] font-light leading-[16px] tracking-[0.25px] text-white">
              Standort
            </span>
            <p className="text-[14px] font-light leading-[20px] text-white">
              Rösrath bei Köln, Deutschland
            </p>
          </div>

        </div>

        {/* Disclaimer (Figma: Light 14px leading-20px opacity-65) */}
        <p className="text-[14px] font-light leading-[20px] opacity-65 text-white">
          Alle angegebenen Preise sind Endpreise. Gemäß § 19 UStG wird keine Umsatzsteuer erhoben und ausgewiesen.
        </p>

      </div>
    </footer>
  );
};

