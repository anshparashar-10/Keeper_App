import React,{useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
// import notes from "../notes";
import CreateArea from "./CreateArea"


function App() {
  const [notes, setNotes] = useState([]);

  function addNote(newNote) {
    // console.log(newNote);
    setNotes(prevNotes => {
      return [...prevNotes, newNote];
    })
  }

  function deleteNote(id){
    setNotes((prevNotes)=>{
      return prevNotes.filter((Dnotes, index)=>{
        return index != id;
      });
    });
  }

  return (
    <div>
      <Header />

      <CreateArea onClickAdd = {addNote}/>
      {notes.map((noteItems,index) => {
        return (
          <Note 
            key = {index}
            id = {index} 
            title ={ noteItems.title} 
            para ={ noteItems.content} 
            onCheckedDelete={deleteNote}
          />
        );
      })}
      {/* <Note key={1} title="Note title" content="Note content" /> */}
      <Footer />
    </div>
  );
}


export default App;
