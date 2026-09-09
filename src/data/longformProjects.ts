import thumbPG1 from '../assets/thumbnails/long-pG1QZeO_5Ok.jpg';
import thumb1sr from '../assets/thumbnails/long-1srCmXos4lk.jpg';

export interface LongformProject {
  title: string;
  desc: string;
  kpi: string;
  company: string;
  duration: string;
  videoId: string;
  thumb: string;
}

export const initialLongformProjects: LongformProject[] = [
  {
    title: "LIVE MUSIC AFTERMOVIE & EVENT EXPERIENCE",
    desc: "Cinematische Festival- und Eventbegleitung mit packendem Sounddesign, dynamischer Kameraführung und echten Emotionen.",
    kpi: "Über 65.000 organische Aufrufe & maximale Begeisterung",
    company: "Live Music Events",
    duration: "03:24 Min",
    videoId: "pG1QZeO_5Ok",
    thumb: thumbPG1,
  },
  {
    title: "IMAGEFILM BERUFSKOLLEG BLEIBERGQUELLE",
    desc: "Authentischer Einblick in Bildung, Gemeinschaft und modernen Campus-Alltag zur nachhaltigen Schüler- & Azubigewinnung.",
    kpi: "+280% mehr Anmeldungen zum Tag der offenen Tür",
    company: "Berufskolleg Bleibergquelle",
    duration: "04:12 Min",
    videoId: "1srCmXos4lk",
    thumb: thumb1sr,
  },
  {
    title: "SPORT COACHING CINEMA KAMPAGNE",
    desc: "Dynamisches Storytelling und moderne 4K-Kameraführung für High-Performance Sport- und Athletik-Coaching.",
    kpi: "+310% gesteigerte Markenbekanntheit & Neukunden-Anfragen",
    company: "IDR Sport Coaching",
    duration: "02:30 Min",
    videoId: "pG1QZeO_5Ok",
    thumb: thumbPG1,
  },
  {
    title: "DOKUMENTATION & MEILENSTEIN-EVENT",
    desc: "Begleitender Imagefilm zum Firmenjubiläum inklusive Drohnenaufnahmen und ungefilterten Mitarbeiter-Interviews.",
    kpi: "Ausgezeichnet für beste B2B-Unternehmenskommunikation",
    company: "Velten & Tönnies",
    duration: "05:12 Min",
    videoId: "1srCmXos4lk",
    thumb: thumb1sr,
  },
];
