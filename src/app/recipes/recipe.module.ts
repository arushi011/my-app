import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { NgModule } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipeDetailsComponent } from './recipe-details/recipe-details.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { RecipeItemsComponent } from './recipe-list/recipe-items/recipe-items.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipesComponent } from './recipes.component';
import { RecipeStartComponent } from './recipe-start/recipe-start.component';
import { RecipeRoutingModule } from './recipe-routing.module';

@NgModule({
    declarations: [
        RecipeDetailsComponent,
        RecipeEditComponent,
        RecipeItemsComponent,
        RecipeListComponent,
        RecipesComponent,
        RecipeStartComponent
    ],
    providers: [],
    imports: [
        CommonModule, // needed for a non root module to use basic features like ngIf ngFor etc
        ReactiveFormsModule,
        RecipeRoutingModule
    ],
    bootstrap: [],
})
export class RecipeModule {

}
