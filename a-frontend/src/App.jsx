import React from 'react';
import {useState} from "react";
import "./App.css";
import Main from "./components/Main.jsx";
import Sidebar from "./components/Sidebar.jsx";
import uuid from "react-uuid";


function App() {

  const [notes, setNotes] = useState([]);
  const [activeNote, setActiveNote] = useState(false); // activeNote is false there when notes are EMPTY...no activeNote!!! Main.jsx****

  const onNoteAdd = () => {
    const newNote = {
      id:uuid(), // id randommaker
      title: "Untitled note",
      body: "",
      lastUpdated:Date.now(),
    }

   setNotes([newNote, ...notes]);   

  };
  // updateing a note by id
  const onNoteUpdate = (updatedNote) => {
    const updatedNotesArray = notes.map((note) => {
      if(note.id === activeNote) {
        return updatedNote;
      }

      return note;
    });

    setNotes(updatedNotesArray);
  };

  // deleting a note
  const onNoteDelete = (idToDelete) => {
     setNotes(notes.filter((note) => note.id !== idToDelete));
  }

  // getting the active one
  const getActiveNote = () =>{
    return notes.find((note) => note.id === activeNote); /* */
  };




  return (
    <div className="App">
       <Sidebar notes = {notes} 
       onNoteAdd={onNoteAdd} 
       onNoteDelete={onNoteDelete}
       activeNote = {activeNote}
       setActiveNote = {setActiveNote}
       />

       <Main activeNote = {getActiveNote()} onNoteUpdate={onNoteUpdate}/> 
    </div>
  );
}

export default App;
