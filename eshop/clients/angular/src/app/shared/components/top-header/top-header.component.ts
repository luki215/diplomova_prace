import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { SiteInfoService } from '../../services/site-info.service';
import { map, share } from 'rxjs/operators'
import { SiteInfo_OpenHours } from '../../interfaces/site-info.interfaces';
@Component({
  selector: 'app-top-header',
  templateUrl: './top-header.component.html',
  styleUrls: ['./top-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TopHeaderComponent implements OnInit {
  public telephone$: Observable<string>;
  public openingToday$: Observable<SiteInfo_OpenHours | undefined>;
  constructor(private siteInfoService: SiteInfoService) {
    const siteInfo$ = this.siteInfoService.get().pipe(share());
    this.telephone$ = siteInfo$.pipe(map(x => x.telephone))
    const today = ((new Date()).getDay() + 1) % 7
    this.openingToday$ = siteInfo$.pipe(map(x => x.openHours.find(y => y.day === today)))
  }

  ngOnInit(): void {
  }

}
