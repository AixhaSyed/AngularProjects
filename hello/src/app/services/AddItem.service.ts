// import {Injectable} from '@angular/core';


// export class Add{

//   constructor(
//       public _id : string , 
//     public firstName:string,
//     public LastName:string,
//     public Email:string,
//     public Phone:string,
//     public Date:string,
//     public time:number,
//     public map : string ,
//     public imageUrl:string,
//     public Feature: boolean
    
    
//   )

//   {

//   }
// }
//  @Injectable()
// export class AddItemService{
    
//     ads : Array<Add>;
    
    
//     constructor(){
        
//         let ads = localStorage.getItem('ads');
//         if(ads){
//             this.ads = JSON.parse(ads);
//         } else {
//             this.ads = [];
//         }
        
//     }
    
//     createAdInService( FirstName, LastName, Email, Phone , Time, Map , ContactNumber , PostedBy, Featured){
//         let tmp : Add = {
//             _id : (Date.now()).toString(),
//             firstName : FirstName,
//             LastName : LastName,
//             Email: Email,
//              Phone : Phone,
//             time : Time,
//             map : Map,
//             Featured : Featured
//         }     
//         this.ads.push(tmp);
        
//         localStorage.setItem("ads", JSON.stringify(this.ads));
//     }
    
//     getAds(){
//         return this.ads;
//     }
    
//     getFilteredAds(obj){
//         var tmp = [];
        
//         for(var i = 0; i < this.ads.length; i++){
//             var flag = true;
//             if(obj.Category && obj.Category != this.ads[i].Category){
//                 flag = false;
//             }
//             if(obj.Title && this.ads[i].Title.toLowerCase().indexOf(obj.Title.toLowerCase()) == -1){
//                 flag = false;
//             }
//             if(obj.Price && obj.Price != this.ads[i].Price){
//                 flag = false;
//             }
//             if(obj.Featured && !this.ads[i].Featured){
//                 flag = false;
//             }
            
//             if(flag){
//                 tmp.push(this.ads[i]);
//             }            
//         }
        
//         return tmp;
//     }
    
//     getFeaturedAdsLimited(count){
//         var tmp = [];
        
//         let counter = 0;
//         for(var i = 0; i < this.ads.length; i++){
            
//             if(this.ads[i].Featured){                
//                 counter++;
//                 tmp.push(this.ads[i]);
//                 if(counter == count){
//                     break;
//                 } 
//             } 
  
            
//         }
        
//         return tmp;
//     }
// }

import {Injectable} from '@angular/core';
// import { AddService } from './../Services/Add.service'

export class AddService {
    _id : string;
    Title : string;
    Description : string;
    Price : string;    
     ContactNumber : number ;
    PostedBy : string; 
    MainImage : string;
    Category : string;
    Featured : boolean;
}

@Injectable()
export class AddItemService {
    
    ads : Array<AddService>;
    
    
    constructor(){
        
        let ads = localStorage.getItem('ads');
        if(ads){
            this.ads = JSON.parse(ads);
        } else {
            this.ads = [];
        }
        
    }
    
    createAdInService( Title, Description, Price, MainImage, Category, Featured , ContactNumber , PostedBy){
        let tmp : AddService = {
            _id : (Date.now()).toString(),
            Title : Title,
            Description : Description,
            Price : Price,
             ContactNumber : ContactNumber,
             PostedBy : PostedBy , 
            MainImage : MainImage,
            Category : Category,
            Featured : Featured
        }        
        this.ads.push(tmp);
        
        localStorage.setItem("ads", JSON.stringify(this.ads));
    }
    
    getAds(){
        return this.ads;
    }
    
    getFilteredAds(obj){
        var tmp = [];
        
        for(var i = 0; i < this.ads.length; i++){
            var flag = true;
            if(obj.Category && obj.Category != this.ads[i].Category){
                flag = false;
            }
            if(obj.Title && this.ads[i].Title.toLowerCase().indexOf(obj.Title.toLowerCase()) == -1){
                flag = false;
            }
            if(obj.Price && obj.Price != this.ads[i].Price){
                flag = false;
            }
            if(obj.Featured && !this.ads[i].Featured){
                flag = false;
            }
            
            if(flag){
                tmp.push(this.ads[i]);
            }            
        }
        
        return tmp;
    }
    
    getFeaturedAdsLimited(count){
        var tmp = [];
        
        let counter = 0;
        for(var i = 0; i < this.ads.length; i++){
            
            if(this.ads[i].Featured){                
                counter++;
                tmp.push(this.ads[i]);
                if(counter == count){
                    break;
                } 
            } 
  
            
        }
        
        return tmp;
    }
}
export class CategoriesService{
    
    categories = [
        "Cars",
        "Laptops",
        "Phones",
        "Home Appliances",
        "Camera",
        "Furniture"
    ]
    
    getCategories(){
        return this.categories;
    }
}