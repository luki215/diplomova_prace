import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map, switchMap, tap } from 'rxjs/operators';
import { Category } from '../shared/interfaces/categories.interfaces';
import { CategoriesService } from '../shared/services/categories.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {
  public category$: Observable<Category>
  constructor(private route: ActivatedRoute, private categoriesService: CategoriesService) {
    this.category$ = this.route.paramMap.pipe(
      map(x => x.get('slug') as string),
      switchMap(x => this.categoriesService.get(x))
    )


  }

  ngOnInit(): void {
  }

}
