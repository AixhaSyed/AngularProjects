import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { StudentsComponent } from './students/students.component';
import { AddstudentComponent } from './students/addstudent.component';
import { StudentdataService } from './students/studentdata.service';
import { routing } from './app.routing';


@NgModule({
  declarations: [
    AppComponent,
    StudentsComponent,
    AddstudentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [StudentdataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
