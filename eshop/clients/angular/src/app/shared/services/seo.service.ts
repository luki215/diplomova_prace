import { Injectable } from '@angular/core';
import { JsonLdService, SeoSocialShareService } from 'ngx-seo';
import { Product } from '../interfaces/product.interface';
import { Seo } from '../interfaces/seo.interface';

@Injectable({
  providedIn: 'root',
})
export class SeoService {
  constructor(
    private readonly seoSocialShareService: SeoSocialShareService,
    private readonly jsonLdService: JsonLdService
  ) {}

  setSeo(seo: Seo) {
    this.seoSocialShareService.setData(seo);
  }

  setProductMicrodata(product: Product) {
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

    const jsonLD = this.jsonLdService.getObject('Product', {
      name: product.title,
      image: product.image,
      description: product.description,
      offers: {
        '@type': 'Offer',
        priceCurrency: 'CZK',
        price: product.price,
        priceValidUntil: `${today.getFullYear()}-${
          today.getMonth() + 2
        }-${today.getDate()}`,
        itemCondition: 'http://schema.org/NewCondition',
        availability: `http://schema.org/${itemStock}`,
      },
    });

    this.jsonLdService.setData(jsonLD);
  }
}
