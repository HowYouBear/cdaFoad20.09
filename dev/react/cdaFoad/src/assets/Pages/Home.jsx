import Body from "../Components/Body/Body";
import style from "./Home.module.scss"


function Home () {
    return(
        <div className={style.homeFrame}>
            <Body/>
        </div>
    )
}

export default Home;