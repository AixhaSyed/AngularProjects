import { Routes,RouterModule } from '@angular/router';
import { AddstudentComponent } from './students/addstudent.component';
import { StudentsComponent } from './students/students.component';
const router:Routes=[
  {path: '', redirectTo: '/allStudent', pathMatch: 'full'},
  {path: 'allStudent', component:StudentsComponent},
  {path: 'addStudent', component: AddstudentComponent}
];

export const routing=RouterModule.forRoot(router);