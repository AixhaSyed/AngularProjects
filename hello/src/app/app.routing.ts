import {ModuleWithProviders} from '@angular/Core';
import {Routes, RouterModule} from '@angular/router';


//components
import {HomeComponent} from './components/home/home.component'
import {HeaderComponent} from './components/header/header.component'
import {ContactsComponent} from './components/contacts/contacts.component'
import {AddHutComponent} from './components/add-hut/add-hut.component'
import {ProtectedComponent} from './components/protected/protected.component'
import {SignInComponent} from './components/sign-in/sign-in.component'
import {SignUpComponent} from './components/sign-up/sign-up.component'
import {FooterComponent} from './components/footer/footer.component'

import { AuthGuard } from "./services/Auth.guard";




const appRoutes:Routes=[{
  path : 'title1',
  component: HomeComponent
},
{
  path : 'list',
  component: FooterComponent
},
{
  path : 'title3',
  component: AddHutComponent
},
 {
   path : 'title4',
  component: ContactsComponent
 },
 { path: '',
  redirectTo: '/signup',
   pathMatch: 'full' },
 
    { path: 'signup',
     component: SignUpComponent },
    { path: 'signin', component: SignInComponent},
    { path: 'protected', component: ProtectedComponent, canActivate: [AuthGuard] }
  
]
;
  export const routing : ModuleWithProviders  = RouterModule.forRoot(appRoutes);