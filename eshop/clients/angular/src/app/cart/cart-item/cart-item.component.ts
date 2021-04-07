import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { switchMap } from 'rxjs/operators';
import { Cart, CartItem } from 'src/app/shared/interfaces/cart.interface';
import { CartService } from 'src/app/shared/services/cart.service';
import { ToastService } from 'src/app/shared/services/toast.service';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CartItemComponent implements OnInit, OnChanges {
  @Input() cartItem: CartItem | null = null;
  public itemCountFc = new FormControl(0);

  constructor(
    private cartService: CartService,
    private toastService: ToastService
  ) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.cartItem) {
      this.itemCountFc.patchValue(changes.cartItem.currentValue.count, {
        emitEvent: false,
      });
    }
  }

  ngOnInit(): void {
    this.itemCountFc.valueChanges
      .pipe(
        switchMap((count) =>
          this.cartService.set({
            productSlug: this.cartItem?.product.slug ?? '',
            count: count as number,
          })
        )
      )
      .subscribe();
  }
}
