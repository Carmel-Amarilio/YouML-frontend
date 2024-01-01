
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
    return (
        <header className="main-header full flex space-between">
            <article className='flex justify-center align-center gap5'>
                <img src={logoImgUrl} />
                <h3>YouML</h3>
            </article>

            <article className='nav-section flex gap10'>
                <button>Marketplace</button>
                <button>Rankings</button>
                <button>Create</button>
                <button onClick={() => navigate("/create-account")} className='form-btn icon-box'> <img src={userIcon} /> Sign Up</button>
            </article>

            {isOpen &&
                <section className='modal' onClick={toggleNav}>
                    <article className='drop-nav flex gap10'>
                        <button>Marketplace</button>
                        <button>Rankings</button>
                        <button>Create</button>
                        <button onClick={() => navigate("/create-account")} className='form-btn icon-box' > <img src={userIcon} /> Sign Up</button>
                    </article>
                </section>}
            <button className='bar-btn' onClick={toggleNav}><i className="fa-solid fa-bars"></i></button>
        </header>
    )
}