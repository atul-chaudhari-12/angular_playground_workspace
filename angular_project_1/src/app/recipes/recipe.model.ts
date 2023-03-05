import { Ingredients } from "../shared/ingredient.model";

export class Recipe {
    public name: string;
    public description: string;
    public imagePath: string;
    public ingredients: Ingredients[];

    constructor(name: string, description: string, imgPath: string, ingredients: Ingredients[]) {
        this.name = name;
        this.description = description;
        this.imagePath = imgPath;
        this.ingredients = ingredients;
    }
}