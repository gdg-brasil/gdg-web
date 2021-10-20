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
  facebook: string;
  github: string;
  instagram: string;
  linkedin: string;
  site: string;
  gde: boolean;
  googler: boolean;
  featured: boolean;
  position: string;
}
