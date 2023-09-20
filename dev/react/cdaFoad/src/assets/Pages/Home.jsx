import Docknotes from "../Components/Docknotes/Docknotes";
import style from "./Home.module.scss"


function Home () {
    return(
        <div className={style.homeFrame}>
            <Docknotes/>
        </div>
    )
}

export default Home;