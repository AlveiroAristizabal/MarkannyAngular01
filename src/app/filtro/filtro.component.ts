import { Component, Input, OnInit, Output } from '@angular/core';
// import { CategoryService } from '../category.service';

@Component({
  selector: 'app-filtro',
  templateUrl: './filtro.component.html',
  styleUrls: ['./filtro.component.css']
})
export class FiltroComponent implements OnInit {
  categories$;
  @Input('category') category;
  // @Input('category') category;
  // constructor(categoryService: CategoryService) {
  //   this.categories$ = categoryService;
  // }

  ngOnInit() {
  }
//   categories$;  ALV esto lo pase a category service
//   c={
//     nam:null
//   }
//   // categories$;
//   @Input('category') category;
  constructor() { 
  this.categories$ = [{nam:'buso'},{nam:'camiseta'},{nam:'Pijama&Cortos'},{nam:'sudadera'},{nam:'Pijama&Largos'}];
}
// return CategoryService;
  // ngOnInit(): void {   }

}
