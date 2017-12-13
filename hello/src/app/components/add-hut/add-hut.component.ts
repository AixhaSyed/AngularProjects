import { Component, OnInit,ChangeDetectorRef , EventEmitter } from '@angular/core';
import {ContactsComponent} from '../../components/contacts/contacts.component'
// import { FileUploader } from 'ng2-file-upload';
// const URL = '/api/';
// const URL = 'https://evening-anchorage-3159.herokuapp.com/api/';
@Component({
  selector: 'app-add-hut',
  templateUrl: './add-hut.component.html',
  styleUrls: ['./add-hut.component.css']
})
export class AddHutComponent implements OnInit {
  
  


  submitted = false;

  onSubmit() { this.submitted = true; }

  // get diagnostic() { return JSON.stringify(this.model); }

  //  categories = ['All', 'Hut','Beaches', 'Farm House'];
   categories = ['Car', 'Dress','Mobile', 'Real Estate'];
   
   ad = new Ads(this.categories[0],'Corolla',2200000,'black' ,'hdf,s',1234 ,'hllo' ); 
  //  ad = new Ads (this.categories[0], )


   ads = JSON.parse(sessionStorage.getItem("list")) || ['Corolla', 'Red Dress', 'QMobile', 'Samsung'];
          // [ new Dress("Dress","Used dress", 1800, "green & red","https://www.customink.com/mms/images/catalog/styles/4600/catalog_detail_image_large.jpg"),
          //  new Car("Car","Corolla", 62000, "black",""), 
          //  new Dress("Dress","Used dress", 2000, "blue","") ];
   
  //  onImageUpload(img, input){
  //   let fr = new FileReader();
  //   fr.onload = function () {
  //     img.src = fr.result;
  //   };
  //   if(input.files[0]){
  //     fr.readAsDataURL(input.files[0])
  //   }
  // }
   
  add( category:string, HutName: string,PostedDate:number, PostedPerson: string,
   PersonContact: string , BookingPrice : string ,Location:string, img: string )
   
   {
    
  //  console.log(`Adding image:${img} `);
     alert("Ad form submitted successfully!");
    //  console.log(category,HutName,PostedDate,PostedPerson,PersonContact,BookingPrice,Location)
      //  var myVar = setInterval(myTimer, 1000);
      //    function myTimer() {
      //      var d = new Date();
      //      var currSecs = d.getSeconds()
      //        document.getElementById("demo").innerHTML = currSecs.toString();
      // }
      
      //  this.ads.push( { img ,category,HutName,PostedDate,PostedPerson,PersonContact,BookingPrice,Location});
       this.ads.push( { category,HutName,PostedDate,PostedPerson,PersonContact,BookingPrice,Location});
      
            sessionStorage.setItem('list', JSON.stringify(this.ads));

//  this.ads.push({category,title,price,color,imageUrl});
  }  


  
  delete(index: number){
    
    this.ads.splice(index, 1);
    sessionStorage.setItem("list", JSON.stringify(this.ads));
    

}
   edit(index: number){
   
    var a = this.ads[index].category;  
    var b = this.ads[index].HutName;
    var c = this.ads[index].PostedDate;
    var d = this.ads[index].PostedPerson;
    // var d = this.ads[index].PostedPerson;  
    var e = this.ads[index].PersonContact;  

    var f = this.ads[index].BookingPrice;  
    var g= this.ads[index].Location;  
    
      
      
    this.ads.splice(index, 1);
    (<HTMLInputElement>document.getElementById("category")).value = a;
    (<HTMLInputElement>document.getElementById("HutName")).value = b;
    (<HTMLInputElement>document.getElementById("PostedDate")).value = c;
    (<HTMLInputElement>document.getElementById("PostedPerson")).value = d;
    // (<HTMLInputElement>document.getElementById("PostedDate")).value = e;

    (<HTMLInputElement>document.getElementById("PersonContact")).value = e;

    (<HTMLInputElement>document.getElementById("BookingPrice")).value = f;
    
    (<HTMLInputElement>document.getElementById("Location")).value = g;
    
    sessionStorage.setItem("list", JSON.stringify(this.ads));

  //    if (a == "Car" || b == "Corolla" || c == 2200000 || d == "black") {
  //      document.getElementById("submitBtn").disabled = true;
  //  }

}

active = true;

  newAd() {
  this.ad = new Ads(this.categories[0],'', 12, '',  '', this.ads.placeholder, 'hello' );
  this.active = false;
  setTimeout(() => this.active = true, 0);

  }



 ngOnInit() {
   (<HTMLTitleElement>document.getElementsByTagName("title")[0]).innerText = "Add Car";
  }
  

}

 class Ads {
 
 
//  img  , category:string, HutName: string,PostedDate:number, PostedPerson: string, PersonContact: string , BookingPrice
  // ,Location ) {
  constructor(
    public category: string,
    public HutName: string,
    public PostedDate: number,
    public PostedPerson: string,
    public PersonContact: string,
    
    public  BookingPrice: number,
    
    public Location: string) {
    
   }
}

 class Car extends Ads{
    
    img: string;
  
    constructor(img  , category:string, HutName: string,PostedDate:number, PostedPerson: string, PersonContact: string , BookingPrice
  ,Location ){
        super( category, HutName, PostedDate, PostedPerson, PersonContact, BookingPrice,Location );
        this.img = img.src;
    }

}

 class Dress extends Ads{
    
    img: string;
   
    constructor( img, category:string, HutName: string,PostedDate:number, PostedPerson: string, PersonContact: string , BookingPrice
  ,Location ){
        super(category, HutName, PostedDate, PostedPerson, PersonContact, BookingPrice,Location);
        this.img= img.src
    }
}
