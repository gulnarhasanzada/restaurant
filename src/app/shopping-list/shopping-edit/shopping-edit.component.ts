import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput', {static:false}) nameInputRef!: ElementRef;
  @ViewChild('amountInput', {static:false}) amountInputRef!: ElementRef;
  @Output() ingredientAdded = new EventEmitter<Ingredient>();
  constructor() { }

  ngOnInit(): void {
  }
  onAddNewIngredient(){
    this.ingredientAdded.emit({name: this.nameInputRef.nativeElement.value, 
                             amount: this.amountInputRef.nativeElement.value})
  }
}
