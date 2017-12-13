import { Component, OnInit } from '@angular/core';
import { Student } from './student';
import { StudentdataService } from './studentdata.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
allStudent:Student[]=[];
  constructor(private _studata:StudentdataService,private _route:Router) { }

  ngOnInit() {

    this._studata.getAllStudent().subscribe(
      (data:Student[])=>{
        this.allStudent=data;
      },
      function(error){
        console.log(error);
      },
      function(){
        console.log("complete");
      }
    );
  }
addStudent(){
this._route.navigate(['/addStudent']);
}
delStudent(item:Student){
  this._studata.deleteStudent(item).subscribe(
    (data:any)=>{
      this.allStudent.splice(this.allStudent.indexOf(item),1);
    },
    function(error){
      console.log(error);
    },
    function(){
      
    }
  );
}
}
