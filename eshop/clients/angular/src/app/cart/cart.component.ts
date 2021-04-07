import { Component, OnInit, TrackByFunction } from '@angular/core';
import { Observable } from 'rxjs';
import { Cart, CartItem } from '../shared/interfaces/cart.interface';
import { CartService } from '../shared/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  public cart$: Observable<Cart>;
  constructor(private cartService: CartService) {
    this.cart$ = this.cartService.cart$;
  }

  ngOnInit(): void {}

  public trackBy: TrackByFunction<CartItem> = (idx, it) => it.product.slug;
}
