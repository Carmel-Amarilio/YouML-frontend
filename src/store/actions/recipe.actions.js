import { recipeService } from "../../services/recipe.service.ts";
import { ADD_RECIPE, REMOVE_RECIPE, SET_RECIPES, UPDATE_RECIPE } from "../reducers/recipe.reducer.js";
import { store } from "../store.js";

export async function loadRecipes(filterBy = {}) {
    try {
        let recipes = await recipeService.query(filterBy)
        store.dispatch({
            type: SET_RECIPES,
            recipes
        })
    } catch (error) {
        console.error("Cannot load recipes:", error)
        throw error
    }
}

export async function removeRecipe(recipeId) {
    try {
        await recipeService.remove(recipeId)
        store.dispatch({
            type: REMOVE_RECIPE,
            recipeId
        })
    } catch (error) {
        console.error("Cannot remove recipe:", error)
        throw error
    }
}

export async function updateRecipe(recipe) {
    try {
        const savedRecipe = await recipeService.save(recipe)
        store.dispatch({
            type: UPDATE_RECIPE,
            recipe: savedRecipe,
        })
    } catch (error) {
        console.error("Cannot save recipe:", error)
        throw error
    }
}

export async function addRecipe(recipeToAdd) {
    try {
        const recipe = await recipeService.save(recipeToAdd)
        store.dispatch({
            type: ADD_RECIPE,
            recipe,
        })
    } catch (error) {
        console.error("Cannot save recipe:", error)
        throw error
    }
}
