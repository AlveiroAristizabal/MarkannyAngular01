import { Component, OnInit } from '@angular/core';
import { Product } from '../product-card/models/product';
import { ProductService } from '../product.service';
// import { FiltroModule } from './filtro/filtro.component';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent  {
  // products: Product[] = [];
  // filteredProducts: Product[] = [];
  category: string;
  product = {     a: null,    b: null,    category: null,    d: null,    e: null,  };
  // route: any;

  constructor( private productService: ProductService  ) { 
  }
  // ngOnInit(): void {  }
  // private populateProducts() { 
  //   this.productService
      
  //     (products => {
  //       this.products = products;
  //       return this.route.queryParamMap;
  //     })
  //     .subscribe(params => {
  //       this.category = params.get('category');
  //       this.applyFilter();      
  //     });
  // // }
  // private applyFilter() { }
  //   filteredProducts = (this.category) ? 
    // products.filter(p => 
      // product.category === category ;
    // products;
  // }

}
