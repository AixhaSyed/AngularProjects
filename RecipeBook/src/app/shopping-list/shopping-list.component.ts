import { Component, OnInit } from '@angular/core';
import { ShoppingListAddComponent } from './shopping-list-add.component';
import { Ingrediants } from '../shared';
@Component({
  moduleId: module.id,
  selector: 'rb-shopping-list',
  templateUrl: 'shopping-list.component.html',
  directives : [ShoppingListAddComponent], 
})
export class ShoppingListComponent implements OnInit {
  item: Ingrediants[] = [] ;

  constructor() { }

  ngOnInit() {
  }

}
