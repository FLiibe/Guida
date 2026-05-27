export interface Module {
  id: number;
  title: string;
  subtitle: string;
  page: number;
  description: string;
  highlights: string[];
}

export interface Testimonial {
  id: number;
  sender: string;
  avatar: string;
  message: string;
  revenue?: string;
  source?: string;
  imageAlt?: string;
}

export interface DigitalIdea {
  id: number;
  name: string;
  target: string;
  difficulty: 'Facile' | 'Media' | 'Alta';
  platform: string;
  reason: string;
}

export interface Category {
  id: string;
  name: string;
  ideas: DigitalIdea[];
}

export interface PromptItem {
  id: number;
  title: string;
  prompt: string;
  category: string;
}

export interface CoverStyle {
  id: string;
  name: string;
  palette: string[];
  description: string;
  idealFor: string;
}

export interface FAQItem {
  id: number;
  question: string;
  answer: string;
}
