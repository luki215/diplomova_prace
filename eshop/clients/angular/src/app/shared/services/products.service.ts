import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Product } from '../interfaces/product.interface';
import { Paginated } from '../interfaces/utils.interface';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private http: HttpClient) {}

  public getAll(params: { page: string; pageSize: string; category: string }) {
    return this.http.get<Paginated<Product>>(`${environment.api}/products`, {
      params: params,
    });
  }
}
