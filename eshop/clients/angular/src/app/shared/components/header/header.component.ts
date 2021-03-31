import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { Cart } from '../../interfaces/cart.interface';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent implements OnInit {
  public itemsCount$: Observable<number>;

  constructor(private cart: CartService) {
    this.itemsCount$ = this.cart.itemsCount();
  }

  ngOnInit(): void {}
}
