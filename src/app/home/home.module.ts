import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
// import { ProductFilterComponent } from '../product-filter/product-filter.component';


@NgModule({
  declarations: [], 
  // declarations: [HomeComponent], 
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
