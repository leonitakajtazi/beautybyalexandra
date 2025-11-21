import { ServiceItem, FaqItem, GalleryImage } from './types';

export const INSTAGRAM_HANDLE = "@_lashes.byas";
export const INSTAGRAM_URL = "https://www.instagram.com/_lashes.byas/";
export const CEO_HANDLE = "@_.alexx.a._";

export const SERVICES: ServiceItem[] = [
  {
    id: 'classic',
    title: 'Classic Lashes',
    description: 'Die 1:1 Technik für einen natürlichen, aber definierten Mascara-Look. Perfekt für den Alltag.',
    price: 'ab 65€',
    iconName: 'Feather',
  },
  {
    id: 'hybrid',
    title: 'Hybrid Lashes',
    description: 'Ein Mix aus Classic und leichtem Volumen. Texturierter Look mit etwas mehr Fülle.',
    price: 'ab 75€',
    iconName: 'Layers',
  },
  {
    id: 'volume',
    title: 'Volume Lashes',
    description: 'Für den glamourösen Auftritt. Handgefertigte Fächer für maximale Dichte und Fluffigkeit.',
    price: 'ab 85€',
    iconName: 'Sparkles',
  },
  {
    id: 'lift',
    title: 'Lash Lift & Tint',
    description: 'Schwung und Farbe für deine Naturwimpern. Inklusive Keratin-Pflege für gesunden Glanz.',
    price: 'ab 45€',
    iconName: 'Eye',
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
    answer: "Du kannst bei mir im Homestudio bequem in Bar oder per PayPal bezahlen. Bitte bringe den Betrag möglichst passend mit."
  },
];

// Using Picsum for placeholders with specific dimensions
export const GALLERY_IMAGES: GalleryImage[] = [
  { id: 1, src: "https://picsum.photos/id/338/600/800", alt: "Natural Lash Look Close Up" },
  { id: 2, src: "https://picsum.photos/id/64/600/800", alt: "Woman Portrait Beauty" },
  { id: 3, src: "https://picsum.photos/id/21/600/800", alt: "Studio Details and Tools" },
  { id: 4, src: "https://picsum.photos/id/325/600/800", alt: "Volume Lashes Side Profile" },
  { id: 5, src: "https://picsum.photos/id/129/600/800", alt: "Cozy Studio Atmosphere" },
  { id: 6, src: "https://picsum.photos/id/65/600/800", alt: "Lash Lift Results" },
];
