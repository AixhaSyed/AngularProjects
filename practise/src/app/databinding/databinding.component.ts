import { Component } from '@angular/core';
'

@Component({
  moduleId: module.id,
  selector: 'app-databinding',
  templateUrl: 'databinding.component.html',
  styles: [
    `.redBorder{
      border : 1px solid red
    }'
  ]
  
})
export class DatabindingComponent {
  stringInteropolation = "this is string"
  numberInteropolation = 34

}
