import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing } from '../app/app.routing';
import { ReactiveFormsModule } from '@angular/forms';
import { FileSelectDirective, FileDropDirective, FileUploader } from 'ng2-file-upload/ng2-file-upload';
// import {FORM_PROVIDERS, FORM_DIRECTIVES} from 'angular2/common';
// import $ from 'jquery/dist/jquery'
// import {FORM_PROVIDERS, FORM_DIRECTIVES} from '@angular2/common';

import { AppComponent } from './app.component';
import { AddHutComponent } from './components/add-hut/add-hut.component';



import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { ProtectedComponent } from './components/protected/protected.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';

//service

import {AuthService} from './services/Auth.service'
import { AuthGuard } from "./services/Auth.guard";
import { AddService } from '././services/Add.service';
import { AddItemService } from '././services/AddItem.service';



import {User} from './services/user.interface';
import { FooterComponent } from './components/footer/footer.component'



@NgModule({
  declarations: [
    AppComponent,
    AddHutComponent,
    HeaderComponent,
    HomeComponent,
    ContactsComponent,
    ProtectedComponent,
    SignInComponent,
    SignUpComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    ReactiveFormsModule
    // ImageUploadModule.forRoot()
  ],
  providers: [AuthService, AuthGuard, AddItemService, AddService],
  bootstrap: [AppComponent, ]
})
export class AppModule { }
