import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListingsRoutingModule } from './listings-routing.module';
import { ListingsComponent } from './listings.component';
import { NgxSliderModule } from '@angular-slider/ngx-slider';

@NgModule({
  declarations: [
    ListingsComponent
  ],
  imports: [
    CommonModule,
    ListingsRoutingModule,
    NgxSliderModule
  ]
})
export class ListingsModule { }
