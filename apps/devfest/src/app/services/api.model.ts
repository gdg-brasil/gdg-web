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
export interface Schedule {
  start: string;
  end: string;
  speakerName: string;
  lectureTitle: string;
}
export interface Track {
  embedded_code: string;
  name?: string;
  date?: string;
  schedule?: Schedule[];
}