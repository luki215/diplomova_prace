import { Product } from "./product.interface";
import { Seo } from "./seo.interface";


export interface Homepage_Campaign {
    title: string;
    products: Product[]
}

export interface Homepage {
    seo: Seo,
    campaigns: Homepage_Campaign[]
}