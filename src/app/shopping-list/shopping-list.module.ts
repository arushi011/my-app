import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ShoppingEditComponent } from '../shopping-list/shopping-edit/shopping-edit.component';
import { ShoppingListComponent } from '../shopping-list/shopping-list.component';

@NgModule({
    declarations: [
        ShoppingEditComponent,
        ShoppingListComponent
    ],
    providers: [],
    imports: [
        CommonModule, // needed for a non root module to use basic features like ngIf ngFor etc
        FormsModule
    ],
    exports: [
        FormsModule
    ],
    bootstrap: [],
})
export class ShoppingListModule {

}
