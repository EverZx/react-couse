import { useState } from "react";


export interface AppProps {
    name:string;
    userName:string;
    isFollowing?:boolean;
    // formatUserName:Function,
}
export function TwitterFollowCard({name, userName}:AppProps):React.ReactNode {

    const [isFollowing, setIsFollowing] = useState(false)
    let text:String = isFollowing ? 'Siguiendo' : 'Seguir'

    const buttonClassName = isFollowing
    ? 'tw-followCard-button is-following': 'tw-followCard-button'

    const handleClick = () => {
        setIsFollowing(!isFollowing)
    }

    return(
        <article className="tw-followCard">
            <header className="tw-followCard-header">
                <img 
                className="tw-followCard-avatar" 
                alt="avatar RichMC"
                src={`https:unavatar.io/${userName}`}/>
                <div className="tw-followCard-info">
                    <strong>{name}</strong>
                    <span className="tw-followCard-infoUserName"> @{userName} </span>
                </div>
            </header>

                <aside>
                    <button className={buttonClassName} onClick={handleClick} >
                        <span className="tw-followCard-text">{text}</span>
                        <span className="tw-followCard-stopFollow" >Dejar de Seguir</span>
                    </button>
                </aside>
        </article>
    )
}

    // const state = useState(false)
    // const isFollowing = state[0]
    // const setIsFollowing = state[1]