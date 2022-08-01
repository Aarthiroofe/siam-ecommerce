import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailsRoutingModule } from './details-routing.module';
import { DetailsComponent } from './details.component';
// import { datas } from 'src/app/datas';
// import { Product } from 'src/app/models/product';
@NgModule({
  declarations: [
    DetailsComponent,
    // datas
  ],
  imports: [
    CommonModule,
    DetailsRoutingModule,
    // datas
  ]
})
export class DetailsModule { }
