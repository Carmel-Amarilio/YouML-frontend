import { utilService } from "../../services/util.service";


export function UsersList({ users, onNavigate }): JSX.Element {

    return (
        <section className="users-list card-grid">
            {users.map(({ _id, imgUrl, name, runs }, i) => (
                <article key={i} className="user-card flex column" onClick={() => onNavigate(`/creator/${_id}`)}>
                    < div className="index" > {i + 1}</div>
                    {imgUrl? <img src={imgUrl} alt={name} />:<p className="no-profile">{name.charAt(0).toUpperCase()}</p>}
                    <h4 className="name">{name.length>20 ? `${name.substring(0, 20)}...`: name}</h4>
                    <p className="runs">Total Runs: <span className="num"> {utilService.formatNumber(runs)} </span></p>
                </article>
            ))
            }
        </section >
    )
}