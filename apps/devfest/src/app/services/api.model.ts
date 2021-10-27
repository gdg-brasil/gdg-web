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

export interface VideoInfo {
  embedded_code: string;
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

export interface Track {
  name: string;
  date: string;
  embedded_code: string;
}

export interface Scheduler {
  start: string;
  end: string;
  embedded_code: string;
}