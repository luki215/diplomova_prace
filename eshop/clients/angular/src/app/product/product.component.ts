import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { Product } from '../shared/interfaces/product.interface';
import { ProductsService } from '../shared/services/products.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  public product$: Observable<Product>;
  constructor(
    private productsService: ProductsService,
    private route: ActivatedRoute
  ) {
    this.product$ = this.route.paramMap.pipe(
      map((params) => params.get('slug') as string),
      switchMap((slug) => this.productsService.get(slug))
    );
  }

  ngOnInit(): void {}
}
