import { HttpService, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { SiteInfo } from '../interfaces/site-info.interfaces';

@Injectable()
export class SiteInfoService {
  constructor(private http: HttpService) {}

  get(): Observable<SiteInfo> {
    return this.http
      .get<SiteInfo>(`${environment.api}/site-info`)
      .pipe(map((x) => x.data));
  }
}
