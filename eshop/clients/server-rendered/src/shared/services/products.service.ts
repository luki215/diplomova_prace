import { HttpService, Injectable } from '@nestjs/common';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Product } from '../interfaces/product.interface';
import { Paginated } from '../interfaces/utils.interface';

@Injectable()
export class ProductsService {
  constructor(private http: HttpService) {}

  public getAll(params: { page: string; pageSize: string; category: string }) {
    return this.http
      .get<Paginated<Product>>(`${environment.api}/products`, {
        params: params,
      })
      .pipe(map((x) => x.data));
  }

  public get(slug: string) {
    return this.http
      .get<Product>(`${environment.api}/products/${slug}`)
      .pipe(map((x) => x.data));
  }
}
