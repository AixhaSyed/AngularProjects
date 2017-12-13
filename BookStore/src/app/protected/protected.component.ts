import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-protected',
  template: `<h1>ProtectedComponent</h1>`
  // styleUrls: ['./protected.component.css']
})
export class ProtectedComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
