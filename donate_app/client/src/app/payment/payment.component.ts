import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import spayd from 'spayd';
import qrcode from 'qrcode';
import { startWith } from 'rxjs/operators';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {
  public amountFC = new FormControl(50);
  public imgSrc = null;

  constructor() { }

  public ngOnInit(): void {

    this.amountFC.valueChanges.pipe(startWith(this.amountFC.value)).subscribe((am) => {
      const payment = {
        acc: 'CZ5855000000001265098001+RZBCCZPP',
        am,
        cc: 'CZK',
        msg: '<jmeno a prijmeni> <adresa>',
        xvs: '1111'
      };


      console.log(spayd(payment));
      qrcode.toDataURL(spayd(payment))
      .then((url) => {
        this.imgSrc = url;
      })
      .catch(console.error);
    });

  }

}
