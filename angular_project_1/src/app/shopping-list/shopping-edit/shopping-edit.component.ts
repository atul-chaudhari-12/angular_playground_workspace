import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Ingredients } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') nameInputReference: ElementRef;
  @ViewChild('amountInput') amountInputReference: ElementRef;
  @Output() ingredientAdded = new EventEmitter<Ingredients>();

  constructor() { }

  ngOnInit(): void {
  }

  onAddItems = () => {
    let name = this.nameInputReference.nativeElement.value;
    let amount = this.amountInputReference.nativeElement.value;
    let ingr = new Ingredients(name, amount);
    this.ingredientAdded.emit(ingr);
  }

}
