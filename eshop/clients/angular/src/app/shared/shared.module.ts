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



@NgModule({
  declarations: [HeaderComponent, AppLayoutComponent, TopHeaderComponent, MainNavComponent, FooterComponent, OpeningHoursComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    AppLayoutComponent,
    OpeningHoursComponent
  ]
})
export class SharedModule { }
