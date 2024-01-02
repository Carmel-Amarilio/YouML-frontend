
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import logoImgUrl from '../assets/img/youML-logo.png'
import userIcon from '../assets/img/icons/User.svg'

export function MainHeader() {
    const navigate = useNavigate()
    const [isOpen, setIsOpen] = useState(false)

    function toggleNav() {
        setIsOpen(!isOpen)
    }

    const Nav = () => {
        return (
            <>
                <button>Marketplace</button>
                <button onClick={() => navigate("/top-creators")}>Rankings</button>
                <button>Create</button>
                <button onClick={() => navigate("/create-account")} className='form-btn icon-box'>
                    <img src={userIcon} alt="User Icon" /> Sign Up
                </button>
            </>
        )
    }

    return (
        <header className="main-header full flex space-between">
            <article className='logo flex justify-center align-center gap5' onClick={() => navigate("/")}>
                <img src={logoImgUrl} />
                <h3>YouML</h3>
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