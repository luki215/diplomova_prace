import { Seo } from './seo.interface';

export interface Category {
  name: string;
  slug: string;
  background: string;
  seo: Seo;
}
