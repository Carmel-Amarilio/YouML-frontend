import { utilService } from "../../services/util.service"

export function DiscoverCreate({ recipes }) {
    const statistics = [{ title: "Total Runs", total: 240000 }, { title: "Workflows", total: 100000 }, { title: "Creators", total: 240000 }]
    const { name, imgUrl, by } = recipes[3];

    return (
        <section className="discover-create">
            <h1>Discover & Create AI Recipes</h1>

            <article className="view flex column gap10">
                <div className="btns-container flex gap20">
                    <button className="form-btn"><i className="fa-solid fa-rocket"></i> Discover</button>
                    <button className="underline-btn">+ Create</button>
                </div>

                <div className="flex gap30">
                    {statistics.map(({ title, total }) =>
                        <div className="statistics flex column gap5" key={title}>
                            <h3>{utilService.formatNumber(total)}</h3>
                            <p>{title}</p>
                        </div>
                    )}
                </div>
            </article>

            <article className="recipes-card flex column">
                <img src={imgUrl} />
                <div className="recipes-details flex column gap10">
                    <h4>{name}</h4>
                    <div className="flex align-center gap5">
                        <img src={by.imgUrl} className="mini-profile" />
                        <p>{by.name}</p>
                    </div>
                </div>
            </article>
        </section>
    )
}