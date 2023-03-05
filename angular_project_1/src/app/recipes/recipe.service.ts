import { EventEmitter, Injectable } from "@angular/core";
import { Ingredients } from "../shared/ingredient.model";
import { Recipe } from "./recipe.model";

@Injectable()
export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe(
            "Pizza",
            "Cheezy Paneer Pizza",
            "https://images.pexels.com/photos/1653877/pexels-photo-1653877.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            [
                new Ingredients("Pizza Base", 1),
                new Ingredients("Cheez Slice", 3),
                new Ingredients("Tomato", 1),
                new Ingredients("Paneer cube", 2)
            ]),
        new Recipe(
            "Burger",
            "Hot and Cheezy Burger",
            "https://media.istockphoto.com/id/520410807/photo/cheeseburger.jpg?s=1024x1024&w=is&k=20&c=3GtPsBcuINgJqA63XtKA2iDVbyyb7vfgrQbX7rfzZ6U=",
            [
                new Ingredients("bun", 2),
                new Ingredients("Cheez Slice", 1),
                new Ingredients("Chicke tikki", 1)
            ]
        )
    ];

    getRecipes = () => {
        return this.recipes.slice();
    }


}