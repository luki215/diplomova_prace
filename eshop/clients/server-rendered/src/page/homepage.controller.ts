import { Controller, Get, Render } from '@nestjs/common';
import { Observable } from 'rxjs';
import { Seo } from 'src/shared/interfaces/seo.interface';
import { SiteInfo } from 'src/shared/interfaces/site-info.interfaces';
import { SiteInfoService } from 'src/shared/services/site-info.service';
import { HomepageService } from '../shared/services/homepage.service';
import { helpers } from '../shared/helpers/helpers';
import { Cart } from 'src/shared/interfaces/cart.interface';
import { CartService } from 'src/shared/services/cart.service';
import { CategoriesService } from 'src/shared/services/categories.service';
export interface SharedViewData {
  seo: Seo;
  siteInfo: SiteInfo;
  cartItemsCount: number;
  [others: string]: any;
}

@Controller()
export class HomepageController {
  constructor(
    private homepage: HomepageService,
    private siteInfo: SiteInfoService,
    private cart: CartService,
    private categoriesService: CategoriesService,
  ) {}

  @Get()
  @Render('homepage/index')
  async index(): Promise<SharedViewData> {
    const [homepage, siteInfo, cartItemsCount, categories] = await Promise.all([
      this.homepage.getHomepage().toPromise(),
      this.siteInfo.get().toPromise(),
      this.cart.itemsCount().toPromise(),
      this.categoriesService.getAll().toPromise(),
    ]);

    return {
      homepage,
      seo: homepage.seo,
      siteInfo,
      cartItemsCount,
      categories,
    };
  }
}
