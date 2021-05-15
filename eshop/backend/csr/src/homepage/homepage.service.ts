import { Injectable } from '@nestjs/common';
import { Observable, of } from 'rxjs';
import { Homepage } from 'src/shared/interfaces/homepage.interface';
import { homepage } from './homepage.data';

@Injectable()
export class HomepageService {
  findAll(): Observable<Homepage> {
    return of(homepage)
  }
}
