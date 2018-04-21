import { Ingredient } from '../shared/ingredient.model';
// import { Output, EventEmitter } from '@angular/core';
import { Subject } from 'rxjs/Subject';

export class ShoppingListService {
    ingredientsChanged = new Subject<Ingredient[]>(); // earlier it was an EventEmitter
    startedEditing = new Subject<number>();
    private ingredients: Ingredient[] = [
        new Ingredient('Cheeze', 5),
        new Ingredient('Tomatoes', 10)
      ];
    getIngredients() {
        return this.ingredients.slice();
    }
    addIngredient(ingredient: Ingredient) {
        console.log(ingredient);
        this.ingredients.push(ingredient);
        this.ingredientsChanged.next(this.ingredients.slice()); // it was emit
    }
    addIngredientFromRecipe(ingredients: Ingredient[]) {
        this.ingredients.push.apply(this.ingredients, ingredients);
        this.ingredientsChanged.next(this.ingredients.slice()); // it was emit
    }
}
