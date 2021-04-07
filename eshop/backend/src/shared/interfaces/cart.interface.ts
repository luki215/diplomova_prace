import { Product } from './product.interface';

export type Sale = '5P' | '10P' | '100' | '200';

export interface CartItem {
  product: Product;
  count: number;
}

export interface Cart {
  items: CartItem[];
}

export interface CartParams {
  productSlug: string;
  count: number;
}
