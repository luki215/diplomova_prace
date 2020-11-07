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
        acc: 'CZ2806000000000168540115',
        am,
        cc: 'CZK',
        msg: 'Payment for some stuff',
        xvs: '1234567890'
      };


      qrcode.toDataURL(spayd(payment))
      .then((url) => {
        this.imgSrc = url;
      })
      .catch(console.error);
    });

  }

}
