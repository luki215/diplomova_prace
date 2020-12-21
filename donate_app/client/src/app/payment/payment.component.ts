import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import spayd from 'spayd';
import qrcode from 'qrcode';
import { startWith } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import { combineLatest } from 'rxjs';

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
          acc: 'CZ5855000000001265098001+RZBCCZPP',
          am,
          cc: 'CZK',
          msg: this.type === 'donation' ? `${this.getUserInfo()} ` : ' ',
          xvs: '1111'
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
    return `${this.userInfo.get('name').value}, ${this.userInfo.get('street').value},  ${
      this.userInfo.get('zip').value
    }, ${this.userInfo.get('city').value}`;
  }

  private whitelist<T>(items: T[], value: any): T | null {
    return items.includes(value) ? value : null;
  }
}
