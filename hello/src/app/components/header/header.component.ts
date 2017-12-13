import { Component} from '@angular/core';
import {AuthService} from '../../services/Auth.service'

declare var $: any;
@Component({
  
  selector: 'app-header',
  templateUrl: './header.component.html',
  // directives: [SMDropdown],
  styleUrls: ['./header.component.css']
})
export class HeaderComponent  {
  
  
  
// var app = angular.module('myApp', []);

  constructor(private authService: AuthService) { $(window).scroll(function(){
    if ($(window).scrollTop() >= 300) {
       $('nav').addClass('fixed-header');
    }
    else {
       $('nav').removeClass('fixed-header');
    }
})
  }
  isAuth() {
    return this.authService.isAuthenticated();
  }

  onLogout() {
    this.authService.logout();
  }
}

  // ngOnInit() {
   
  // }


