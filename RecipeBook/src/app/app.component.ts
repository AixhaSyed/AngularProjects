import { Component } from '@angular/core';
import { HeaderComponent } from './header.component';
import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingListComponent } from './shopping-list'
@Component({
  moduleId: module.id,
  selector: 'rb-root',
  templateUrl: 'app.component.html',
  directives : [HeaderComponent , RecipesComponent , ShoppingListComponent]
  
})
export class AppComponent {
  
}
