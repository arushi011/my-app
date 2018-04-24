import { Ingredient } from '../shared/ingredient.model';
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
    getIngredientsForEdit(index: number) {
        return this.ingredients.slice()[index];
    }
    addIngredient(ingredient: Ingredient) {
        console.log(ingredient);
        this.ingredients.push(ingredient);
        this.ingredientsChanged.next(this.ingredients.slice()); // it was emit
    }

    updateIngredient(index: number, ingredient: Ingredient) {
        this.ingredients[index] = ingredient;
        this.ingredientsChanged.next(this.ingredients.slice());
    }
    deleteIngredient(index: number) {
        this.ingredients.splice(index, 1);
        this.ingredientsChanged.next(this.ingredients.slice());
    }
    addIngredientFromRecipe(ingredients: Ingredient[]) {
        this.ingredients.push.apply(this.ingredients, ingredients);
        this.ingredientsChanged.next(this.ingredients.slice()); // it was emit
    }
}
