import { ServiceItem, FaqItem, GalleryImage } from './types';

export const INSTAGRAM_HANDLE = "@_lashes.byas";
export const INSTAGRAM_URL = "https://www.instagram.com/_lashes.byas/";
export const CEO_HANDLE = "@_.alexx.a._";

export const SERVICES: ServiceItem[] = [
  {
    id: 'classic',
    title: 'Classic Lashes',
    image: './images/foto1.jpg',
  },
  {
    id: 'hybrid',
    title: 'Lash- oder Browlifting ( Kombipaket möglich)',
    image: './images/foto2.jpg',
  },
  {
    id: 'volume',
    title: 'Volumenlashes',
    image: './images/foto3.jpg',
  },

];

export const FAQS: FaqItem[] = [
  {
    question: "Wie lange halten die Lash Extensions?",
    answer: "Bei guter Pflege halten die Extensions ca. 3-5 Wochen. Da wir täglich Naturwimpern verlieren, empfehle ich ein Auffüllen (Refill) alle 2-3 Wochen, um den Look perfekt zu erhalten."
  },
  {
    question: "Wie bereite ich mich auf den Termin vor?",
    answer: "Bitte komm ungeschminkt (kein Mascara, kein Augen-Make-up) und verzichte 24h vorher auf ölhaltige Cremes um die Augenpartie. Kontaktlinsen sollten vor der Behandlung herausgenommen werden."
  },
  {
    question: "Schadet die Behandlung meinen Naturwimpern?",
    answer: "Nein, bei professioneller Anwendung und korrekter Isolation wird deine Naturwimper nicht beschädigt. Ich achte sehr genau auf das Gewicht der Extensions, um deine Wimpern gesund zu halten."
  },
  {
    question: "Wie läuft die Bezahlung ab?",
    answer: "Die Bezahlung erfolgt in bar."
  },
];

// Using Picsum for placeholders with specific dimensions
export const GALLERY_IMAGES: GalleryImage[] = [
  { id: 1, src: "./images/1.PNG", alt: "Natural Lash Look Close Up" },
  { id: 2, src: "./images/foto4.jpg", alt: "Woman Portrait Beauty" },
  { id: 3, src: "./images/3.PNG", alt: "Studio Details and Tools" },
  { id: 4, src: "./images/4.png", alt: "Volume Lashes Side Profile" },
  { id: 5, src: "./images/foto5.jpg", alt: "Cozy Studio Atmosphere" },
  { id: 6, src: "./images/foto6.jpg", alt: "Lash Lift Results" },
];
