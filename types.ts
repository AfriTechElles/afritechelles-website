import { LucideIcon } from 'lucide-react';

export type PageName = 'home' | 'about' | 'programs' | 'mentorship' | 'events' | 'contact';

export interface Program {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  category: 'Mentorat' | 'Formation' | 'Événement' | 'Carrière';
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  quote: string;
  imageUrl: string;
}

export interface Metric {
  id: string;
  label: string;
  value: string;
  description: string;
}

export interface Partner {
  name: string;
  logoText: string; 
}

export interface Mentor {
  id: string;
  name: string;
  role: string;
  company: string;
  imageUrl: string;
  expertise: string[];
  bio: string;
  available: boolean;
}

export interface EventItem {
  id: string;
  title: string;
  date: string;
  location: string;
  type: 'Online' | 'In-Person';
  description: string;
  imageUrl: string;
}