import { Component, OnInit, ElementRef,ViewChild,} from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shoppingList.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') nameInputRef!: ElementRef
  @ViewChild('amountInput') amountInputRef!: ElementRef
  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit(): void {
  }

  onAddIngredients(){
    const nameRef = this.nameInputRef.nativeElement.value;
    const amountRef = this.amountInputRef.nativeElement.value;
    const ingredientAddition = new Ingredient(nameRef, amountRef);
    this.shoppingListService.addIngredients(ingredientAddition)
     this.nameInputRef.nativeElement.value = '';
     this.amountInputRef.nativeElement.value = '';
  }

}
