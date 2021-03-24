import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../../interfaces/categories.interfaces';
import { CategoriesService } from '../../services/categories.service';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainNavComponent implements OnInit {
  public categories$: Observable<Category[]>

  constructor(private categoriesService: CategoriesService) {
    this.categories$ = this.categoriesService.getAll();
  }

  ngOnInit(): void {
  }

}
