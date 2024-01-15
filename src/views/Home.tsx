import { observer } from "mobx-react";
import { useEffect } from "react";

import { usersStore } from "../store/userStore";
import { recipeStore } from "../store/recipeStore";
import { Recipe, User } from "../models/models";

import { MainHeader } from "../cmps/MainHeader";
import { DiscoverCreate } from "../cmps/home page/DiscoverCreate";
import { RecipesList } from "../cmps/home page/RecipesList";
import { UsersList } from "../cmps/home page/UsersList";
import { ContestCard } from "../cmps/home page/ContestCard";
import { JoinCard } from "../cmps/home page/JoinCard";
import { MainFooter } from "../cmps/MainFooter";

import arrowIcon from "../assets/img/icons/ArrowRight.svg"
import rocketIcon from "../assets/img/icons/RocketLaunch.svg"



export const Home: React.FC = observer(() => {
    const recipes: Recipe[] = recipeStore.recipes;
    const users: User[] = usersStore.users;

    useEffect(() => {
        usersStore.getUsers();
        recipeStore.getRecipes();
    }, []);

    if (recipes.length < 3 || !users.length) return <div>loading...</div>
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
})