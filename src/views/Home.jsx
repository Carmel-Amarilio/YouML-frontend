import { useSelector } from "react-redux";
import { useEffect } from "react";

import { loadRecipes } from "../store/actions/recipe.actions";

import { MainHeader } from "../cmps/MainHeader";
import { DiscoverCreate } from "../cmps/home page/DiscoverCreate";
import { RecipesList } from "../cmps/home page/RecipesList";
import { UsersList } from "../cmps/home page/UsersList";
import { loadUsers } from "../store/actions/user.actions";
import { ContestCard } from "../cmps/home page/ContestCard";
import { JoinCard } from "../cmps/home page/JoinCard";

export function Home() {
    const recipes = useSelector((storeState) => storeState.recipeModule.recipes)
    const users = useSelector((storeState) => storeState.userModule.users)

    useEffect(() => {
        loadUsers()
        loadRecipes()
            .catch((err) => {
                console.log('err', err)
            })
    }, []);

    if (!recipes.length || !users.length) return ('loading...')
    return (
        <section className="home main-container">
            <MainHeader />
            <DiscoverCreate recipes={recipes} />
            <RecipesList title={'Trending Recipes'} recipes={recipes} />
            <RecipesList title={'Newest Recipes'} recipes={recipes} />
            <UsersList users={users} />
            <ContestCard user={users[6]} />
            <JoinCard />
        </section>
    )
}