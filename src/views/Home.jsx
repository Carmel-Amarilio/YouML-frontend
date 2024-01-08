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
import { MainFooter } from "../cmps/MainFooter";

import arrowIcon from "../assets/img/icons/ArrowRight.svg"
import rocketIcon from "../assets/img/icons/RocketLaunch.svg"



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

    if (recipes.length < 3 || !users.length) return ('loading...')
    return (
        <section className="home main-container">
            <MainHeader />
            <DiscoverCreate recipes={recipes} />

            <section className="list">
                <h2>Trending Recipes</h2>
                <button className="underline-btn icon-box"> <img src={arrowIcon} /> View All</button>
                <RecipesList recipes={recipes.slice(0, 3)} />
            </section>

            <section className="list">
                <h2>Newest Recipes</h2>
                <button className="underline-btn icon-box"> <img src={arrowIcon} /> View All</button>
                <RecipesList recipes={recipes.slice(0, 3)} />
            </section>

            <section className="list">
                <h2>Top creators</h2>
                <button className="underline-btn icon-box"> <img src={rocketIcon} />View Rankings</button>
                <UsersList users={users.slice(0, 12)} />
            </section>

            <ContestCard user={users[6]} />
            <JoinCard />
            <MainFooter />
        </section>
    )
}