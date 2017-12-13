import {ModuleWithProviders} from '@angular/Core';
import {Routes, RouterModule} from '@angular/router';
import{BookComponent } from './book/book.component';
import {BookListComponent } from './book-list/book-list.component';
import { HomeComponent } from './home/home.component';
import {Book2Component} from './book/book2.component';
import {Book3Component} from './book/book3.component';
import {Book4Component} from './book/book4.component';
import {Book5Component} from './book/book5.component';
import {Book6Component} from './book/book6.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { LoginComponent } from './login/login.component';
// import {LoggedInGuard} from '././guards/loggedIn.guard';
// import {AUTH_PROVIDERS} from './AuthService';
import {LoggedInGuard} from './guards/loggedIn.guard';
import {AuthService} from './AuthService';
import {ProtectedComponent} from './protected/protected.component'

// import {Book2Component} from './book/book2.component'


const appRoutes:Routes=[{
  path : '',
  component: HomeComponent}
  
 , {
      path: 'title2',
      component : BookComponent
  }, 
  {
    path : 'title1',
    component : BookListComponent
  },
  {
    path:'title3',
    component : Book2Component
  },
  {
    path : 'title4',
    component : Book3Component
  },
  {
    path : 'title5',
    component: Book4Component
  },
  {
    path : 'title6',
    component : Book5Component
  },
  {
    path : 'title7',
    component : Book6Component
  },
  {
    path: 'title8',
    component : ContactUsComponent    
  },
  {
   path : 'title9',
   component : ProtectedComponent,
  canActivate : [LoggedInGuard]
}
  ]
  ;


export const routing : ModuleWithProviders  = RouterModule.forRoot(appRoutes);