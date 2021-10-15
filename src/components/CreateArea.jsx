import React, { useState } from "react";
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Zoom from '@material-ui/core/Zoom';

function CreateArea(props){
    
    const [isExpanded, setExpansion] = useState(false);

    function handleExpansion(){
        setExpansion(true);
    }

    const [inputText, setInputText] = useState({
        title: "",
        content: ""
    });

    function handleChange(event){
        const {name, value} = event.target;

        setInputText( (prevValue) =>{
            return {
                ...prevValue,
                [name] : value
            }
        })
    }

    function handleClick(event){
        props.onAdd(inputText);

        setInputText();
        event.preventDefault();

    }

    return(
    <div>
      <form className="create-note">
        {isExpanded? <input 
        onChange={handleChange} 
        name="title" 
        placeholder="Title" /> : null }
        
        <textarea 
        onChange={handleChange} 
        onClick={handleExpansion} 
        name="content" 
        placeholder="Make a note..." 
        rows = {isExpanded? "3": "1"} />

        <Zoom in={isExpanded}>
        <Fab onClick={handleClick}>
            <AddIcon />
        </Fab>
        </Zoom>
      </form>
    </div>
    )
}

export default CreateArea;