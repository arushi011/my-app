import { Component, OnInit, ElementRef, ViewChild, OnDestroy} from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shoppingList.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';
@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {

  // @ViewChild('nameInput') nameInputRef: ElementRef;
  // @ViewChild('amountInput') amountInputRef: ElementRef;
  //// @Output() ingredientAdded = new EventEmitter<Ingredient>();
  subscription: Subscription;
  ingredient: Ingredient;
  @ViewChild('f') formElem: NgForm;
  editMode = false ;
  index: number;
  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
    console.log('in SE child on init');
    this.subscription = this.shoppingListService.startedEditing.subscribe((index: number) => {
      this.index = index;
      this.editMode = true;
      this.ingredient = this.shoppingListService.getIngredientsForEdit(index);
      this.formElem.setValue({
        name: this.ingredient.name,
        amount: this.ingredient.amount
      });
    });
  }
  onSubmit(form: NgForm) {
    console.log('inside onsubmit');
    const value = form.value;
    const newIngredient = new Ingredient( value.name, value.amount
      // this.nameInputRef.nativeElement.value, this.amountInputRef.nativeElement.value
    );
    //// this.ingredientAdded.emit(newIngredient);
    console.log(newIngredient);
    if (!this.editMode) {
      this.shoppingListService.addIngredient(newIngredient);
    } else {
      this.shoppingListService.updateIngredient(this.index, newIngredient);
    }
    this.editMode = false;
    this.index = null;
    form.reset();
  }
  onClear() {
    console.log('inside onclear');
    this.formElem.reset();
    this.editMode = false;
    // this.index = null;
  }
  onDelete() {
    this.onClear();
    this.shoppingListService.deleteIngredient(this.index);
    this.index = null;
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
