import { Injectable } from '@nestjs/common';
import { Observable, of } from 'rxjs';
import { siteInfo } from './site-info.data';
import { SiteInfo } from './site-info.interfaces';

@Injectable()
export class SiteInfoService {
  get(): Observable<SiteInfo> {
    return of(siteInfo)
  }
}
