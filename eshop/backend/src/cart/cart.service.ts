import { Injectable } from '@nestjs/common';
import { Observable, of } from 'rxjs';
import { products } from 'src/products/products.data';
import { Cart, CartItem } from 'src/shared/interfaces/cart.interface';
import { carts } from './cart.data';

@Injectable()
export class CartService {
  find(user: string): Observable<Cart> {
    const cart = this.getOrCreateCart(user);
    return of(cart);
  }

  public add(
    user: string,
    productSlug: string,
    count: number,
  ): Observable<Cart> {
    const cart = this.getOrCreateCart(user);
    const item: CartItem = this.getOrCreateCartItem(cart, productSlug);

    item.count += count;

    return of(cart);
  }

  public remove(
    user: string,
    productSlug: string,
    count: number,
  ): Observable<Cart> {
    const cart = this.getOrCreateCart(user);
    const item: CartItem = this.getOrCreateCartItem(cart, productSlug);

    item.count -= count;

    return of(cart);
  }

  private getOrCreateCart(user: string): Cart {
    let cart = carts.get(user);
    if (!cart) {
      cart = { items: [] };
      carts.set(user, cart);
    }
    return cart;
  }

  private getOrCreateCartItem(cart: Cart, productSlug: string): CartItem {
    return (
      cart.items.find((it) => it.product.slug === productSlug) ?? {
        product: products.find((p) => p.slug === productSlug),
        count: 0,
      }
    );
  }
}
