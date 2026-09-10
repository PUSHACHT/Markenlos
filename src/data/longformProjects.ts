import thumbPG1 from '../assets/thumbnails/long-pG1QZeO_5Ok.jpg';
import thumb1sr from '../assets/thumbnails/long-1srCmXos4lk.jpg';
import thumbHZQ from '../assets/thumbnails/long-HZQn5xHfyOM.jpg';

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
    title: "AUSBILDUNG & ERZIEHERINNEN BERUFSKOLLEG",
    desc: "Persönliche Einblicke und emotionale Erfahrungsberichte über die Ausbildung an der Bleibergquelle zur gezielten Fachkräfte-Gewinnung.",
    kpi: "Verdopplung der qualifizierten Bewerbungen für das Ausbildungsjahr",
    company: "Berufskolleg Bleibergquelle",
    duration: "03:45 Min",
    videoId: "HZQn5xHfyOM",
    thumb: thumbHZQ,
  },
];
