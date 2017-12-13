import { Component, OnInit } from '@angular/core';
import { AddService } from '../../services/Add.service';
import { AddItemService } from '../../services/AddItem.service';

import {HomeComponent} from '.././home/home.component'

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  image = "";
  categories = null;
  featured = null;
  nav;
 ads : Array<AddService>;
 ad;
// MainImage ;
  constructor(public _AddItemService : AddItemService
      // public _CategoriesService : CategoriesService
 ) { }
 createAd(Title, Description, Price, Category, ContactNumber , PostedBy){
     
      Title = Title.value
      Description = Description.value;
      Price = Price.value;
      Category = Category.text;
      ContactNumber = ContactNumber.value;
      PostedBy = PostedBy.value ;
      let Featured = this.featured;
      let MainImage = this.image;
       
      
      this._AddItemService.createAdInService(Title, Description, Price, MainImage, Category, Featured , ContactNumber , PostedBy);
      
      this.ad.push(HomeComponent);
      
  }
  ngOnInit() {
  }

}
