import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Product } from '../../interfaces/product.interface';
import { CartService } from '../../services/cart.service';
import { ToastService } from '../../services/toast.service';

@Component({
  selector: 'app-cart-buttons',
  templateUrl: './cart-buttons.component.html',
  styleUrls: ['./cart-buttons.component.scss'],
})
export class CartButtonsComponent implements OnInit {
  @Input() product: Product | null = null;
  public fc = new FormControl(1);
  constructor(private cart: CartService, private toast: ToastService) {}

  ngOnInit() {}

  public addToCart() {
    this.cart
      .add({
        productSlug: this.product?.slug ?? '',
        count: this.fc.value,
      })
      .subscribe((res) => {
        this.toast.show('Produkt přidán do košíku');
      });
  }
}
