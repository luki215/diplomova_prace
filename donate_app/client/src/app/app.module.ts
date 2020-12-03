import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TeaserComponent } from './teaser/teaser.component';
import { PaymentComponent } from './payment/payment.component';
import { PaymentAmountSelectorComponent } from './payment/payment-amount-selector/payment-amount-selector.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EventsListComponent } from './events-list/events-list.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TeaserComponent,
    PaymentComponent,
    PaymentAmountSelectorComponent,
      EventsListComponent
   ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
