
import { useState } from 'react';

import logoImgUrl from '../assets/img/youML-logo.png'
import userIcon from '../assets/img/icons/User.svg'

export function MainHeader() {
    const [isOpen, setIsOpen] = useState(false);

    function toggleNav() {
        setIsOpen(!isOpen)
    }
    return (
        <header className="main-header full flex space-between">
            <article className='flex justify-center align-center gap5'>
                <img src={logoImgUrl} />
                <h3>YouML</h3>
            </article>
            {isOpen && <article className='nav-section flex gap10'>
                <button>Marketplace</button>
                <button>Rankings</button>
                <button>Create</button>
                <button className='form-btn icon-box'><img src={userIcon} /> Sign Up</button>
            </article>}
            <button className='bar-btn' onClick={toggleNav}><i className="fa-solid fa-bars"></i></button>
        </header>
    )
}