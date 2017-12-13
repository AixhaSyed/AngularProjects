import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { routing } from '../app/app.routing';
import {LocationStrategy, HashLocationStrategy} from '@angular/common';

import { AppComponent } from './app.component';
import { BookComponent } from './book/book.component';
import { BookListComponent } from './book-list/book-list.component';
import { HomeComponent } from './home/home.component';
import { Book2Component } from './book/book2.component';
import { Book3Component } from './book/book3.component';
import { Book4Component } from './book/book4.component';
import { Book5Component } from './book/book5.component';
import { Book6Component } from './book/book6.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { LoginComponent } from './login/login.component';
import {AUTH_PROVIDERS} from './AuthService';
import {LoggedInGuard} from './guards/loggedIn.guard';
import {AuthService} from './AuthService';
import { ProtectedComponent } from './protected/protected.component';
import { SearchBarComponent } from './search-bar/search-bar.component'



@NgModule({
  
  declarations: [
    AppComponent,
    BookComponent,
    BookListComponent,
    HomeComponent,
    Book2Component,
    Book3Component,
    Book4Component,
    Book5Component,
    Book6Component,
    ContactUsComponent,
    LoginComponent,
    ProtectedComponent,
    SearchBarComponent    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgbModule,
    routing
  ],
  providers: [AUTH_PROVIDERS, LoggedInGuard,     { provide: LocationStrategy, useClass: HashLocationStrategy },],
  bootstrap: [AppComponent]
})
export class AppModule { }
