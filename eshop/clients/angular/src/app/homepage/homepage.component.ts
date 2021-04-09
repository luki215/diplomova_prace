import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Homepage } from '../shared/interfaces/homepage.interface';
import { HomepageService } from '../shared/services/homepage.service';
import { SeoService } from '../shared/services/seo.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
})
export class HomepageComponent implements OnInit {
  public homepage$: Observable<Homepage>;
  public environment = environment;
  constructor(
    private homepageService: HomepageService,
    private seo: SeoService
  ) {
    this.homepage$ = this.homepageService
      .getHomepage()
      .pipe(tap((hp) => this.seo.setSeo(hp.seo)));
  }

  ngOnInit(): void {}
}
