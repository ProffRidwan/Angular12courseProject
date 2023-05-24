
import { EventEmitter } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";


export class ShoppingListService{
  ingredientsChanged = new EventEmitter<Ingredient[]>()
  private  shoppingListRecord: Ingredient[] = [
        new Ingredient('Apple', 5),
        new Ingredient('Tomatoes', 10)
       ]

 getIngredients(){
    return this.shoppingListRecord.slice();
 }
  addIngredients(ingredient: Ingredient){
   this.shoppingListRecord.push(ingredient);
   this.ingredientsChanged.emit(this.shoppingListRecord.slice())
  }
  addIngredientsArray(ingredients: Ingredient[]){
    // for(let ingredient of ingredients){
    //   this.addIngredients(ingredient)
    // }
     this.shoppingListRecord.push(...ingredients)
     this.ingredientsChanged.emit(this.shoppingListRecord.slice())
  }
}