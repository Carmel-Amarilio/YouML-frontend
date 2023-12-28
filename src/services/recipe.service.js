import axios from 'axios'
import { storageService } from './async-storage.service'
import { httpService } from './http.service'
import { utilService } from './util.service'

// const BASE_URL = 'stay/'
const RECIPE_KEY = 'recipesMB'


export const recipeService = {
    query,
    get,
    save,
    remove,
    getEmptyRecipe,
}

function query(filterBy = {}) {
    // return httpService.get(BASE_URL, filterBy)
    return storageService.query(RECIPE_KEY)
}

function get(id) {
    // return httpService.get(BASE_URL + id)
    return storageService.get(RECIPE_KEY, id)
}

function save(recipe) {
    // if (stay._id) return httpService.put(BASE_URL, stay)
    // else return httpService.post(BASE_URL, stay)
    if (recipe._id) return storageService.put(RECIPE_KEY, recipe)
    else return storageService.post(RECIPE_KEY, recipe)
}

function remove(recipeId) {
    // return httpService.delete(BASE_URL + stayId)
    return storageService.remove(RECIPE_KEY, recipeId)
}


function getEmptyRecipe() {
    return {
    }
}




try {
    const val = await storageService.query(RECIPE_KEY)
    if (!val.length) addRecipes()
} catch (error) {
    console.log(error);
}

function addRecipes() {
    const recipes = [
        addRecipe('Distant Galaxy', 'https://res.cloudinary.com/du1jrse2t/image/upload/v1703685218/youML/4f510141-b75f-4abb-b3a3-c66d758e900b_ptksol.png', 'MoonDancer', 'https://res.cloudinary.com/du1jrse2t/image/upload/v1703685194/youML/1b166739-accc-417c-b695-0dfd1432c6b4_zxouqd.png', 1400, 97),
        addRecipe('Life On Edena', 'https://res.cloudinary.com/du1jrse2t/image/upload/v1703685232/youML/f28d90fc-db11-4a1d-9ac7-b922189cbf3c_ryazce.png', 'NebulaKid', 'https://res.cloudinary.com/du1jrse2t/image/upload/v1703685204/youML/f9d2c07e-8580-4334-bc06-e2a505df89a9_k88zbs.png', 1200, 92),
        addRecipe('AstroFiction', 'https://res.cloudinary.com/du1jrse2t/image/upload/v1703685236/youML/71bd4688-3e10-4a62-9007-3bda45c426b9_bb3dmz.png', 'Spaceone', 'https://res.cloudinary.com/du1jrse2t/image/upload/v1703685211/youML/5c5b3d43-b814-4874-9111-2b813c34ee3b_h6qsyg.png', 1100, 91),
        addRecipe('Space Walking', 'https://res.cloudinary.com/du1jrse2t/image/upload/v1703685241/youML/af71231b-0e03-47fe-881d-17c08277b8b3_awcvjy.png', 'Animakid', 'https://res.cloudinary.com/du1jrse2t/image/upload/v1703690065/youML/cba5e98b-2db0-4385-ab4f-3bb2d72aaa07_hnja1y.png', 1100, 91),
    ]
    console.log('recipes', recipes);
    save(recipes)
}

function addRecipe(name, imgUrl, username, userImgUrl, runs, likes) {
    return {
        _id: utilService.makeId,
        name,
        imgUrl,
        by: {
            _id: utilService.makeId,
            name: username,
            imgUrl: userImgUrl,
        },
        runs,
        likes
    }
}
