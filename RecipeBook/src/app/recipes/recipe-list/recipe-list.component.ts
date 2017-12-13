import { Component, OnInit , EventEmitter, Output } from '@angular/core';
import { Recipe }  from '../recipe';
import { RecipeItemComponent } from './recipe-item.component';

@Component({
  moduleId: module.id,
  selector: 'rb-recipe-list',
  templateUrl: 'recipe-list.component.html',
  directives :  [RecipeItemComponent ]
  
})
export class RecipeListComponent implements OnInit {
 recipes : Recipe[] = [
new Recipe ('phone', 'Sumsung' , 'http://cdn.bgr.com/2016/07/galaxy-note-7-leaks-press-renders-2.jpg?quality=98&strip=all&strip=all', []) ,
new Recipe ('phone', 'Sumsung' , 'http://cdn.bgr.com/2016/07/galaxy-note-7-leaks-press-renders-2.jpg?quality=98&strip=all&strip=all', []) ]
  @Output() recipeSelected = new EventEmitter <Recipe> ();


  constructor() { }

  ngOnInit() {
  }
  onselected(recipe: Recipe){
    this.recipeSelected.emit(recipe);
  }
}
