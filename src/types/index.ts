export type Category = 
  | 'all'
  | 'wedding'
  | 'pre-wedding'
  | 'portrait'
  | 'graduation'
  | 'commercial'
  | 'event';

export interface ExifData {
  camera: string;
  lens: string;
  focalLength: string;
  aperture: string;
  shutterSpeed: string;
  iso: string;
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: Category;
  categoryLabel: string;
  year: string;
  location: string;
  aspectRatio: 'landscape' | 'portrait' | 'wide' | 'square';
  gridSpan: string;
  exif: ExifData;
  story: string;
  photoKey: string;
  client?: string;
}

export interface ServiceItem {
  id: string;
  number: string;
  name: string;
  tagline: string;
  description: string;
  deliverables: string[];
  duration: string;
  investmentFromIdr: string;
  investmentFromUsd: string;
  photoKey: string;
  idealFor: string;
}

export interface PackageTier {
  id: 'essential' | 'signature' | 'bespoke';
  name: string;
  subtitle: string;
  priceIdr: string;
  priceUsd: string;
  highlight?: boolean;
  duration: string;
  team: string;
  photos: string;
  deliverables: string[];
  turnaround: string;
  notes: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  client: string;
  role: string;
  sessionType: string;
  year: string;
  location: string;
}

export interface FaqItem {
  question: string;
  answer: string;
  category?: string;
}

export interface BookingFormData {
  serviceId: string;
  packageTier: 'essential' | 'signature' | 'bespoke';
  fullName: string;
  email: string;
  phone: string;
  date: string;
  location: string;
  notes: string;
  currency: 'IDR' | 'USD';
}
