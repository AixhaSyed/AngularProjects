import { Component } from '@angular/core';
// import { NavController, NavParams } from 'ionic-angular';
import {AddHutComponent} from '.././add-hut/add-hut.component'

import { AddService } from '../../services/Add.service';
import { AddItemService } from '../../services/AddItem.service';
// import {Ads} from '././add-hut/ad.ts'


declare var $: any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  {
  
  ads : Array<AddService>;
 submitted = false;

  onSubmit() { this.submitted = true; }

  // get diagnostic() { return JSON.stringify(this.model); }

 
  constructor( public _AddItemService : AddItemService,
  // public params: NavParams,
  public _AddService : AddService) {  $(window).scroll(function(){
    if ($(window).scrollTop() >= 300) {
       $('nav').addClass('fixed-header');
    }
    else {
       $('nav').removeClass('fixed-header');
    }
})
  }}