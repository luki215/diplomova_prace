import { Category } from "./categories.interfaces";

export interface StockState_Available {
    state: "available";
    instockCount: number,
    deliveryIn: number
}

export interface StockState_AvailableSoon {
    state: "available-soon";
    deliveryIn: number
}

export interface StockState_Unavailable {
    state: "unavailable";
}

export type StockState = StockState_Available | StockState_AvailableSoon | StockState_Unavailable

export interface Product_Property {
    name: string;
    ico?: string;
    value: string;
}


export interface Product {
    title: string;
    slug: string
    image: string;
    shortDesc: string;
    description: string;
    price: number;
    stockState: StockState;
    similarProducts: Product[];
    category: Category;
    properties: Product_Property[]
}