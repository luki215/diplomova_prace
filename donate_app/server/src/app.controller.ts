import { Controller, Get, Query, Render } from '@nestjs/common';
import { EventsService } from './events.service';
import spayd from 'spayd';
import * as qrcode from 'qrcode';
import { church_app_config } from './config';
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

    const isDonation = query.type === 'donation';

    let amountOptions: any = isDonation
      ? [200, 300, 500, 1000]
      : [20, 50, 100, 200];

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

    const paymentConfig = isDonation
      ? church_app_config.accounts.donation
      : church_app_config.accounts.sunday;

    const paymentImg = amount
      ? await this.getPaymentImg(amount, query, isDonation, paymentConfig)
      : false;

    debugger;
    return {
      query,
      amountOptions,
      events,
      isDonation,
      showCustomAmountInput: query.amountRadio === 'custom',
      paymentImg,
      paymentConfig,
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

  private getPaymentImg(am: string, query, isDonation: boolean, paymentConfig) {
    const payment = {
      acc: paymentConfig.account,
      am,
      cc: 'CZK',
      msg: isDonation ? `${this.getUserInfo(query)} ` : 'NEDELNI SBIRKA',
      xvs: paymentConfig.vs,
    };

    return qrcode.toDataURL(spayd(payment));
  }
}
