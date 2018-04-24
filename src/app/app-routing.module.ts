import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
// import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { HomeComponent } from './home/home.component';
// import { RecipeStartComponent } from './recipes/recipe-start/recipe-start.component';
// import { RecipeDetailsComponent } from './recipes/recipe-details/recipe-details.component';
// import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';
// import { SignupComponent } from './auth/signup/signup.component';
// import { SigninComponent } from './auth/signin/signin.component';
const routes: Routes = [
    {
        path: '',
        // redirectTo: '/recipes',
        // pathMatch: 'full'
        component: HomeComponent
    }, {
        path: 'recipes',
        loadChildren: './recipes/recipe.module#RecipeModule'
    },
    {
        path: 'shopping-list',
        component:  ShoppingListComponent
    }
];

@NgModule({
    imports : [RouterModule.forRoot(routes)],
    exports: [RouterModule]

})
export class AppRoutingModule {

}
