import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartRoutingModule } from './cart-routing.module';
import { CartComponent } from './cart.component';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { CartItemComponent } from './cart-item/cart-item.component';

@NgModule({
  declarations: [CartComponent, CartItemComponent],
  imports: [CommonModule, CartRoutingModule, SharedModule, ReactiveFormsModule],
})
export class CartModule {}
