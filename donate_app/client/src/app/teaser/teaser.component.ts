import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teaser',
  templateUrl: './teaser.component.html',
  styleUrls: ['./teaser.component.scss']
})
export class TeaserComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public scrollToDonate(e): void {
    const headerHeight = 60;
    if(window) {
      window.scrollTo({top: window.innerHeight - headerHeight, behavior: 'smooth'});
      e.preventDefault();
    }
  }

}
