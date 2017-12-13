import { Component, OnInit  } from '@angular/core';
// import { OtherComponent } from '../other';
import { Article } from 'other/otherModel';

@Component({
  selector: 'app-other',
  templateUrl: './other.component.html',
  styleUrls: ['./other.component.css'],
  host :  {class :  "row"}
})
export class OtherComponent implements oninit  {
    article : Article; 
// votes: number;
//      title: string;
//     link: string;
//  constructor() {
//    this.article = new Article(
//  'Angular 2',
//  'http://angular.io',
//  10);
//  this.title = 'Angular 2';
//  this.link = 'http://angular.io';
//  this.votes = 10;
 
 
//  voteUp() :Boolean {
//  this.article.votes += 1;
//  return false ;
//  }

//  voteDown() {
//  this.article.votes -= 1
//  return false
//   }


voteUp(): boolean {
 this.article.voteUp();
 return false;
 }

 voteDown(): boolean {
 this.article.voteDown();
 return false;
}

 ngOninit(){
   
 }
}

