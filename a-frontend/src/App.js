import React from 'react';
import {useState, useEffect} from "react";
import "./App.css";
import Main from "./components/Notes/Main.jsx";
import Sidebar from "./components/Notes/Sidebar.jsx";
import uuid from "react-uuid";

import {useDispatch} from "react-redux";
import {getAppPosts} from "./actions/postActions.js" // dispatching actions


const App = () => {

  const dispatch = useDispatch();

  const [notes, setNotes] = useState(
    localStorage.notes ? JSON.parse(localStorage.notes) : []
  ); // ON REFRESH/LOAD either an empty arras or the all saved data from the storage
  const [activeNote, setActiveNote] = useState(false); // activeNote is false there when notes are EMPTY...no activeNote!!! Main.jsx****

  useEffect(() => {
    // localStorage.setItem("notes",JSON.stringify(notes));
    dispatch(getAppPosts())   // firing in postActions
  }, [dispatch]);

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
    console.log(updatedNotesArray);
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

       <Main activeNote = {getActiveNote()}
        onNoteUpdate={onNoteUpdate}/> 
    </div>
  );
}

export default App;
