import { action, makeObservable, observable, runInAction } from "mobx";

import { recipeService } from "../services/recipe.service";
import { Recipe } from "../models/models";



class RecipeStore {
    recipes: Recipe[] = [];

    constructor() {
        makeObservable(this, {
            recipes: observable,
            getRecipes: action,
        });
    }

    getRecipes = async (filterBy: any={}) => {
        try {
            const newRecipes = await recipeService.query(filterBy);
            runInAction(() => {
                this.recipes = newRecipes;
            });
        } catch (err) {
            console.log('UserActions: err in loadUsers', err);
        }
    };

}

export const recipeStore = new RecipeStore();
