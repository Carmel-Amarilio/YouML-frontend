import { RecipesList } from "../cmps/home page/RecipesList";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

import { loadRecipes } from "../store/actions/recipe.actions";
import { Recipe } from "../models/models";

import { MainFooter } from "../cmps/MainFooter";
import { MainHeader } from "../cmps/MainHeader";

interface RootState {
    recipeModule: {
        recipes: Recipe[];
    };
}

export function BrowseMarketplace() {
    const recipes = useSelector((storeState: RootState) => storeState.recipeModule.recipes);
    const [filter, setFilter] = useState({ name: '', sort: 'top' })

    useEffect(() => {
        loadRecipes()
            .catch((err) => {
                console.log('err', err)
            })
    }, [])

    function onSearch(e) {
        const val = e.target.value
        setFilters('name', val)
    }

    function setFilters(key, val) {
        setFilter(prev => ({ ...prev, [key]: val }))
    }

    return (
        <section className="browse-marketplace main-container">
            <MainHeader />
            <h1>Browse Marketplace</h1>
            <article className="search">
                <input type="text" name="name" placeholder="Search for recipes" onChange={onSearch} />
                <button><i className="fa-solid fa-magnifying-glass"></i></button>
            </article>

            <article className="btns">
                <button className={`${filter.sort === 'top' ? 'select' : ''}`} onClick={() => setFilters('sort', 'top')}>Top</button>
                <button className={`${filter.sort === 'collections' ? 'select' : ''}`} onClick={() => setFilters('sort', 'collections')} >Collections</button>
            </article>

            <article className="list main-container full">
                <RecipesList recipes={recipes} />
            </article>
            
            <MainFooter />

        </section>
    )
}