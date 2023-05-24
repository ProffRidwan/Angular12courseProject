import { Injectable, EventEmitter } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shoppingList.service";
import { Recipe } from "./recipe.model";


@Injectable()
export class RecipeService{
  recipeSelected = new EventEmitter<Recipe>()
 private recipe: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test', 'https://static01.nyt.com/images/2022/09/29/dining/afg-ricotta-polpette/merlin_213671208_2553d655-4170-4155-acdf-5fca2ce34a06-master768.jpg',
    [
        new Ingredient('Apple', 2),
        new Ingredient('Cahsew', 1)
    ]),
    new Recipe('A sum Recipe', 
    'This is composed a test', 
    'https://static01.nyt.com/images/2022/09/29/dining/afg-ricotta-polpette/merlin_213671208_2553d655-4170-4155-acdf-5fca2ce34a06-master768.jpg',
     [ new Ingredient('Eja', 2),
    new Ingredient('Rice', 1) ]),
    new Recipe('A performed conatgious Recipe', 'This is really a deserved test', 'https://static01.nyt.com/images/2022/09/29/dining/afg-ricotta-polpette/merlin_213671208_2553d655-4170-4155-acdf-5fca2ce34a06-master768.jpg', [new Ingredient('sugarcane', 2),
    new Ingredient('dew', 1)])
 ]

 constructor(private shoppingListService: ShoppingListService){

 }

 getRecipe (){
   return this.recipe.slice();
 }
  addIngredientToShopingList(ingredient: Ingredient[]){
   this.shoppingListService.addIngredientsArray(ingredient)
  }
}