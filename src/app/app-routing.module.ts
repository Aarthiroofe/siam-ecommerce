import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'Home',
    pathMatch: 'full'
  },
  { path: 'Home', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule) },
  { path: 'listings', loadChildren: () => import('./pages/listings/listings.module').then(m => m.ListingsModule) },
  { path: 'Details', loadChildren: () => import('./pages/details/details.module').then(m => m.DetailsModule) },
  { path: 'cart', loadChildren: () => import('./pages/cart/cart.module').then(m => m.CartModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
