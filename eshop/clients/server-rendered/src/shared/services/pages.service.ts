import { HttpService, Injectable } from '@nestjs/common';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { StaticPage } from '../interfaces/static-page.interface';

@Injectable()
export class PagesService {
  constructor(private http: HttpService) {}

  public get(slug: string | null) {
    return this.http
      .get<StaticPage>(`${environment.api}/static-page/${slug}`)
      .pipe(map((x) => x.data));
  }
}
