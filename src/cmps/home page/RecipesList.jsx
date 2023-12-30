import { utilService } from "../../services/util.service";

import arrowIcon from "../../assets/img/icons/ArrowRight.svg"
import likeIcon from "../../assets/img/icons/Like.svg"
import dotIcon from "../../assets/img/icons/Dot.svg"

export function RecipesList({ title, recipes }) {
    return (
        <section className="recipes-list">
            {title && <h2>{title}</h2>}

            <button className="underline-btn icon-box"> <img src={arrowIcon} /> View All</button>

            <main className="card-grid">
                {recipes.slice(0, 3).map(({ _id, imgUrl, name, by, likes, runs }, i) => (
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
                                    <span className="num">{likes}%
                                    </span>
                                </p>
                            </div>
                        </div>
                    </article>
                ))}
            </main>

        </section >
    )
}