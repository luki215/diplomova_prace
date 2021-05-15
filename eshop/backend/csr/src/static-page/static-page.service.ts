import { Injectable } from '@nestjs/common';
import { Observable, of } from 'rxjs';
import { StaticPage } from 'src/shared/interfaces/static-page.interface';
import { staticPages } from './static-page.data';

@Injectable()
export class StaticPageService {
  find(slug: string): Observable<StaticPage> {
    const page = staticPages.find((p) => p.slug === slug);
    return of(page);
  }

  findAll(): Observable<StaticPage[]> {
    return of(staticPages);
  }
}
