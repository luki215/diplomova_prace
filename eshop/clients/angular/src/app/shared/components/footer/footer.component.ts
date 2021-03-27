import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { SiteInfo } from '../../interfaces/site-info.interfaces';
import { SiteInfoService } from '../../services/site-info.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent implements OnInit {
  public siteInfo$: Observable<SiteInfo>;
  public days = [
    'Pondělí',
    'Úterý',
    'Středa',
    'Čtvrtek',
    'Pátek',
    'Sobota',
    'Neděle',
  ];
  constructor(private siteInfoService: SiteInfoService) {
    this.siteInfo$ = this.siteInfoService.get();
  }

  ngOnInit(): void {}
}
