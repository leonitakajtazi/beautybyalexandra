export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  price: string;
  iconName: 'Sparkles' | 'Feather' | 'Eye' | 'Layers';
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface GalleryImage {
  id: number;
  src: string;
  alt: string;
}