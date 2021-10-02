import { Badge } from './badge';
import { Social } from './social';

export interface Speaker {
  name: string;
  photoUrl: string;
  bio: string;
  company: string;
  companyLogoUrl?: string;
  order?: number;
  title?: string;
  country?: string;
  featured?: boolean;
  badges?: Badge[];
  pronouns?: string;
  socials?: Social[];
}
