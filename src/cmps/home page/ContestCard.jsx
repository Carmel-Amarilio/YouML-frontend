import eyeIcon from "../../assets/img/icons/Eye.svg"

export function ContestCard({ user }) {
    return (
        <section className="contest-card full">
            <div className="user flex align-center gap10">
                <img src={user.imgUrl} alt={`${user.name}'s profile`} className="mini-profile" />
                <p className="name icon-box"> {user.name} </p>
            </div>
            <h1>Magic Effects Contest</h1>
            <button className="form-btn icon-box"> <img src={eyeIcon} /> See Details</button>

            <article className=" flex column clock num">
                <p className="text">Auction ends in:</p>
                <div className="time flex gap20">
                    <p>24</p>
                    <p>:</p>
                    <p>20</p>
                    <p>:</p>
                    <p>24</p>
                </div>
                <div className="text flex space-between">
                    <p>Hours</p>
                    <p>Minutes</p>
                    <p>Seconds</p>
                </div>

            </article>
        </section>
    )
}