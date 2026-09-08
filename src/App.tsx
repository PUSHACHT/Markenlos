import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProjectsSection } from './components/ProjectsSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { ServicesSection } from './components/ServicesSection';
import { ProcessSection } from './components/ProcessSection';
import { PricingSection } from './components/PricingSection';
import { ValuesAndTeamSection } from './components/ValuesAndTeamSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { Modal } from './components/Modal';

function App() {
  const [modalState, setModalState] = useState<{
    isOpen: boolean;
    type: 'contact' | 'video' | 'legal';
    context?: string;
    videoUrl?: string;
  }>({
    isOpen: false,
    type: 'contact',
    context: 'Allgemeine Projektanfrage',
  });

  const handleOpenContact = (context = 'Projektanfrage') => {
    setModalState({
      isOpen: true,
      type: 'contact',
      context,
    });
  };

  const handleOpenVideo = (videoUrl = 'https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ?autoplay=1') => {
    setModalState({
      isOpen: true,
      type: 'video',
      videoUrl,
    });
  };

  const handleOpenLegal = (context: 'impressum' | 'datenschutz') => {
    setModalState({
      isOpen: true,
      type: 'legal',
      context,
    });
  };

  const handleCloseModal = () => {
    setModalState((prev) => ({ ...prev, isOpen: false }));
  };

  return (
    <div className="min-h-screen bg-[#303030] text-white flex flex-col selection:bg-[#39adca] selection:text-white">
      {/* Sticky Navigation Bar */}
      <Navbar onOpenContact={handleOpenContact} />

      {/* Main Sections */}
      <main className="flex-1 flex flex-col">
        {/* 1. Hero Section with Video & Client Marquee */}
        <Hero 
          onOpenContact={handleOpenContact} 
          onOpenVideo={handleOpenVideo} 
        />

        {/* 2. Projektlandschaft (Shortform, Longform, Web) */}
        <ProjectsSection 
          onOpenVideo={handleOpenVideo}
          onOpenContact={handleOpenContact}
        />

        {/* 3. Zufriedene Kunden (Testimonials) */}
        <TestimonialsSection />

        {/* 4. Unsere Dienstleistungen (Central Interactive Hub) */}
        <ServicesSection onOpenContact={handleOpenContact} />

        {/* 5. Der Prozess (01-04) */}
        <ProcessSection />

        {/* 6. Unsere Pakete (Pricing Cards & Legal Disclaimer) */}
        <PricingSection onOpenContact={handleOpenContact} />

        {/* 7. Werteversprechen & Team Logos */}
        <ValuesAndTeamSection onOpenContact={handleOpenContact} />

        {/* 8. Kontakt Call-To-Action */}
        <ContactSection onOpenContact={handleOpenContact} />
      </main>

      {/* 9. Footer */}
      <Footer onOpenLegal={handleOpenLegal} />

      {/* Global Interactive Modal */}
      <Modal
        isOpen={modalState.isOpen}
        onClose={handleCloseModal}
        type={modalState.type}
        initialContext={modalState.context}
        videoUrl={modalState.videoUrl}
      />
    </div>
  );
}

export default App;

