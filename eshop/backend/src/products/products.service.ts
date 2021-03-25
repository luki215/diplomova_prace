import { Injectable } from '@nestjs/common';
import { Observable, of } from 'rxjs';
import { Product } from 'src/shared/interfaces/product.interface';
import { products } from './products.data';

@Injectable()
export class ProductsService {
  findAll(): Observable<Product[]> {
    return of(products)
  }
}
