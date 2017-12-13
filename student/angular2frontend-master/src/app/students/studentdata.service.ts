import { Injectable } from '@angular/core';
import { Student } from './student';
import { Http,Response,RequestOptions,Headers } from '@angular/http';
import 'rxjs/Rx'
@Injectable()
export class StudentdataService {
  
private url:string="http://localhost:3000/Students/";
  constructor(private _http:Http) { }
  getAllStudent(){
    return this._http.get(this.url).map((res:Response)=>res.json());
  }
  addStudent(stu:Student)
  {
    let body=JSON.stringify(stu);
    let header=new Headers({'Content-Type':'application/json'});
    let res=new RequestOptions({headers:header});
    return this._http.post(this.url,body,res).map((res:Response)=>res.json());
  }
  deleteStudent(stu:Student){
    let body=JSON.stringify(stu);
    let header=new Headers({'Content-Type':'application/json'});
    let res=new RequestOptions({headers:header});
    return this._http.post(this.url+stu.rno,body,res).map((res:Response)=>res.json());
  }

}
