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
          <div className="flex flex-col gap-6 max-h-[75vh] overflow-y-auto pr-2 custom-scrollbar">
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <h3 className="text-2xl sm:text-3xl font-bold text-[#39adca]">
                {initialContext === 'impressum' ? 'Impressum' : 'Datenschutzerklärung'}
              </h3>
            </div>
            
            {initialContext === 'impressum' ? (
              <div className="flex flex-col gap-5 text-sm font-light text-white/90 leading-relaxed">
                <div>
                  <h4 className="text-base font-semibold text-white mb-1">Angaben gemäß § 5 DDG (Digitale-Dienste-Gesetz):</h4>
                  <p>
                    Markenlos<br />
                    Klaas & Team<br />
                    Hauptstraße 123<br />
                    51503 Rösrath bei Köln<br />
                    Deutschland
                  </p>
                </div>

                <div>
                  <h4 className="text-base font-semibold text-white mb-1">Kontakt:</h4>
                  <p>
                    E-Mail: <a href="mailto:hallo@markenlos.de" className="text-[#39adca] underline">hallo@markenlos.de</a><br />
                    Telefon: <a href="tel:+498912345678" className="text-[#39adca] underline">+49 89 123 456 78</a><br />
                    Website: <a href="https://markenlos.de" className="text-[#39adca] underline">www.markenlos.de</a>
                  </p>
                </div>

                <div>
                  <h4 className="text-base font-semibold text-white mb-1">Vertreten durch:</h4>
                  <p>Klaas & Team (Geschäftsführung)</p>
                </div>

                <div>
                  <h4 className="text-base font-semibold text-white mb-1">Umsatzsteuer:</h4>
                  <p className="text-xs text-white/70">
                    Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz: In Vorbereitung / Kleinunternehmerregelung gemäß § 19 UStG.
                  </p>
                </div>

                <div>
                  <h4 className="text-base font-semibold text-white mb-1">EU-Streitschlichtung:</h4>
                  <p className="text-xs text-white/70">
                    Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer" className="text-[#39adca] underline">https://ec.europa.eu/consumers/odr</a>. Wir sind nicht verpflichtet oder bereit, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
                  </p>
                </div>
              </div>
            ) : (
              <div className="flex flex-col gap-5 text-sm font-light text-white/90 leading-relaxed">
                <div>
                  <h4 className="text-base font-semibold text-white mb-1">1. Datenschutz auf einen Blick</h4>
                  <p>
                    Wir nehmen den Schutz deiner persönlichen Daten sehr ernst. Wir behandeln deine personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften (DSGVO, TDDDG) sowie dieser Datenschutzerklärung.
                  </p>
                </div>

                <div>
                  <h4 className="text-base font-semibold text-white mb-1">2. Verantwortliche Stelle</h4>
                  <p>
                    Markenlos<br />
                    Hauptstraße 123, 51503 Rösrath bei Köln<br />
                    E-Mail: <a href="mailto:hallo@markenlos.de" className="text-[#39adca] underline">hallo@markenlos.de</a>
                  </p>
                </div>

                <div>
                  <h4 className="text-base font-semibold text-white mb-1">3. Lokale Schriftarten (100% DSGVO-konform)</h4>
                  <p>
                    Diese Seite nutzt zur einheitlichen Darstellung von Schriftarten lokale Webfonts (Outfit, Montserrat, Plus Jakarta Sans). Diese sind lokal auf unserem Webserver installiert. Beim Aufruf unserer Seiten werden keine Verbindungen zu Servern von Google Fonts aufgebaut und keine IP-Adressen an externe Server übermittelt.
                  </p>
                </div>

                <div>
                  <h4 className="text-base font-semibold text-white mb-1">4. Keine Tracking-Cookies</h4>
                  <p>
                    Unsere Website verwendet keine zustimmungspflichtigen Tracking- oder Marketing-Cookies (kein Google Analytics, kein Meta Pixel). Daher ist auf unserer Webseite kein störendes Cookie-Banner erforderlich.
                  </p>
                </div>

                <div>
                  <h4 className="text-base font-semibold text-white mb-1">5. Kontaktformular & Kontaktaufnahme</h4>
                  <p>
                    Wenn du uns per Kontaktformular oder E-Mail Anfragen zukommen lässt, werden deine Angaben aus dem Anfrageformular inklusive der von dir dort angegebenen Kontaktdaten (Name, E-Mail, Telefonnummer, Projektbeschreibung) zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert (Art. 6 Abs. 1 lit. b DSGVO). Diese Daten geben wir niemals ohne deine Einwilligung weiter.
                  </p>
                </div>

                <div>
                  <h4 className="text-base font-semibold text-white mb-1">6. YouTube-Einbettung (Erweiterter Datenschutz & 2-Klick-Lösung)</h4>
                  <p>
                    Unsere Website bindet Videos der Plattform YouTube ein (Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland). Wir nutzen die datenschutzfreundliche 2-Klick-Lösung mit <code className="text-[#39adca] bg-black/40 px-1 py-0.5 rounded">youtube-nocookie.com</code>: Beim reinen Laden unserer Website werden noch keine Daten an YouTube übertragen. Erst wenn du aktiv auf das Video-Vorschaubild klickst, wird das Video geladen und deine IP-Adresse an YouTube übermittelt (Rechtsgrundlage Art. 6 Abs. 1 lit. a DSGVO).
                  </p>
                </div>

                <div>
                  <h4 className="text-base font-semibold text-white mb-1">7. Deine Rechte als betroffene Person</h4>
                  <p>
                    Du hast jederzeit das Recht auf unentgeltliche Auskunft über deine gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger und den Zweck der Datenverarbeitung sowie ein Recht auf Berichtigung, Sperrung oder Löschung dieser Daten. Hierzu sowie zu weiteren Fragen zum Thema personenbezogene Daten kannst du dich jederzeit an uns wenden.
                  </p>
                </div>
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
              className="mt-4 bg-[#39adca] text-[#303030] font-semibold px-8 py-3 transition-colors cursor-pointer"
            >
              Schließen
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
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

            {/* GDPR Consent Notice */}
            <p className="text-[11px] text-white/60 leading-relaxed">
              Mit dem Absenden erklärst du dich mit der Verarbeitung deiner Daten zur Bearbeitung der Anfrage gemäß unserer Datenschutzerklärung einverstanden. Deine Daten werden nicht an Dritte weitergegeben.
            </p>

            <div className="flex items-center gap-3 pt-1">
              <button
                type="submit"
                className="flex-1 bg-[#39adca] hover:bg-[#2ba2bf] text-[#303030] font-semibold py-4 px-6 transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg hover:shadow-xl"
              >
                <Send className="w-4 h-4" />
                <span>Anfrage jetzt absenden</span>
              </button>

              <a
                href="tel:+498912345678"
                className="border border-[#39adca] text-[#39adca] hover:bg-[#39adca]/10 p-4 flex items-center justify-center transition-colors"
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
