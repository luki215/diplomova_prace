import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map, switchMap, tap } from 'rxjs/operators';
import { Product } from '../shared/interfaces/product.interface';
import { ProductsService } from '../shared/services/products.service';
import { SeoService } from '../shared/services/seo.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  public product$: Observable<Product>;
  constructor(
    private productsService: ProductsService,
    private route: ActivatedRoute,
    private seo: SeoService
  ) {
    this.product$ = this.route.paramMap.pipe(
      map((params) => params.get('slug') as string),
      switchMap((slug) => this.productsService.get(slug)),
      tap((p) => this.seo.setSeo(p.seo)),
      tap((p) => this.seo.setProductMicrodata(p))
    );
  }

  ngOnInit(): void {}
}
