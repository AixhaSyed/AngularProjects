export class Ads {
 
  constructor(public category: string , public name: string , public price: number, public imageUrl: string) {
    
   }
}

export class Car extends Ads{
    
    color: string;
   // public imageUrl: string;
    constructor(category: string, name: string, price: number, color: string, imageUrl: string){
        super(category,name,price,imageUrl);
        this.color = color;
    }

    /*  clear() {
    this.model = new car('', '', '');
    this.active = false;
    setTimeout(() => this.active = true, 0);
  }
*/
}

export class Dress extends Ads{
    
    color: string;
   // public imageUrl: string,
    constructor(category: string, name: string, price: number, color: string, imageUrl: string){
        super(category,name,price,imageUrl);
        this.color = color;
    }
}