import React from "react";
import Fab from '@material-ui/core/Fab';
import DeleteIcon from '@material-ui/icons/Delete';

function Note(props){

    function handleClick(){
        console.log(props.id);
        props.onDelete(props.id, props.title);
    }
    return (
        <div className="note">
            <h1>{props.title}</h1>
            <p>{props.content}</p>
            <Fab onClick={handleClick}>
                <DeleteIcon />
            </Fab>
        </div>
    )
}

export default Note;