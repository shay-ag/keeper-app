import React, {useState} from "react";
import Header from "./Header";
import CreateArea from "./CreateArea";
import Note from "./Note";
import Footer from "./Footer";

import { v4 as uuidv4 } from 'uuid';
import Localbase from 'localbase';

let db = new Localbase('db');

function App(){

    const [notes, setNotes] = useState([]);

    function addingNotes(inputText) {

        db.collection('notes').add({
            noteid: uuidv4(),
            title: inputText.title,
            content: inputText.content
        })

        setNotes( (prevValue) => {
            return [...prevValue, inputText]
        })
    }

    function deletingNote(id, title){

        db.collection('notes').doc({ title : title}).delete();

        setNotes( (prevValue) => {
            return ( prevValue.filter( (noteItem, index) => {
                return index !== id;
            }))
        })
    }

    return (
        <div>
        <Header />
        <CreateArea onAdd={addingNotes}/>
        {notes.map( (noteItem, index) => {
            return (
                <Note 
                    key={index}
                    id={index}
                    title={noteItem.title}
                    content={noteItem.content}
                    onDelete={deletingNote}
                />
            )
        })}
        <Footer />
        </div>
    )
}

export default App;