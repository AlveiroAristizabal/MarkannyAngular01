import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-boot-card',
  templateUrl: './boot-card.component.html',
  styleUrls: ['./boot-card.component.css']
})
export class BootCardComponent implements OnInit {
  art={
    a:null,
    b:null,
    c:null,
    d:null,
    e:null
  }
  // articulos =[];
  articulos =[ 
    {a:'b (1).jpg',	b:'b (1).jpg',	c:'buso',	d:30836,	e:21231}, 
{a:'b (2).jpg',	b:'b (2).jpg',	c:'buso',	d:30866,	e:21252}, 
{a:'b (3).jpg',	b:'b (3).jpg',	c:'buso',	d:30897,	e:21273}, 
{a:'b (4).jpg',	b:'b (4).jpg',	c:'buso',	d:30927,	e:21294}, 
{a:'c (1).jpg',	b:'c (1).jpg',	c:'camiseta',	d:30958,	e:21315}, 
{a:'c (2).jpg',	b:'c (2).jpg',	c:'camiseta',	d:30988,	e:21336}, 
{a:'c (3).jpg',	b:'c (3).jpg',	c:'camiseta',	d:31019,	e:21357}, 
{a:'c (4).jpg',	b:'c (4).jpg',	c:'camiseta',	d:31049,	e:21378}, 
{a:'pc (1).jpg',	b:'pc (1).jpg',	c:'Pijama&Cortos',	d:31080,	e:21399}, 
{a:'pc (2).jpg',	b:'pc (2).jpg',	c:'Pijama&Cortos',	d:30836,	e:21231}, 
{a:'pc (3).jpg',	b:'pc (3).jpg',	c:'Pijama&Cortos',	d:30839,	e:21233}, 
{a:'pc (4).jpg',	b:'pc (4).jpg',	c:'Pijama&Cortos',	d:30842,	e:21235}, 
{a:'pp (1).jpg',	b:'pp (1).jpg',	c:'Pijama&Largos',	d:30845,	e:21237}, 
{a:'pp (2).jpg',	b:'pp (2).jpg',	c:'Pijama&Largos',	d:30848,	e:21239}, 
{a:'pp (3).jpg',	b:'pp (3).jpg',	c:'Pijama&Largos',	d:30851,	e:21242}, 
{a:'pp (4).jpg',	b:'pp (4).jpg',	c:'Pijama&Largos',	d:30854,	e:21244}, 
{a:'s (1).jpg',	b:'s (1).jpg',	c:'sudadera',	d:30857,	e:21246}, 
{a:'s (2).jpg',	b:'s (2).jpg',	c:'sudadera',	d:30860,	e:21248}, 
{a:'s (3).jpg',	b:'s (3).jpg',	c:'sudadera',	d:30863,	e:21250}, 
{a:'s (4).jpg',	b:'s (4).jpg',	c:'sudadera',	d:30866,	e:21252}, 
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
