import { Seo } from "./seo.interface";

export interface StaticPage {
    title: string;
    slug: string;
    content: string;
    seo: Seo
}