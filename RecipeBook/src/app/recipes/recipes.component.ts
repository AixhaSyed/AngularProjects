import { Component, OnInit } from '@angular/core';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './recipe-detail';
import { Recipe } from "./recipe";
@Component({
  moduleId: module.id,
  selector: 'rb-recipes',
  templateUrl: 'recipes.component.html',
  directives : [RecipeListComponent , RecipeDetailComponent ]
  
})
export class RecipesComponent implements OnInit {
  selectedRecipe : Recipe ;

  constructor() { }

  ngOnInit() {
  }

}
