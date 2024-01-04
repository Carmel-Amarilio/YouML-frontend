import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { useSelector } from "react-redux"

import { userService } from "../services/user.service"
import { utilService } from "../services/util.service"
import { loadRecipes } from "../store/actions/recipe.actions"

import { MainHeader } from "../cmps/MainHeader"
import { MainFooter } from "../cmps/MainFooter"

import plusIcon from "../assets/img/icons/Plus.svg"
import InstagramLogoIcon from '../assets/img/icons/InstagramLogo.svg'
import TwitterLogoIcon from '../assets/img/icons/TwitterLogo.svg'
import YoutubeLogoIcon from '../assets/img/icons/YoutubeLogo.svg'
import DiscordLogoIcon from '../assets/img/icons/DiscordLogo.svg'
import DiscordLogoWhitIcon from '../assets/img/icons/DiscordLogoWhit.svg'
import GlobeIcon from '../assets/img/icons/Globe.svg'
import { RecipesList } from "../cmps/home page/RecipesList"

export function CreatorPage() {
    const params = useParams()
    const recipes = useSelector((storeState) => storeState.recipeModule.recipes)
    const [user, setUser] = useState(null)
    const [filter, setFilter] = useState('created')
    console.log(recipes);


    useEffect(() => {
        const { creatorId } = params
        getUser(creatorId)
        loadRecipes({ byId: creatorId })
            .catch((err) => {
                console.log('err', err)
            })

    }, [])

    async function getUser(creatorId) {
        try {
            const user = await userService.getUserById(creatorId)
            setUser(user)
        } catch (error) {
            console.log(error)
        }
    }
    if (!user) return ('loading...')
    const { _id, name, runs, bio, imgUrl, backImgUrl } = user
    return (
        <section className="creator-page">
            <MainHeader />
            <article className="imgs">
                <img className="back" src={backImgUrl} />
                <img className="face" src={imgUrl} />
            </article>

            <main className="main-container" >
                <section className="about flex column gap30">
                    <article className="head flex space-between">
                        <h1>{name}</h1>
                        <div className="flex gap20">
                            <button className="form-btn icon-box"> <img src={DiscordLogoWhitIcon} /> Discover</button>
                            <button className="underline-btn icon-box"><img src={plusIcon} /> Create</button>
                        </div>
                    </article>

                    <article className="statistics flex gap30 num">
                        <div className="flex column gap5">
                            <h3 className="num">{utilService.formatNumber(runs)}</h3>
                            <p>Runs</p>
                        </div>
                        <div className="flex column gap5">
                            <h3 className="num">{53}</h3>
                            <p>Recipes</p>
                        </div>
                        <div className="flex column gap5">
                            <h3 className="num">{utilService.formatNumber(3000)}</h3>
                            <p>Followers</p>
                        </div>
                    </article>

                    <article className="bio flex column gap10">
                        <h4>Bio</h4>
                        <p>{bio}</p>
                    </article>

                    <article className="links flex column gap10">
                        <h4>Links</h4>
                        <div className='icons flex gap10'>
                            <img src={GlobeIcon} />
                            <img src={DiscordLogoIcon} />
                            <img src={YoutubeLogoIcon} />
                            <img src={TwitterLogoIcon} />
                            <img src={InstagramLogoIcon} />
                        </div>
                    </article>
                </section>

                <article className="btns flex space-between">
                    <button className={`${filter === 'created' ? 'select' : ''} created`} onClick={() => setFilter('created')}>Created</button>
                    <button className={`${filter === 'owned' ? 'select' : ''} owned`} onClick={() => setFilter('owned')} >Owned</button>
                    <button className={`${filter === 'collection' ? 'select' : ''} collection`} onClick={() => setFilter('collection')}>Collection</button>
                </article>

                <article className="list main-container full">
                    {recipes.length <= 0 ?
                        <div>There are no {name} recipes</div> :
                        <RecipesList title={'Trending Recipes'} recipes={recipes} />}
                </article>

            </main>

            <MainFooter />
        </section>
    )
}