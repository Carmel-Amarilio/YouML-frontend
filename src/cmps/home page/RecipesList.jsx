import { utilService } from "../../services/util.service";

export function RecipesList({ title, recipes }) {
    return (
        <section className="recipes-list">
            {title && <h2>{title}</h2>}
            
            <button className="underline-btn"> View All</button>

            <main className="card-grid">
                {recipes.slice(0, 3).map(({ _id, imgUrl, name, by, likes, runs }) => (
                    <article className="recipes-card flex column" key={_id}>
                        <img src={imgUrl} alt={name} />
                        <div className="recipes-details flex column gap10">
                            <h4>{name}</h4>
                            <div className="flex align-center gap5">
                                <img src={by.imgUrl} alt={`${by.name}'s profile`} className="mini-profile" />
                                <p>{by.name} · {utilService.formatNumber(runs)} · <i className="fa-regular fa-thumbs-up"></i> {likes}%</p>
                            </div>
                        </div>
                    </article>
                ))}
            </main>

        </section>
    )
}