import { useState } from "react";
import Searchbar from "../SearchBar/Searchbar";
import style from "./Body.module.scss"

function Body () {

    const [notes, setNotes] = useState([]);

    const newNote = (newColor) =>{
        const monthName = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
        const date = new Date();
        console.log(new Date())
        const newNote = 
        <div 
            key={notes.length} 
            className={style.note}
            style={{ backgroundColor: newColor}}
        >
            Nouvelle div #{notes.length + 1}
            <br/>
            <span
                className={style.noteDateLastUpdate}>
                {monthName[date.getMonth()]} {date.getDate()}, {date.getFullYear()}: {date.getHours()}:{date.getMinutes()}
            </span>
            <button 
                className={style.editButton}
                onClick={editNote}
            >
                <i class="fa-solid fa-pen"></i>
            </button>
        </div>;
        
        setNotes([...notes, newNote]);
        console.log(notes);
    }

    const editNote = () =>{
        console.log("suffer");
    }

    return(
        <div className={style.bodyMainFrame}>
            <div className={style.docknotesFrame}>
                <p>Docknotes</p>
                <div className={style.addNoteButtons}>
                    <button className="blue"
                    onClick={() => newNote('#55a0f6')}></button>
                    <button className="orange"
                    onClick={() => newNote('#e39d3c')}></button>
                    <button className="red"
                    onClick={() => newNote('#db663a')}></button>
                    <button className="green"
                    onClick={() => newNote('#cad952')}></button>
                    <button className="purple"
                    onClick={() => newNote('#9469ec')}></button>
                </div>
            </div>
            <div className={style.bodyFrame}>
                <Searchbar/>
                <h1>Notes</h1>
                <div className={style.notesFrame}>
                    {notes}
                </div>
            </div>
        </div>
    )

}

export default Body;