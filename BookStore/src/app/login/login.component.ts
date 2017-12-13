import { Component, OnInit } from '@angular/core';
import {AuthService} from '../AuthService';
// import { LoggedInGuard } from './guards/loggedIn.guard'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
  // providers : [AuthService]
})

export class LoginComponent implements OnInit {
  
   isLogin = false;
   User:string;
  

 message: string;
 constructor(public authService: AuthService) {
 this.message = '';
 }

 login(username: string, password: string): boolean {
 this.message = '';
 if (!this.authService.login(username, password)) {
 this.message = 'Incorrect credentials.';
 setTimeout(function() {
 this.message = '';
 }.bind(this), 2500);
 }
 return true;
 }

 logout(): boolean {
 this.authService.logout();
 return false;
 }
ngOnInit(){
}
}
 
// }
// login(user:string , password : string): boolean {
//         if (user === 'user' && password === 'password'){
//             localStorage.setItem('username',user);
//             return true;

// login(username:string, password:string): boolean{
//   if(User==='user' && password ==='password'){
//     localStorage.setItem('username',User);
//     return true 
//   }
//     // this.loginUser = {name: username};
//     // this.isLogin = true;
//     return false;
//   }

// logout():any{
//         localStorage.removeItem('username'); 
//     }
//  getUser():any{
//         return localStorage.getItem('username');
        
//     }
//     isLoggedIn():boolean{
//          return this.getUser() !== null  ;      
//     }
