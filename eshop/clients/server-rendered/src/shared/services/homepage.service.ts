import { HttpService, Injectable } from '@nestjs/common';
import { environment } from 'src/environments/environment';
import { Homepage } from 'src/shared/interfaces/homepage.interface';
import { map } from 'rxjs/operators';

@Injectable()
export class HomepageService {
  constructor(private http: HttpService) {}

  public getHomepage() {
    return this.http
      .get<Homepage>(`${environment.api}/homepage/`)
      .pipe(map((x) => x.data));
  }
}
