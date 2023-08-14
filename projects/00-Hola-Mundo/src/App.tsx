// import { TwitterFollowCard } from "./practice/TwitterFollowCard";
// import { InstagramFollow } from "./practice/InstagramFollow";
// import './css/ig.css'
import { AppProps, TwitterFollowCard } from './practice/TwitterFollowCard'
import './css/app.css'


 const users = [
    {
        userName: 'elrichmc',
        name: 'Señor de la Bedrock',
        uuid: 1
    },
    {
        userName: 'midudev',
        name: 'Miguel Angel Durán',
        uuid: 2
    }
]

export function App():React.ReactNode {
    // const formatUserName = (userName:AppProps) => `@${userName}`
    
    return(
        <section className='App'>
        {
            users.map(({userName, name, uuid}) => (
                    <TwitterFollowCard key={uuid} userName={userName} name={name}/>
            ))
        }

        </section>
    )
}

// export function App ():React.ReactNode {
//     return(
//     <>
    // <section className="App">
//         <InstagramFollow name={"Feid"} userNameImg={"feid"} userName="FERXXO"/> 
//         <InstagramFollow name={"JhayCo"} userNameImg={"jhayco"} userName="jhayco"/> 
//         <InstagramFollow name={"Anuel AA"} userNameImg={"anuelaa"} userName="RHLM"/> 
//         <InstagramFollow name={"Bad Bunny"} userNameImg={"badbunnypr"} userName="badbunnypr"/>
//         <InstagramFollow name={"Travis Scott"} userNameImg={"travisscottxx"} userName="UTOPIA"/>
//     </section>
//     </>)
// }


