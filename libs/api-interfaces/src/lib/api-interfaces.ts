export interface Organizer {
  name: string;
  image: string;
  twitter: string;
  facebook: string;
  instagram: string;
  linkedin: string;
}

export interface Community {
  name: string;
  type: 'gdg' | 'wtm'; 
  website: string;
}
