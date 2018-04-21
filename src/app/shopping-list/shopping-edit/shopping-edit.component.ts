import { Component, OnInit, ElementRef, ViewChild} from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shoppingList.service';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  // @ViewChild('nameInput') nameInputRef: ElementRef;
  // @ViewChild('amountInput') amountInputRef: ElementRef;
  //// @Output() ingredientAdded = new EventEmitter<Ingredient>();
  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
    console.log('in SE child on init');
    this.shoppingListService.startedEditing.subscribe((index: number) => {
      console.log('recieved subscription');
    });
  }
  onAddItem(form: NgForm) {
    const value = form.value;
    const newIngredient = new Ingredient( value.name, value.amount
      // this.nameInputRef.nativeElement.value, this.amountInputRef.nativeElement.value
    );
    //// this.ingredientAdded.emit(newIngredient);
    console.log(newIngredient);
    this.shoppingListService.addIngredient(newIngredient);
  }

}
