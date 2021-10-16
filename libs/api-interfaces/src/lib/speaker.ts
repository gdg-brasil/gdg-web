import { Badge } from './badge';
import { Social } from './social';

export interface Speaker {
  name: string;
  company: string;
  bio: string;
  photoUrl: string;
  order?: number;
  title?: string;
  country?: string;
  featured?: boolean;
  badges?: Badge[];
  pronouns?: string;
  socials?: Social[];
}
