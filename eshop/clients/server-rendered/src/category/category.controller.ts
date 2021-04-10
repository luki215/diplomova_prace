import { Controller, Get, Param, Query, Render } from '@nestjs/common';
import { Observable } from 'rxjs';
import { Seo } from 'src/shared/interfaces/seo.interface';
import { SiteInfo } from 'src/shared/interfaces/site-info.interfaces';
import { SiteInfoService } from 'src/shared/services/site-info.service';
import { HomepageService } from '../shared/services/homepage.service';
import { helpers } from '../shared/helpers/helpers';
import { Cart } from 'src/shared/interfaces/cart.interface';
import { CartService } from 'src/shared/services/cart.service';
import { CategoriesService } from 'src/shared/services/categories.service';
import { ProductsService } from 'src/shared/services/products.service';
export interface SharedViewData {
  seo: Seo;
  siteInfo: SiteInfo;
  cartItemsCount: number;
  [others: string]: any;
}

@Controller('cat')
export class CategoryController {
  constructor(
    private siteInfo: SiteInfoService,
    private cart: CartService,
    private categoriesService: CategoriesService,
    private productsService: ProductsService,
  ) {}

  @Get(':slug')
  @Render('category/show')
  async show(
    @Param('slug') slug,
    @Query('page') page = '1',
    @Query('pageSize') pageSize = '12',
  ): Promise<SharedViewData> {
    const [
      category,
      products,
      siteInfo,
      cartItemsCount,
      categories,
    ] = await Promise.all([
      this.categoriesService.get(slug).toPromise(),
      this.productsService
        .getAll({ page, pageSize, category: slug })
        .toPromise(),
      this.siteInfo.get().toPromise(),
      this.cart.itemsCount().toPromise(),
      this.categoriesService.getAll().toPromise(),
    ]);

    return {
      category,
      products,
      page,
      pageSize,
      seo: category.seo,
      siteInfo,
      cartItemsCount,
      categories,
    };
  }
}
