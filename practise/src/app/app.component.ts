import { Component } from '@angular/core';
import { DatabindingComponent } from './databinding'
@Component({
  moduleId: module.id,
  selector: 'app-root',
  template : 
  `<h1>hello</h1>`,
  directives: [DatabindingComponent]

  
})

export class AppComponent {
  title = 'app works!';
}
