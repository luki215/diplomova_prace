import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { StaticPage } from '../shared/interfaces/static-page.interface';
import { PagesService } from '../shared/services/pages.service';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss'],
})
export class PagesComponent implements OnInit {
  public page$: Observable<StaticPage>;
  constructor(
    private route: ActivatedRoute,
    private pageService: PagesService
  ) {
    this.page$ = this.route.paramMap.pipe(
      map((params) => params.get('slug')),
      switchMap((slug) => this.pageService.get(slug))
    );
  }

  ngOnInit(): void {}
}
