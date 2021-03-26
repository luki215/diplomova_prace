import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Homepage } from '../shared/interfaces/homepage.interface';
import { HomepageService } from '../shared/services/homepage.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  public homepage$: Observable<Homepage>;
  constructor(private homepageService: HomepageService) {
    this.homepage$ = this.homepageService.getHomepage()
  }

  ngOnInit(): void {
  }

}
