import { utilService } from "../../services/util.service";

export function UsersList({ users }) {
    console.log(users);
    return (
        <section className="users-list">
            <h2>Top creators</h2>

            <button className="underline-btn">View Rankings</button>

            <main className="card-grid">
                {users.slice(0, 12).map(({ _id, imgUrl, name, runs }, i) => (
                    <article key={i} className="user-card flex column">
                        < div className="index" > {i + 1}</div>
                        <img src={imgUrl} alt={name} />
                        <h4 className="name">{name}</h4>
                        <p className="runs">Total Runs: <span className="num"> {utilService.formatNumber(runs)} </span></p>
                    </article>
                ))
                }
            </main >

        </section >
    )
}