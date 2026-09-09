import piJugendhilfeImg from '../assets/web-previews/pi-jugendhilfe.png';
import mkExecutiveImg from '../assets/web-previews/mk-executive.png';
import a10MediaImg from '../assets/web-previews/a10-media.png';
import uniteSocialImg from '../assets/web-previews/unitesocial.png';
import smithVisualsImg from '../assets/web-previews/smithvisuals.png';

export interface WebProject {
  title: string;
  desc: string;
  kpi: string;
  company: string;
  url: string;
  displayUrl: string;
  badge: string;
  previewImage: string;
  allowsIframe: boolean;
  previewColor?: string;
  accentColor?: string;
}

export const initialWebProjects: WebProject[] = [
  {
    title: "PI JUGENDHILFE WEB EXPERIENCE & CMS",
    desc: "Ambulante Hilfen zur Erziehung in Hilden und Umgebung. Psychologisch fundiert, strukturiert und vertrauensvoll digital dargestellt.",
    kpi: "+160% mehr qualifizierte Erstkontakte von Familien & Jugendämtern",
    company: "Praxis für interdisziplinäre Jugendhilfe PiJ GmbH",
    url: "https://www.pi-jugendhilfe.com/",
    displayUrl: "www.pi-jugendhilfe.com",
    badge: "Jugendhilfe & CMS",
    previewImage: piJugendhilfeImg,
    allowsIframe: true,
    previewColor: "#2b4c7e",
    accentColor: "#39adca",
  },
  {
    title: "EXECUTIVE COACHING & LEADERSHIP PLATFORM",
    desc: "Internationale Webpräsenz für C-Level Coaching und Führungskräfteentwicklung an der Schnittstelle DACH–Südostasien & China.",
    kpi: "Internationale C-Level Mandate und 100/100 Lighthouse Performance",
    company: "Matthias Kopke Executive Coaching",
    url: "https://mk-executive.com/",
    displayUrl: "mk-executive.com",
    badge: "Executive Leadership",
    previewImage: mkExecutiveImg,
    allowsIframe: true,
    previewColor: "#1e293b",
    accentColor: "#d97706",
  },
  {
    title: "A10 MEDIA AGENTURWEBSITE & PORTFOLIO",
    desc: "Moderne, blitzschnelle Agentur-Plattform für Videoproduktion, Recruiting-Kampagnen und Performance-Marketing.",
    kpi: "Verdopplung der monatlichen Projektanfragen über die Landing Page",
    company: "A10 Media Agentur",
    url: "https://a10-media.com/",
    displayUrl: "a10-media.com",
    badge: "Media Agentur",
    previewImage: a10MediaImg,
    allowsIframe: true,
    previewColor: "#18181b",
    accentColor: "#39adca",
  },
  {
    title: "EUROPEAN SOCIAL PLATFORM LANDING PAGE",
    desc: "Europäische Social-Media-Plattform mit Fokus auf Transparenz, Datenschutz, AI-Fact-Checking und digitale Souveränität.",
    kpi: "Über 15.000 Early-Access Registrierungen in der Launch-Phase",
    company: "Unitesocial Europe",
    url: "https://unitesocial.eu/",
    displayUrl: "unitesocial.eu",
    badge: "Tech Platform",
    previewImage: uniteSocialImg,
    allowsIframe: true,
    previewColor: "#0f172a",
    accentColor: "#6366f1",
  },
  {
    title: "SMITH VISUALS CINEMATIC PORTFOLIO",
    desc: "High-End Portfolio für cineastische Videoproduktionen und hochwertige Foto-Inszenierungen für moderne Marken.",
    kpi: "+220% längere Verweildauer und direkte B2B-Kundenabschlüsse",
    company: "Smith Visuals",
    url: "https://smithvisuals.de/",
    displayUrl: "smithvisuals.de",
    badge: "Cinematic Portfolio",
    previewImage: smithVisualsImg,
    allowsIframe: true,
    previewColor: "#171717",
    accentColor: "#39adca",
  },
];
