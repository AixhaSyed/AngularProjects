import { Ingrediants } from '../shared/ingrediants'
export class Recipe {
    constructor (public name , public description , public imagePath , public ingrediants:Ingrediants[] ){
        
    }
}
