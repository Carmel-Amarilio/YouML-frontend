import astronautImg from '../../assets/img/astronaut.png'
import envelopeIcon from '../../assets/img/icons/EnvelopeSimple.svg'

export function JoinCard() {

    function onEmail(e) {
        const val = e.target.value
    }

    return (
        <section className="join-card">
            <article className="flex align-center">
                <img src={astronautImg} />
                <div className='text-container'>
                    <h1>Join Our Digest</h1>
                    <p>Get exclusive promotions & updates straight to your inbox.</p>
                    <div className='flex'>
                        <input type="email" name="email" placeholder="Enter your email here" onChange={onEmail} />
                        <button className="form-btn icon-box"><img src={envelopeIcon} /> Subscribe</button>
                    </div>
                </div>
            </article>

        </section>
    )
}