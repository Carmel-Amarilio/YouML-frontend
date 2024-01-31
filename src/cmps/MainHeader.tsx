
import { useState } from 'react';

import logoImgUrl from '../assets/img/youML-logo.png'
import userIcon from '../assets/img/icons/User.svg'

export function MainHeader({ onNavigate, logInUser = null }) {
    const [isOpen, setIsOpen] = useState(false)

    function toggleNav() {
        setIsOpen(!isOpen)
    }

    const Nav = () => {
        return (
            <>
                <button onClick={() => onNavigate("/marketplace")}>Marketplace</button>
                <button onClick={() => onNavigate("/top-creators")}>Rankings</button>
                <button>Create</button>
                {
                    logInUser ? <button className='form-btn icon-box'>Log Out </button> :
                        <button onClick={() => onNavigate("/create-account")} className='form-btn icon-box'>
                            <img src={userIcon} alt="User Icon" /> Sign Up
                        </button>
                }
            </>
        )
    }

    return (
        <header className="main-header full flex space-between">
            <article className='flex gap30'>
                <div className='logo flex justify-center align-center gap5' onClick={() => onNavigate("/")}>
                    <img src={logoImgUrl} />
                    <h3>YouML</h3>
                </div>

                {logInUser && <div className='flex gap5 align-center '>
                    {logInUser.imgUrl ? <img src={logInUser.imgUrl} alt={`${logInUser.name}'s profile`} className="mini-profile" /> : <p className="mini-no-profile">{logInUser.name.charAt(0).toUpperCase()}</p>}
                    <h4> {logInUser.name.length > 10 ? `${logInUser.name.substring(0, 10)}...` : logInUser.name}</h4>
                </div>}
            </article>

            <article className='nav-section flex gap10'>
                <Nav />
            </article>

            {isOpen &&
                <section className='modal' onClick={toggleNav}>
                    <article className='drop-nav flex gap10'>
                        <Nav />
                    </article>
                </section>}
            <button className='bar-btn' onClick={toggleNav}><i className="fa-solid fa-bars"></i></button>
        </header>
    )
}