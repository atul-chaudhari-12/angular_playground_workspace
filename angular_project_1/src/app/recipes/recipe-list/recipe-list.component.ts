import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe("Pizza", "bla bla Pizza", "https://images.pexels.com/photos/1653877/pexels-photo-1653877.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"),
    new Recipe("Pizza1", "bla bla Pizza", "https://images.pexels.com/photos/1653877/pexels-photo-1653877.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")
  ];

  @Output() recipeWasSelected = new EventEmitter<Recipe>()

  constructor() { }

  ngOnInit(): void {
  }

  onRecipeSelected = (recipe: Recipe) => {
    this.recipeWasSelected.emit(recipe);
  }

}
