import { utilService } from "../../services/util.service";

export function RecipesList({ title, recipes }) {
    return (
        <section className="recipes-list">
            {title && <h2>{title}</h2>}

            <button className="underline-btn"> View All</button>

            <main className="card-grid">
                {recipes.slice(0, 3).map(({ _id, imgUrl, name, by, likes, runs }, i) => (
                    <article key={i} className="recipes-card flex column">
                        <img src={imgUrl} alt={name} />
                        <div className="recipes-details flex column gap10">
                            <h4>{name}</h4>
                            <div className="flex align-center gap5">
                                <img src={by.imgUrl} alt={`${by.name}'s profile`} className="mini-profile" />
                                <p className="name">{by.name} · <span className="num">{utilService.formatNumber(runs)}</span> · <i className="fa-regular fa-thumbs-up"></i>  <span className="num">{likes}%</span></p>
                            </div>
                        </div>
                    </article>
                ))}
            </main>

        </section >
    )
}