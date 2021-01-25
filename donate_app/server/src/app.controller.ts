import { Controller, Get, Query, Render } from '@nestjs/common';
import { EventsService } from './events.service';
import spayd from 'spayd';
import * as qrcode from 'qrcode';

@Controller()
export class AppController {
  constructor(private readonly eventsService: EventsService) {}

  @Get()
  @Render('index')
  async root(@Query() query): Promise<any> {
    const events = await this.eventsService
      .getEvents()
      .toPromise()
      .then((x) => x.data);

    query.type ??= 'donation';

    let amountOptions: any =
      query.type === 'sunday' ? [20, 50, 100, 200] : [200, 300, 500, 1000];

    amountOptions = amountOptions.map((x) => ({
      active: x === +query.amountRadio,
      value: x,
      label: `${x} Kč`,
    }));

    amountOptions.push({
      active: query.amountRadio === 'custom',
      value: 'custom',
      label: 'Vlastní',
    });

    const amount =
      query.amountRadio === 'custom' ? query.customAmount : query.amountRadio;

    const paymentImg = amount
      ? await this.getPaymentImg(
          amount,
          query.type === 'donation'
            ? `${this.getUserInfo(query)} `
            : 'NEDELNI SBIRKA',
        )
      : false;

    return {
      query,
      amountOptions,
      events,
      isDonation: query.type === 'donation',
      showCustomAmountInput: query.amountRadio === 'custom',
      paymentImg,
    };
  }
  private getUserInfo(query): string {
    const string = `${query.contact_form__name ?? '<jmeno>'},${
      query.contact_form__street ?? '<ulice>'
    },${query.contact_form__zip ?? '<PSČ>'},${
      query.contact_form__city ?? '<město>'
    }`;

    // remove diacritics

    return string
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .substr(0, 50);
  }

  private getPaymentImg(am: string, msg: string) {
    const payment = {
      acc: 'CZ3401000000199362170227+KOMBCZPP',
      am,
      cc: 'CZK',
      msg,
      xvs: '1111',
    };

    return qrcode.toDataURL(spayd(payment));
  }
}
