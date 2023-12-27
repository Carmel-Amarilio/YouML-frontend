import { useSelector } from "react-redux";
import { useEffect } from "react";

import { loadRecipes } from "../store/actions/recipe.actions";

import { MainHeader } from "../cmps/MainHeader";
import { DiscoverCreate } from "../cmps/home page/DiscoverCreate";
import { RecipesList } from "../cmps/home page/RecipesList";

export function Home() {
    const recipes = useSelector((storeState) => storeState.recipeModule.recipes)

    useEffect(() => {
        loadRecipes()
            .catch((err) => {
                console.log('err', err)
            })
    }, []);

    if(!recipes.length) return('loading...')
    return (
        <section className="home main-container">
            <MainHeader />
            <DiscoverCreate recipes={recipes} />
            <RecipesList title={'Trending Recipes'} recipes={recipes} />
            <RecipesList title={'Newest Recipes'} recipes={recipes} />
        </section>
    )
}