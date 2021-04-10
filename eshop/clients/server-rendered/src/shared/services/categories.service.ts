import { HttpService, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Category } from '../interfaces/categories.interfaces';

@Injectable()
export class CategoriesService {
  constructor(private http: HttpService) {}

  public getAll(): Observable<Category[]> {
    return this.http
      .get<Category[]>(`${environment.api}/categories`)
      .pipe(map((x) => x.data));
  }

  public get(slug: string) {
    return this.http
      .get<Category>(`${environment.api}/categories/${slug}`)
      .pipe(map((x) => x.data));
  }
}
