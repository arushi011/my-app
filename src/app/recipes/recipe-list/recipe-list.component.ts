import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  // @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe [];
  constructor(private recipeService: RecipeService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.recipes = this.recipeService.getRecipes();
    this.recipeService.recipeChanged.subscribe((recipes: Recipe[]) => {
      console.log(recipes);
      this.recipes = recipes;
      console.log(this.recipes);
      // this.recipes.splice(0, this.recipes.length);
      // this.recipes.push.apply(this.recipes, recipes);
    });
  }
  // onRecipeSelected(recipeEl: Recipe) {
  //   this.recipeWasSelected.emit(recipeEl);

  // }
  onNewRecipe() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }

}
