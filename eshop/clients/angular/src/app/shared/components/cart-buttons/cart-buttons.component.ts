import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Product } from '../../interfaces/product.interface';

@Component({
  selector: 'app-cart-buttons',
  templateUrl: './cart-buttons.component.html',
  styleUrls: ['./cart-buttons.component.scss']
})
export class CartButtonsComponent implements OnInit {
  @Input() product: Product | null = null;

  public fc = new FormControl(1)
  constructor() { }

  ngOnInit() {
  }

}
