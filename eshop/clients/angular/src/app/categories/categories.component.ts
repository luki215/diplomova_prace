import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { combineLatest, Observable } from 'rxjs';
import { combineAll, map, switchMap, tap } from 'rxjs/operators';
import { Category } from '../shared/interfaces/categories.interfaces';
import { Product } from '../shared/interfaces/product.interface';
import { Paginated } from '../shared/interfaces/utils.interface';
import { CategoriesService } from '../shared/services/categories.service';
import { ProductsService } from '../shared/services/products.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
})
export class CategoriesComponent implements OnInit {
  public category$: Observable<Category>;
  public products$: Observable<Paginated<Product>>;

  public pageSize = 12;
  public page = 1;

  constructor(
    private route: ActivatedRoute,
    private categoriesService: CategoriesService,
    private productsService: ProductsService,
    private router: Router
  ) {
    this.category$ = this.route.paramMap.pipe(
      map((x) => x.get('slug') as string),
      switchMap((x) => this.categoriesService.get(x))
    );

    this.products$ = combineLatest([
      this.route.paramMap,
      this.route.queryParamMap,
    ]).pipe(
      map((params) => ({
        page: params[1].get('page') ?? this.page.toString(),
        pageSize: params[1].get('pageSize') ?? this.pageSize.toString(),
        category: params[0].get('slug') ?? '',
      })),
      tap((params) => {
        this.page = +params.page;
        this.pageSize = +params.pageSize;
      }),
      switchMap((p) => this.productsService.getAll(p))
    );
  }

  ngOnInit(): void {}

  public onPageChange(page: number) {
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { page },
      queryParamsHandling: 'merge',
    });
  }
}
