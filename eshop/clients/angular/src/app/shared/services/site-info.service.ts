import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs';
import { SiteInfo } from '../interfaces/site-info.interfaces';
import { environment } from '../../../environments/environment';
@Injectable({
  providedIn: 'root',
})
export class SiteInfoService {
  constructor(private http: HttpClient) {}

  get(): Observable<SiteInfo> {
    return this.http.get<SiteInfo>(`${environment.api}/site-info`);
  }
}
