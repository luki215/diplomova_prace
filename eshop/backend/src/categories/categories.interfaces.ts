import { Seo } from "src/shared/interfaces/seo.interface";

export interface Category {
    name: string;
    slug: string;
    background: string;
    seo: Seo
}