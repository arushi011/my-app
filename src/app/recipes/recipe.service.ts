import { Recipe } from './recipe.model';
import { Injectable } from '@angular/core'; // EventEmitter, Output,
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shoppingList.service';
@Injectable()
export class RecipeService {
    private recipes: Recipe[] = [
        new Recipe('Pizza', 'Pizza Recipe Description',
        'http://foodportfolio.com/wordpress/wp-content/pittsburgh-food-photographer/Pizza-Food-Photography.jpg',
        [new Ingredient('cheeze', 5), new Ingredient('pepperoni', 20)]),
        new Recipe('Spaghetti', 'Spaghetti Recipe Description',
        'https://gasztrocoach.hu/wp-content/uploads/2018/03/husgomboc2-1170x658.jpg',
        [new Ingredient('spaghetti', 20), new Ingredient('meatballs', 10), new Ingredient('basil', 5)])
      ]; // recipe[] means declaring an array of recipe type

    // @Output() recipeSelected = new EventEmitter<Recipe>();

    getRecipes() { // used by recipe-list component
        return this.recipes.slice();
    }

    getRecipeDetails(index: number) { // used to put data in recipe details. because it has subscribed to params
        return this.recipes[index];
    }

    constructor(private shoppingListService: ShoppingListService) {

    }
    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        // console.log(ingredients);
        this.shoppingListService.addIngredientFromRecipe(ingredients);
    }
}
