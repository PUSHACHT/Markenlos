import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  onOpenContact: (type?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenContact }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Über uns', href: '#ueber-uns' },
    { label: 'Services', href: '#services' },
    { label: 'Teams', href: '#team' },
    { label: 'Prozess', href: '#prozess' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-[#303030]/95 backdrop-blur-md shadow-2xl py-3 border-b border-white/10' 
          : 'bg-[#303030] py-4 sm:py-6'
      }`}
    >
      <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-10 md:px-16 lg:px-24 flex items-center justify-between">
        {/* Staggered Brand Logo */}
        <a href="#" className="flex items-center">
          <Logo size="nav" />
        </a>

        {/* Desktop Navigation Links (Figma: Light 16px text-white) */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-[16px] font-light text-white hover:text-[#39adca] transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}

          {/* CTA Button "Anfragen" (Figma: bg-white border border-[#303030] px-6 py-3 text-[#303030] 16px Regular) */}
          <button
            onClick={() => onOpenContact('Anfrage')}
            className="bg-white hover:bg-[#39adca] text-[#303030] hover:text-white border border-[#303030] px-6 py-3 font-normal text-[16px] leading-[24px] transition-all duration-200 cursor-pointer ml-2"
          >
            Anfragen
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={() => onOpenContact('Anfrage')}
            className="bg-white text-[#303030] hover:bg-[#39adca] text-xs font-medium px-3.5 py-2 transition-colors cursor-pointer"
          >
            Anfragen
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-white p-2 focus:outline-none cursor-pointer"
            aria-label="Menü"
          >
            {mobileMenuOpen ? <X className="w-6 h-6 text-[#39adca]" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#1a1a1a] border-b border-white/10 px-6 py-6 flex flex-col gap-4 animate-in slide-in-from-top-3 duration-200 shadow-2xl">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-light text-white hover:text-[#39adca] transition-colors py-2 border-b border-white/5"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenContact('Anfrage');
              }}
              className="w-full bg-[#39adca] text-[#303030] font-semibold py-3 px-6 text-center text-sm"
            >
              Projekt anfragen
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

