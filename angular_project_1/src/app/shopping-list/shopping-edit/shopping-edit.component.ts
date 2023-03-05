import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Ingredients } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shpping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') nameInputReference: ElementRef;
  @ViewChild('amountInput') amountInputReference: ElementRef;

  constructor(private shoppinglistService: ShoppingListService) { }

  ngOnInit(): void {
  }

  onAddItems = () => {
    let name = this.nameInputReference.nativeElement.value;
    let amount = this.amountInputReference.nativeElement.value;
    let ingr = new Ingredients(name, amount);
    this.shoppinglistService.addIngredients(ingr);
  }

}
