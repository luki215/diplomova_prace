import { HttpService, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Cart, CartParams } from '../interfaces/cart.interface';

@Injectable()
export class CartService {
  constructor(private http: HttpService) {}

  private get(): Observable<Cart> {
    return this.http
      .get<Cart>(`${environment.api}/cart/asdf`)
      .pipe(map((x) => x.data));
  }

  public itemsCount(): Observable<number> {
    return this.get().pipe(
      map((cart) =>
        cart.items.map((x) => x.count).reduce((item, acc) => acc + item, 0),
      ),
    );
  }

  public add(params: CartParams): Observable<Cart> {
    return this.http
      .post<Cart>(`${environment.api}/cart/asdf/addToCart`, params)
      .pipe(map((x) => x.data));
  }

  public set(params: CartParams): Observable<Cart> {
    return this.http
      .post<Cart>(`${environment.api}/cart/asdf/set`, params)
      .pipe(map((x) => x.data));
  }
}
