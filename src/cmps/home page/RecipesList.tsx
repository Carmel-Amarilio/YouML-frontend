import { utilService } from "../../services/util.service";

import { Recipe } from "../../models/models";

import likeIcon from "../../assets/img/icons/Like.svg"
import dotIcon from "../../assets/img/icons/Dot.svg"
import HeartIcon from "../../assets/img/icons/Heart.svg"

interface props {
    recipes: Recipe[];
}

export function RecipesList({ recipes } : props) : JSX.Element{
    return (
        <section className="recipes-list card-grid">
            {recipes.map(({ _id, imgUrl, name, by, likes, runs }, i) => (
                <article key={i} className="recipes-card flex column">
                    <img src={imgUrl} alt={name} />
                    <div className="recipes-details flex column gap10">
                        <h4>{name}</h4>
                        <div className="flex align-center gap5">
                            <img src={by.imgUrl} alt={`${by.name}'s profile`} className="mini-profile" />
                            <p className="name icon-box">
                                {by.name}
                                <img src={dotIcon} />
                                <span className="num">{utilService.formatNumber(runs)} uses</span>
                                <img src={dotIcon} />
                                <img src={likeIcon} />
                                <span className="num">{likes}%</span>
                            </p>
                            <button className="like icon-box">
                                <img src={HeartIcon} />
                            </button>
                        </div>
                    </div>
                </article>
            ))}
        </section >
    )
}