import { Component, OnInit, OnDestroy } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shoppingList.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Ingredient[];
  private subscription: Subscription;
  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
    console.log('in SL onEditItem');
    this.ingredients = this.shoppingListService.getIngredients();
    this.subscription = this.shoppingListService.ingredientsChanged.subscribe((data) => {
      this.ingredients.splice(0, this.ingredients.length);
      this.ingredients.push.apply(this.ingredients, data);
    });
  }
  // onIngredientAdded(ingredient: Ingredient) {
  //   this.ingredients.push(ingredient);
  // }
  onEditItem(index: number) {
    console.log('in SL onEditItem');
    this.shoppingListService.startedEditing.next(index);
  }
  ngOnDestroy() {
    this.subscription.unsubscribe(); // avoids memory leaks

  }

}
