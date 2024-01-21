import { useNavigate } from "react-router-dom";

import { MainFooter } from "../cmps/MainFooter";
import { MainHeader } from "../cmps/MainHeader";

import imgUrl from '../assets/img/astronautImg2.png'
import FacebookIcon from '../assets/img/icons/Facebook Logo.svg'
import GoogleIcon from '../assets/img/icons/Google Logo.svg'
import appleIcon from '../assets/img/icons/Apple Logo.svg'

export function CreateAccount() {
    const navigate = useNavigate()

    function onNavigate(to: string) {
        navigate(to)
    }

    return (
        <section className="create-account">
            <MainHeader onNavigate={onNavigate} />
            <main>
                <img src={imgUrl} />
                <section className="flex column gap30">
                    <h1>Create account</h1>
                    <p>Welcome! Sign In below to Explore and Create AI Recipes</p>
                    <button className='form-btn google icon-box'> <img src={GoogleIcon} /> Continue with Google</button>
                    <button className='form-btn facebook icon-box'> <img src={FacebookIcon} /> Continue with Facebook</button>
                    <button className='form-btn apple icon-box'> <img src={appleIcon} /> Continue with Apple</button>
                </section>
            </main>
            <MainFooter onNavigate={onNavigate} />
        </section>
    )
}