// import { Component } from '@angular/core';
import {Component, ViewChild, ElementRef, AfterViewInit} from '@angular/core';
declare var jQuery : any;

// declare var jQuery:any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

 
  // ngAfterViewInit() {
  //       jQuery('button').click();
  //   }
  
    @ViewChild('selectElem') el:ElementRef;
    items = ['First', 'Second', 'Third'];
    selectedValue = 'Second';
    
     ngAfterViewInit() {
        $(this.el.nativeElement)
            .chosen()
            .on('change', (e, args) => {
                this.selectedValue = args.selected;
            });
}
}