import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
// module 
// angular 


  imgsrc="https://i.ytimg.com/vi/4G7sq5GVhos/hqdefault.jpg"

  btnClick()
  {
   this.imgsrc="http://1u88jj3r4db2x4txp44yqfj1.wpengine.netdna-cdn.com/wp-content/uploads/2011/11/do-com-logo.jpg" 
  }
  btn2click(){
    this.imgsrc="http://www.w3schools.com/css/trolltunga.jpg"
  }
  
  constructor() {
   }

  ngOnInit() {
  }

}
