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
import { Product } from 'src/shared/interfaces/product.interface';
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

    const seo = {
      ...product.seo,
      jsonLD: this.getJsonLDFromProduct(product),
    };

    return {
      product,
      seo: seo,
      siteInfo,
      cartItemsCount,
      categories,
    };
  }

  private getJsonLDFromProduct(product: Product) {
    let itemStock;
    switch (product.stockState.state) {
      case 'available':
        itemStock = 'InStock';
        break;
      case 'available-soon':
        itemStock = 'PreOrder';
        break;
      case 'unavailable':
        itemStock = 'OutOfStock';
        break;
    }

    const today = new Date();

    const jsonLD = {
      '@context': 'https://schema.org/',
      '@type': 'Product',
      name: product.title,
      image: product.image,
      description: product.description,
      offers: {
        '@type': 'Offer',
        priceCurrency: 'CZK',
        price: product.price,
        priceValidUntil: `${today.getFullYear()}-${
          today.getMonth() + 1
        }-${today.getDate()}`,
        itemCondition: 'http://schema.org/NewCondition',
        availability: `http://schema.org/${itemStock}`,
      },
    };
    return JSON.stringify(jsonLD);
  }
}
