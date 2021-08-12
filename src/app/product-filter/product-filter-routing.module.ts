import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductFilterComponent } from './product-filter.component';

const routes: Routes = [{ path: '',  component: ProductFilterComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductFilterRoutingModule { }
