import { useNavigate } from "react-router-dom";

import { utilService } from "../../services/util.service";


export function UsersList({ users }) {
    const navigate = useNavigate()

    return (
        <section className="users-list card-grid">
            {users.map(({ _id, imgUrl, name, runs }, i) => (
                <article key={i} className="user-card flex column" onClick={() => navigate(`/creator/${_id}`)}>
                    < div className="index" > {i + 1}</div>
                    <img src={imgUrl} alt={name} />
                    <h4 className="name">{name}</h4>
                    <p className="runs">Total Runs: <span className="num"> {utilService.formatNumber(runs)} </span></p>
                </article>
            ))
            }
        </section >
    )
}