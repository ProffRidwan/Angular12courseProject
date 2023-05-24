
import { Component, OnInit, Input } from '@angular/core';
import { ShoppingListService } from 'src/app/shopping-list/shoppingList.service';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  @Input() recipeDetails!: Recipe 

  constructor(private shoppingListService: ShoppingListService,
             private recipeListService: RecipeService) { }

  ngOnInit(): void {
  }
  toShoppingList(){
  this.recipeListService.addIngredientToShopingList(this.recipeDetails.ingredients)
  }
}
