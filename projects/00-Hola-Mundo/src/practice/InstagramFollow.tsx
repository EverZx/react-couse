export interface IgApp{
    name:string,
    userName:string,
    userNameImg:string,
}

export function InstagramFollow ({name, userName, userNameImg}:IgApp):React.ReactNode{
    return(
        <article className="ig-followCard">
            <div className="ig-followCard-cont">
                <header className="ig-followCard-header">
                    <img
                    className="ig-followCard-avatar"
                    alt="user-avatar"
                    src={`https://unavatar.io/youtube/${userNameImg}`}/>
                    <div className="ig-followCard-info">
                        <strong>{name}</strong>
                        <span >{userName}</span>
                    </div>
                    <button className="ig-followCard-button">
                        Follow
                    </button>
                </header>
            </div>

        </article>
    )
}