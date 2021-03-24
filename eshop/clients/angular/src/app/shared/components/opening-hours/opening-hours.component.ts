import { Component, Input, OnInit } from '@angular/core';
import { SiteInfo_OpenHours } from '../../interfaces/site-info.interfaces';

@Component({
  selector: 'app-opening-hours',
  templateUrl: './opening-hours.component.html',
  styleUrls: ['./opening-hours.component.scss']
})
export class OpeningHoursComponent implements OnInit {
  @Input() openHours: SiteInfo_OpenHours | undefined | null;

  constructor() { }

  ngOnInit() {
  }

}
