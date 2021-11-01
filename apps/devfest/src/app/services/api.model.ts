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
}

export interface GaleryInfo {
  url: string;
}

export interface Sponsor {
  url: string;
  name: string;
  logoUrl: string;
  category: string;
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
  speakerName?: string;
  speakerPhotoUrl?: string;
  details?: {
    title: string;
    tags: string[];
    level: string;
    abstract: string;
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