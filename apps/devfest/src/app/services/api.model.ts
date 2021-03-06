export interface Link {
  title: string;
  description: string;
  link: string;
  cta: string;
}

export interface Organizer {
  name: string;
  photoUrl: string;
  gdg: string;
  facebook: string;
  github: string;
  instagram: string;
  linkedin: string;
  twitter: string;
  site: string;
}

export interface MapInfo {
  url: string;
  alt: string;
  title: string;
  description: string;
}

export interface Speaker {
  name: string;
  company: string;
  photoUrl: string;
  bio: string;
  gde: boolean;
  googler: boolean;
  featured: boolean;
  position: string;
  facebook: string;
  github: string;
  instagram: string;
  linkedin: string;
  twitter: string;
  site: string;
  title: string;
}

export interface GaleryInfo {
  url: string;
}

export interface Sponsor {
  url: string;
  name: string;
  logoUrl: string;
  category: string;
  order: number;
}

export interface SponsorsByCategory {
  name: string;
  order: number;
  sponsors: Sponsor[]
}

export interface Talk {
  start: string;
  end: string;
  name?: string;
  date?: string;
  speakers: {
    name: string;
    photoUrl: string;
  }[];
  details?: {
    title: string;
    tags: string[];
    level: string;
    abstract: string;
    link?: string;
    knowlegde?: string;
    embed_code?: string;
  }
}

export interface TrackDate {
  label: string;
  tracks: Track[];
}
export interface Track {
  embedded_code: string;
  name?: string;
  date?: string;
  schedule?: Talk[];
}

export interface Swag {
  title: string;
  description: string;
  link: string;
  imageUrl: string;
  author: string;
  order: number;
  type: string;
  cta: string;
}
