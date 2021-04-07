import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './components/header/header.component';
import { AppLayoutComponent } from './components/app-layout/app-layout.component';
import { TopHeaderComponent } from './components/top-header/top-header.component';
import { MainNavComponent } from './components/main-nav/main-nav.component';
import { FooterComponent } from './components/footer/footer.component';
import { RouterModule } from '@angular/router';
import { OpeningHoursComponent } from './components/opening-hours/opening-hours.component';
import { TeaserComponent } from './components/teaser/teaser.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { StockStatePipe } from './pipes/stockState.pipe';
import { CartButtonsComponent } from './components/cart-buttons/cart-buttons.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ToastsComponent } from './components/toasts/toasts.component';
import { NgbToastModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    HeaderComponent,
    AppLayoutComponent,
    TopHeaderComponent,
    MainNavComponent,
    FooterComponent,
    OpeningHoursComponent,
    TeaserComponent,
    ProductCardComponent,
    StockStatePipe,
    CartButtonsComponent,
    ToastsComponent,
  ],
  imports: [CommonModule, RouterModule, ReactiveFormsModule, NgbToastModule],
  exports: [
    AppLayoutComponent,
    OpeningHoursComponent,
    TeaserComponent,
    ProductCardComponent,
    StockStatePipe,
    CartButtonsComponent,
    ToastsComponent,
  ],
})
export class SharedModule {}
