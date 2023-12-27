export const SET_RECIPES = 'SET_RECIPES'
export const REMOVE_RECIPE = 'REMOVE_RECIPE'
export const ADD_RECIPE = 'ADD_RECIPE'
export const UPDATE_RECIPE = 'UPDATE_RECIPE'


const initialState = {
    recipes: [],

}

export function recipeReducer(state = initialState, action = {}) {
    let recipes
    switch (action.type) {

        case SET_RECIPES:
            return { ...state, recipes: [...action.recipes] }
        case ADD_RECIPE:
            return { ...state, recipes: [action.recipe, ...state.recipes] }
        case UPDATE_RECIPE:
            return { ...state, recipes: state.recipes.map(recipe => recipe._id === action.recipe._id ? action.recipe : recipe) }
        case REMOVE_RECIPE:
            recipes = state.recipes.filter(recipe => recipe._id !== action.recipeId)
            return { ...state, recipes }


        default:
            return state
    }
}