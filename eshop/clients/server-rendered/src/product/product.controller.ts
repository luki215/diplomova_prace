import { Controller, Get, Param, Render } from '@nestjs/common';
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

@Controller('product')
export class ProductController {
  constructor(
    private productService: ProductsService,
    private siteInfo: SiteInfoService,
    private cart: CartService,
    private categoriesService: CategoriesService,
  ) {}

  @Get(':slug')
  @Render('product/show')
  async show(@Param('slug') slug): Promise<SharedViewData> {
    const [product, siteInfo, cartItemsCount, categories] = await Promise.all([
      this.productService.get(slug).toPromise(),
      this.siteInfo.get().toPromise(),
      this.cart.itemsCount().toPromise(),
      this.categoriesService.getAll().toPromise(),
    ]);

    return {
      product,
      seo: product.seo,
      siteInfo,
      cartItemsCount,
      categories,
    };
  }
}
