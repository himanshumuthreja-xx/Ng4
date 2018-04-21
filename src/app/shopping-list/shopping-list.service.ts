import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs/Subject';
import { isNullOrUndefined } from 'util';

export class ShoppingListService {
    onIngredientAdded = new Subject<Ingredient[]>();
    startedEditing = new Subject<number>();

    private ingredients: Ingredient[] = [
        new Ingredient('Apples', 10),
        new Ingredient('Tomatoes', 5)
    ];

    getIngredients() {
        return this.ingredients.slice();
    }

    getIngredient(index: number) {
        return this.ingredients[index];
    }

    addIngredient(ingredient: Ingredient) {
        this.ingredients.push(ingredient);
        this.onIngredientAdded.next(this.ingredients.slice());
    }

    addIngredients(ingredients: Ingredient[]) {
        this.ingredients.push(...ingredients);
        this.onIngredientAdded.next(this.ingredients.slice());
    }

    updateIngredient(index: number, ingredient: Ingredient) {
        this.ingredients[index] = ingredient;
        this.onIngredientAdded.next(this.ingredients.slice());
    }

    deleteIngredient(index: number): Ingredient[] {
        const deletedIngredient = this.ingredients.splice(index, 1);
        this.onIngredientAdded.next(this.ingredients.slice());
        return deletedIngredient;
    }
}
