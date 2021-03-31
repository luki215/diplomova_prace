import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { StaticPage } from '../interfaces/static-page.interface';

@Injectable({
  providedIn: 'root',
})
export class PagesService {
  constructor(private http: HttpClient) {}

  public get(slug: string | null) {
    return this.http.get<StaticPage>(`${environment.api}/static-page/${slug}`);
  }
}
