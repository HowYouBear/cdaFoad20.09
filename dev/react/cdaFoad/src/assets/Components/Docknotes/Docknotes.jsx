import style from "./Docknotes.module.scss"

function Docknotes () {
    return(
        <div className={style.docknotesFrame}>
            <p>Docknotes</p>
            <div className={style.addNoteButtons}>
                <button className="blue"></button>
                <button className="orange"></button>
                <button className="red"></button>
                <button className="green"></button>
                <button className="purple"></button>
            </div>
        </div>
    )
}

export default Docknotes;