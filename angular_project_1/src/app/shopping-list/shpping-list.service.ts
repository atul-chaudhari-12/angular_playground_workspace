import { EventEmitter, Injectable } from "@angular/core";
import { Ingredients } from "../shared/ingredient.model";

@Injectable()
export class ShoppingListService {
    ingredientsChanged = new EventEmitter<Ingredients[]>();
    private ingradients = [new Ingredients("Apples", 5), new Ingredients("Tomatos", 10)];

    getIngredients = () => {
        return this.ingradients.slice();
    }

    addIngredients = (ingredient) => {
        this.ingradients.push(ingredient);
        this.ingredientsChanged.emit(this.ingradients.slice());
    }

    addIngredientsInBulk = (ingredientsArr: Ingredients[]) => {
        this.ingradients.push(...ingredientsArr);
        this.ingredientsChanged.emit(this.ingradients);
    }
}