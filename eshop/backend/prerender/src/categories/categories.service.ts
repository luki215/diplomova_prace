import { Injectable } from '@nestjs/common';
import { Observable, of } from 'rxjs';
import { categories } from './categories.data';
import { Category } from '../shared/interfaces/categories.interfaces';

@Injectable()
export class CategoriesService {
  findAll(): Observable<Category[]> {
    console.log(process.env.HOST);
    return of(categories)
  }

  find(slug: string): Observable<Category> | void {
    const cat = categories.find(x => x.slug === slug)
    return of(cat)
  }
}
