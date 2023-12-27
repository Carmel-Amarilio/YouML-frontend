import { combineReducers, legacy_createStore as createStore } from "redux"
import { userReducer } from "./reducers/user.reducer"
import { recipeReducer } from "./reducers/recipe.reducer"


const rootReducer = combineReducers({
    userModule: userReducer,
    recipeModule: recipeReducer,
})

const middleware = (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__() : undefined
export const store = createStore(rootReducer, middleware)