import { RecipesList } from "../cmps/home page/RecipesList";
import { observer } from "mobx-react";
import { ChangeEvent, useEffect, useState } from "react";

import { recipeStore } from "../store/recipeStore";
import { Recipe } from "../models/models";

import { MainFooter } from "../cmps/MainFooter";
import { MainHeader } from "../cmps/MainHeader";

interface Filter {
    name: string;
    sort: 'top' | 'collections';
}

export const BrowseMarketplace: React.FC = observer(() => {
    const recipes: Recipe[] = recipeStore.recipes;
    const [filter, setFilter] = useState<Filter>({ name: '', sort: 'top' })

    useEffect(() => {
        recipeStore.getRecipes();
    }, [])

    function onSearch(e: ChangeEvent<HTMLInputElement>): void  {
        const val = e.target.value
        setFilters('name', val)
    }

    function setFilters(key: keyof Filter, val: string): void {
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
})