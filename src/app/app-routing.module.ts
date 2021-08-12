import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProductFilterComponent } from './product-filter/product-filter.component';

const routes: Routes = [
  {     path:'',     redirectTo:'/home',      pathMatch: 'full',   },
  { path: 'home',    loadChildren: () => import('./home/home.module').  then(m => m.HomeModule) }, 
  // { path: 'product-filter',    loadChildren: () => import('./product-filter/product-filter.module'). then(m => m.ProductFilterModule) }, 
  { path: 'product-filter', component: ProductFilterComponent }
  // { path: 'product-filter',    loadChildren: () => import('./product-filter/product-filter.module').            then(m => m.productfilterModule) }, 
//   { path: 'login',    loadChildren: () => import('./auth/login/login.module').    then(m => m.LoginModule) }, 
// { path: 'register', loadChildren: () => import('./auth/register/register.module').then(m => m.RegisterModule) },
// { path: 'forgot-password', loadChildren: () => import('./auth/forgot-password/forgot-password.module').then(m => m.ForgotPasswordModule) },
// { path: 'verification-email', component: SendEmailComponent } 
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
