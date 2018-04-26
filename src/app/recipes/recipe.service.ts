import { Recipe } from './recipe.model';
import { Injectable } from '@angular/core'; // EventEmitter, Output,
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shoppingList.service';
import { Subject } from 'rxjs/Subject';
@Injectable()
export class RecipeService {
    private recipes: Recipe[] = [
        new Recipe('Pizza',
        'Pizza Recipe Description Lorem ipsum dolor sit amet,impedit tincidunt voluptaria qui te. Cetero ullamcorper eu nam.',
        'http://foodportfolio.com/wordpress/wp-content/pittsburgh-food-photographer/Pizza-Food-Photography.jpg',
        [new Ingredient('cheeze', 5), new Ingredient('pepperoni', 20)]),
        new Recipe('Spaghetti',
        'Spaghetti Recipe Description Lorem ipsum dolor sit amet,impedit tincidunt voluptaria qui te. Cetero ullamcorper eu nam.',
        'https://gasztrocoach.hu/wp-content/uploads/2018/03/husgomboc2-1170x658.jpg',
        [new Ingredient('spaghetti', 20), new Ingredient('meatballs', 10), new Ingredient('basil', 5)])
      ]; // recipe[] means declaring an array of recipe type

    // @Output() recipeSelected = new EventEmitter<Recipe>();

    recipeChanged = new Subject<Recipe[]>();

    setRecipes(recipes: Recipe[]) {
        this.recipes.splice(0, this.recipes.length);
        this.recipes.push.apply(this.recipes, recipes);
        this.recipeChanged.next(this.recipes.slice());
    }
    getRecipes() { // used by recipe-list component
        return this.recipes.slice();
        // were giving copy of recipes to list component
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
    addRecipe(newRecipe: Recipe) {
        this.recipes.push(newRecipe);
        this.recipeChanged.next(this.recipes.slice());

    }
    updateRecipe(index: number, newRecipe: Recipe) {
        this.recipes[index] = newRecipe;
        this.recipeChanged.next(this.recipes.slice());
    }
    deleteRecipe(index: number) {
        this.recipes.splice(index, 1);
        this.recipeChanged.next(this.recipes.slice());
    }
}
