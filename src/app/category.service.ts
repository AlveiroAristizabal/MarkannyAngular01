import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  c;
  categories;
  // @Input('category') category;
  constructor() { }

  getAll() { 
  this.c={     nam:null   };

  this.categories = [{nam:'r'},{nam:'s'},{nam:'t'},{nam:'u'},{nam:'v'}];
  // return

    return this.categories.list('/categories', {
      query: {
        orderByChild: 'nam'
      }
    });

}
}