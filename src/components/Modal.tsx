import React, { useState } from 'react';
import { X, CheckCircle, Send, Phone, Play } from 'lucide-react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: 'contact' | 'video' | 'legal';
  initialContext?: string;
  videoUrl?: string;
}

export const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  type,
  initialContext = 'Allgemeine Anfrage',
  videoUrl = 'https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ?autoplay=1',
}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-2xl bg-[#303030] border border-white/20 shadow-2xl p-6 sm:p-10 text-white overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-white/70 hover:text-white p-2 rounded-full hover:bg-white/10 transition-colors"
          aria-label="Schließen"
        >
          <X className="w-6 h-6" />
        </button>

        {type === 'video' ? (
          <div className="flex flex-col gap-4">
            <h3 className="text-2xl font-bold text-white flex items-center gap-2">
              <Play className="w-5 h-5 text-[#39adca]" />
              <span>Markenlos Showreel</span>
            </h3>
            <div className="relative aspect-video w-full bg-black rounded overflow-hidden shadow-2xl">
              <iframe
                src={videoUrl}
                title="Markenlos Video Showcase"
                className="w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        ) : type === 'legal' ? (
          <div className="flex flex-col gap-6 max-h-[75vh] overflow-y-auto pr-2">
            <h3 className="text-3xl font-bold text-[#39adca]">
              {initialContext === 'impressum' ? 'Impressum' : 'Datenschutzerklärung'}
            </h3>
            {initialContext === 'impressum' ? (
              <div className="flex flex-col gap-4 text-sm font-light text-white/90 leading-relaxed">
                <p className="font-medium text-white">Angaben gemäß § 5 TMG:</p>
                <p>
                  Markenlos GmbH<br />
                  Hauptstraße 123<br />
                  51503 Rösrath bei Köln<br />
                  Deutschland
                </p>
                <p>
                  <strong>Vertreten durch:</strong> Klaas & Team<br />
                  <strong>Kontakt:</strong> E-Mail: hallo@markenlos.de | Telefon: +49 89 123 456 78
                </p>
                <p className="text-xs text-white/60">
                  Umsatzsteuer-Identifikationsnummer: Gemäß § 19 UStG wird keine Umsatzsteuer erhoben und ausgewiesen (Kleinunternehmerregelung / Status).
                </p>
              </div>
            ) : (
              <div className="flex flex-col gap-4 text-sm font-light text-white/90 leading-relaxed">
                <p>
                  Der Schutz Ihrer persönlichen Daten ist uns ein besonderes Anliegen. Wir verarbeiten Ihre Daten daher ausschließlich auf Grundlage der gesetzlichen Bestimmungen (DSGVO, TKG 2003).
                </p>
                <p>
                  Wenn Sie per Formular auf der Website oder per E-Mail Kontakt mit uns aufnehmen, werden Ihre angegebenen Daten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
                </p>
              </div>
            )}
          </div>
        ) : submitted ? (
          <div className="flex flex-col items-center text-center py-10 gap-4">
            <div className="w-16 h-16 rounded-full bg-[#39adca]/20 text-[#39adca] flex items-center justify-center">
              <CheckCircle className="w-10 h-10" />
            </div>
            <h3 className="text-3xl font-bold text-white">Vielen Dank!</h3>
            <p className="text-white/80 max-w-md font-light leading-relaxed">
              Deine Anfrage für <strong>{initialContext}</strong> ist erfolgreich bei uns eingegangen. Wir melden uns innerhalb von 24 Stunden bei dir.
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className="mt-4 bg-[#39adca] text-[#303030] font-semibold px-8 py-3 transition-colors"
            >
              Schließen
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <div className="flex flex-col gap-1">
              <span className="text-xs text-[#39adca] font-semibold uppercase tracking-wider">
                Unverbindlich anfragen
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-white">
                {initialContext}
              </h3>
              <p className="text-sm font-light text-white/80">
                Lass uns über dein Vorhaben sprechen. Wir melden uns schnellstmöglich zurück.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-medium text-white/80">Dein Name *</label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Max Mustermann"
                  className="bg-[#1a1a1a] border border-white/20 px-4 py-3 text-white text-sm focus:outline-none focus:border-[#39adca]"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-medium text-white/80">E-Mail-Adresse *</label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="max@unternehmen.de"
                  className="bg-[#1a1a1a] border border-white/20 px-4 py-3 text-white text-sm focus:outline-none focus:border-[#39adca]"
                />
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-medium text-white/80">Telefonnummer (optional)</label>
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="+49 170 1234567"
                className="bg-[#1a1a1a] border border-white/20 px-4 py-3 text-white text-sm focus:outline-none focus:border-[#39adca]"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-medium text-white/80">Erzähl uns kurz von deinem Projekt</label>
              <textarea
                rows={3}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Wir möchten einen neuen Imagefilm produzieren..."
                className="bg-[#1a1a1a] border border-white/20 px-4 py-3 text-white text-sm focus:outline-none focus:border-[#39adca] resize-none"
              />
            </div>

            <div className="flex items-center gap-3 pt-2">
              <button
                type="submit"
                className="flex-1 bg-[#39adca] hover:bg-[#2ba2bf] text-[#303030] font-semibold py-4 px-6 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <Send className="w-4 h-4" />
                <span>Anfrage jetzt absenden</span>
              </button>

              <a
                href="tel:+498912345678"
                className="border border-[#39adca] text-[#39adca] hover:bg-[#39adca]/10 p-4 flex items-center justify-center"
                title="Direkt anrufen"
              >
                <Phone className="w-5 h-5" />
              </a>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
