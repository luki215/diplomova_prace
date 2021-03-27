import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductComponent } from './product.component';
import { SharedModule } from '../shared/shared.module';
import { ProductPropertyComponent } from './product-property/product-property.component';
import { OrderBoxComponent } from './order-box/order-box.component';

@NgModule({
  declarations: [ProductComponent, ProductPropertyComponent, OrderBoxComponent],
  imports: [CommonModule, ProductRoutingModule, SharedModule],
})
export class ProductModule {}
