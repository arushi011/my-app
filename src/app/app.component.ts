import { Component } from '@angular/core';
import { ShoppingListService } from './shopping-list/shoppingList.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ShoppingListService]
})
export class AppComponent {
}
