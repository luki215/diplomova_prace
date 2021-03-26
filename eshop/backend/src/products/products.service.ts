import { Injectable } from '@nestjs/common';
import { Observable, of } from 'rxjs';
import { categories } from 'src/categories/categories.data';
import { Product } from 'src/shared/interfaces/product.interface';
import { Paginated } from 'src/shared/interfaces/utils.interface';
import { products } from './products.data';

@Injectable()
export class ProductsService {
  findAll(params: {
    category: string;
    page: number;
    pageSize: number;
  }): Observable<Paginated<Product>> {
    let resProducts = products;
    let total = resProducts.length;

    if (params.category)
      resProducts = resProducts.filter(
        (p) => p.category.slug === params.category,
      );
    total = resProducts.length;

    if (params.page && params.pageSize)
      resProducts = resProducts.slice(
        params.pageSize * (params.page - 1),
        params.pageSize * params.page,
      );
    return of({
      total,
      items: resProducts,
    });
  }
}
