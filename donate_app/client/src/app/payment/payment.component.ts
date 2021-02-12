import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import spayd from 'spayd';
import qrcode from 'qrcode';
import { startWith } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import { combineLatest } from 'rxjs';
import { church_app_config } from '../../../../shared/config';
@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {
  public amountFC = new FormControl(null);
  public showQR = false;
  public imgSrc = null;
  public type: 'sunday' | 'donation' = 'donation';
  public config = church_app_config;

  constructor(private route: ActivatedRoute, private fb: FormBuilder) {}
  public userInfo = this.fb.group({
    name: [],
    city: [],
    street: [],
    zip: []
  });

  public ngOnInit(): void {
    this.route.queryParamMap.subscribe((res) => {
      this.type = this.whitelist<'sunday' | 'donation'>(['sunday', 'donation'], res.get('type')) ?? 'donation';
    });

    combineLatest([
      this.amountFC.valueChanges.pipe(startWith(this.amountFC.value)),
      this.userInfo.valueChanges.pipe(startWith(this.userInfo.value))
    ]).subscribe(([am, userInfo]) => {
      if (am) {
        this.showQR = true;
        const payment = {
          acc: this.config.accounts[this.type].account,
          am,
          cc: 'CZK',
          msg: this.type === 'donation' ? `${this.getUserInfo()} ` : 'NEDELNI SBIRKA',
          xvs: this.config.accounts[this.type].vs
        };

        qrcode
          .toDataURL(spayd(payment))
          .then((url) => {
            this.imgSrc = url;
          })
          .catch(console.error);
      } else {
        this.showQR = false;
      }
    });
  }
  private getUserInfo(): string {
    const string = `${this.userInfo.get('name').value ?? '<jmeno>'},${this.userInfo.get('street').value ?? '<ulice>'},${
      this.userInfo.get('zip').value ?? '<PSČ>'
    },${this.userInfo.get('city').value ?? '<město>'}`;

    // remove diacritics
    return string
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .substr(0, 50);
  }

  private whitelist<T>(items: T[], value: any): T | null {
    return items.includes(value) ? value : null;
  }
}
