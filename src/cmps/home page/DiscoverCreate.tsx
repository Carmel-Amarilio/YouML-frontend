import { utilService } from "../../services/util.service"

import { Recipe } from "../../models/models";

import rocketIcon from "../../assets/img/icons/RocketLaunch.svg"
import plusIcon from "../../assets/img/icons/Plus.svg"


interface props {
    recipe: Recipe;
}

export function DiscoverCreate({ recipe }: props): JSX.Element {
    const statistics = [{ title: "Total Runs", total: 240200 }, { title: "Workflows", total: 100500 }, { title: "Creators", total: 240600 }]
    const { name, imgUrl, by } = recipe;

    return (
        <section className="discover-create">
            <h1>Discover & Create AI Recipes</h1>

            <article className="view flex column gap30">
                <div className="btns-container flex gap20">
                    <button className="form-btn icon-box"> <img src={rocketIcon} /> Discover</button>
                    <button className="underline-btn icon-box"><img src={plusIcon} /> Create</button>
                </div>

                <div className="statistics-container flex ">
                    {statistics.map(({ title, total }) =>
                        <div className="statistics flex column gap5" key={title}>
                            <h3>{utilService.formatNumber(total)}+</h3>
                            <p>{title}</p>
                        </div>
                    )}
                </div>
            </article>

            <article className="recipes-card flex column">
                <img src={imgUrl} />
                <div className="recipes-details flex column gap10">
                    <h4>{name.length > 25 ? `${name.substring(0, 25)}...` : name}</h4>
                    <div className="flex align-center gap5">
                        {by.imgUrl ? <img src={by.imgUrl} alt={`${by.name}'s profile`} className="mini-profile" /> : <p className="mini-no-profile">{by.name.charAt(0).toUpperCase()}</p>}
                        <p> {by.name.length > 15 ? `${by.name.substring(0, 15)}...` : by.name}</p>
                    </div>
                </div>
            </article>
        </section>
    )
}