import { useNavigate } from 'react-router-dom'

import logoImgUrl from '../assets/img/youML-logo.png'
import InstagramLogoIcon from '../assets/img/icons/InstagramLogo.svg'
import TwitterLogoIcon from '../assets/img/icons/TwitterLogo.svg'
import YoutubeLogoIcon from '../assets/img/icons/YoutubeLogo.svg'
import DiscordLogoIcon from '../assets/img/icons/DiscordLogo.svg'


export function MainFooter() {
    const navigate = useNavigate()

    function onEmail(e) {
        const val = e.target.value
    }

    return (
        <footer className="main-footer main-container full ">
            <section className='flex space-between'>
                <article className='flex column'>
                    <div className='logo flex align-center gap5' onClick={() => navigate("/")}>
                        <img src={logoImgUrl} />
                        <h2>YouML</h2>
                    </div>
                    <p>Join our community</p>
                    <div className='flex gap10'>
                        <img src={DiscordLogoIcon} />
                        <img src={YoutubeLogoIcon} />
                        <img src={TwitterLogoIcon} />
                        <img src={InstagramLogoIcon} />
                    </div>
                </article>

                <article>
                    <h1>Explore</h1>
                    <p>Marketplace</p>
                    <p>Rankings</p>
                    <p>Create</p>
                </article>

                <article>
                    <h1>Join our digest</h1>
                    <p>Get exclusive promotions & updates straight to your inbox.</p>

                    <div className='enter-email flex'>
                        <input type="email" name="email" placeholder="Enter your email here" onChange={onEmail} />
                        <button className="form-btn">Subscribe</button>
                    </div>
                </article>
            </section >
            <p>Ⓒ YouML 2024</p>
        </footer>
    )
}