import { useState } from "react";
import Searchbar from "../SearchBar/Searchbar";
import style from "./Body.module.scss"

function Body () {

    const [notes, setNotes] = useState([]);
    const [backgroundColor, setBackgroundColor] = useState('');

    const newNote = (newColor) =>{
        const newNote = 
        <div 
            key={notes.length} 
            className={style.note}
            style={{ backgroundColor: newColor}}
        >
            Nouvelle div #{notes.length + 1}
        </div>;
        
        setNotes([...notes, newNote]);
        setBackgroundColor(newColor);
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