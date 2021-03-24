import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: '', loadChildren: () => import('./homepage/homepage.module').then(m => m.HomepageModule) }, { path: 'cart', loadChildren: () => import('./cart/cart.module').then(m => m.CartModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
