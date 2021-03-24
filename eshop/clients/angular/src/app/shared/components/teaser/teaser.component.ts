import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-teaser',
  templateUrl: './teaser.component.html',
  styleUrls: ['./teaser.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TeaserComponent implements OnInit {
  @Input() image: string | null = null;
  @Input() title: string = "";

  constructor() { }

  ngOnInit() {
  }

}
