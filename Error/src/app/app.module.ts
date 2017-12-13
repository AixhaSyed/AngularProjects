import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { Component } from '@angular/core';
import {
  RouterModule,
  Router,
  Routes
} from '@angular/router';
// import { FormsModule } from '@angular/forms';
import {LocationStrategy, HashLocationStrategy} from '@angular/common';

import { AppComponent } from './app.component';
import { AboutComponent } from './Components/about/about.component';
import { ContactComponent } from './Components/contact/contact.component';
import { HomeComponent } from './Components/home/home.component';
import { LoginComponent } from './Components/login/login.component';
import { ProtectedComponent } from './Components/protected/protected.component';
import {AUTH_PROVIDERS} from './Services/AuthServices';
import {LoggedInGuard} from './guards/loggedIn.guard';



  @Component({
  selector: 'router-app',
  template: `
  <div class="page-header">
    <div class="container">
      <h1>Router Sample</h1>
      <div class="navLinks">
        <a [routerLink]="['/home']">Home</a>
        <a [routerLink]="['/about']">About</a>
        <a [routerLink]="['/contact']">Contact us</a>
        <a [routerLink]="['/protected']">Protected</a>
      </div>
    </div>
  </div>

  <div id="content">
    <div class="container">

      <login></login>

      <hr>

      <router-outlet></router-outlet>
    </div>
  </div>
  `
})
class RoutesDemoApp {
  constructor(public router: Router) {
  }
}

const routes: Routes = [
  { path: '',          redirectTo: 'home', pathMatch: 'full' },
  { path: 'home',      component: HomeComponent },
  { path: 'about',     component: AboutComponent },
  { path: 'contact',   component: ContactComponent },
  { path: 'protected', component: ProtectedComponent,
    canActivate: [LoggedInGuard]}
];



@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ContactComponent,
    HomeComponent,
    LoginComponent,
    ProtectedComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [ AUTH_PROVIDERS,
    LoggedInGuard,
    { provide: LocationStrategy, useClass: HashLocationStrategy },],
  bootstrap: [AppComponent]
})
export class AppModule { }
