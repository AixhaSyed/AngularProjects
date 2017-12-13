import { Component  } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent {
   
    
  
  list: Array<string> = [ ]
    inputItem: string 
    
    
    add(){
      this.list.push(this.inputItem);
      this.inputItem = "";
    };
  
    remove(index){
      this.list.splice(index,1);

 
}



}