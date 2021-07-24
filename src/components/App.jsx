import React, {useState} from "react";
import Header from "./Header";
import CreateArea from "./CreateArea";
import Note from "./Note";
import Footer from "./Footer";

function App(){

    const [notes, setNotes] = useState([]);

    function addingNotes(inputText) {
        setNotes( (prevValue) => {
            return [...prevValue, inputText]
        })
    }

    function deletingNote(id){
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