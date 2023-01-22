import React from "react";
// import DeleteIcon from '@mui/icons-material/Delete';

function Note(props){

    // function deleteNote(){
    //     console.log("hn kr diya delete!!!");
    // }

    return(
        <div className="note">
            <h1>{props.title}</h1>
            <p>{props.para}</p>
            <button onClick={()=>{
                props.onCheckedDelete(props.id);
            }} >DELETE</button>
        </div>
    );
}


export default Note;
