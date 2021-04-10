import { Controller, Get, Param, Render } from '@nestjs/common';
import { Seo } from 'src/shared/interfaces/seo.interface';
import { SiteInfo } from 'src/shared/interfaces/site-info.interfaces';
import { SiteInfoService } from 'src/shared/services/site-info.service';
import { HomepageService } from '../shared/services/homepage.service';
import { CartService } from 'src/shared/services/cart.service';
import { CategoriesService } from 'src/shared/services/categories.service';
import { PagesService } from 'src/shared/services/pages.service';
export interface SharedViewData {
  seo: Seo;
  siteInfo: SiteInfo;
  cartItemsCount: number;
  [others: string]: any;
}

@Controller('pages')
export class PageController {
  constructor(
    private pageService: PagesService,
    private siteInfo: SiteInfoService,
    private cart: CartService,
    private categoriesService: CategoriesService,
  ) {}

  @Get(':slug')
  @Render('page/show')
  async show(@Param('slug') slug): Promise<SharedViewData> {
    const [page, siteInfo, cartItemsCount, categories] = await Promise.all([
      this.pageService.get(slug).toPromise(),
      this.siteInfo.get().toPromise(),
      this.cart.itemsCount().toPromise(),
      this.categoriesService.getAll().toPromise(),
    ]);

    return {
      page,
      seo: page.seo,
      siteInfo,
      cartItemsCount,
      categories,
    };
  }
}
