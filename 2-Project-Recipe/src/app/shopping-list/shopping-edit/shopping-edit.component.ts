import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrl: './shopping-edit.component.css'
})
export class ShoppingEditComponent {
  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('amountInput') amountInputRef: ElementRef;
  // @Output() IngredientAdded = new EventEmitter<{name:string,amount:number}>();
  @Output() IngredientAdded = new EventEmitter<Ingredient>();
  onAddItem(){
    const name = this.nameInputRef.nativeElement.value;
    const amount = this.amountInputRef.nativeElement.value;
    const newIngredient = new Ingredient(name,amount)
    // this.IngredientAdded.emit({name:name,amount:amount})
    this.IngredientAdded.emit(newIngredient);
  }
}
