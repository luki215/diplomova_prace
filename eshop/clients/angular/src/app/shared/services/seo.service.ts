import { Injectable } from '@angular/core';
import { SeoSocialShareService } from 'ngx-seo';
import { Seo } from '../interfaces/seo.interface';

@Injectable({
  providedIn: 'root',
})
export class SeoService {
  constructor(private readonly seoSocialShareService: SeoSocialShareService) {}

  setSeo(seo: Seo) {
    this.seoSocialShareService.setData(seo);
  }
}
