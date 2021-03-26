import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Homepage } from '../interfaces/homepage.interface';


@Injectable({
  providedIn: 'root'
})
export class HomepageService {

  constructor(private http: HttpClient) { }

  public getHomepage() {
    return this.http.get<Homepage>(`${environment.api}/homepage/`)
  }
}
