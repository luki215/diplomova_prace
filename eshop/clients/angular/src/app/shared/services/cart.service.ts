import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, ReplaySubject, Subject } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Cart, CartParams } from '../interfaces/cart.interface';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cart = new ReplaySubject<Cart>(1);

  constructor(private http: HttpClient) {}

  private get(): Observable<Cart> {
    return this.http.get<Cart>(`${environment.api}/cart/asdf`);
  }

  public get cart$() {
    this.get().subscribe((x) => this.cart.next(x));
    return this.cart.asObservable();
  }

  public itemsCount(): Observable<number> {
    return this.cart$.pipe(
      map((cart) =>
        cart.items.map((x) => x.count).reduce((item, acc) => acc + item, 0)
      )
    );
  }

  public add(params: CartParams): Observable<Cart> {
    return this.http
      .post<Cart>(`${environment.api}/cart/asdf/addToCart`, params)
      .pipe(tap((x) => this.cart.next(x)));
  }
}
