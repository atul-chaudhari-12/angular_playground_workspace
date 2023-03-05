import { Component, Input, OnInit } from '@angular/core';
import { Ingredients } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from 'src/app/shopping-list/shpping-list.service';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipe: Recipe;

  constructor(private shoppinglistService: ShoppingListService) { }

  ngOnInit(): void {
  }

  addToShoppingList = (ingredients: Ingredients[]) => {
    this.shoppinglistService.addIngredientsInBulk(ingredients);
  }
}
