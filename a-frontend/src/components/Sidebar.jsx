import React from 'react'

const Sidebar = ({notes, onNoteAdd, onNoteDelete, activeNote, setActiveNote}) => {
    //adding a sorting method to have the lastest note on top
    const sortedNotes = notes.sort((a, b) => b.lastModified - a.lastModified);

    return (
        <div className="notes__sidebar">
            <div className="notes__sidebar-header">
                <h1>Notes</h1>
                <button type="button" className="notes__add" onClick={onNoteAdd}>Add a new note</button>
            </div>      
            <div className="notes__list">
                {sortedNotes.map((note) => {
                    return (
                        <div onClick={ ()=> setActiveNote(note.id)} className={`notes__list-item ${note.id === activeNote && "notes__list-item--selected" } `}>
                    <div className="notes__small-title">
                    <h5>{note.title}</h5>
                    <button type="button" className="notes__delete" onClick={()=> onNoteDelete(note.id)}>X</button>
                    </div>
                    <div className="notes__small-body">
                        <p>{note.body}</p>
                    </div>
                    <div className="notes__small-updated">
                       <small>Last modified on {new Date(note.lastUpdated).toLocaleString("de",{dateStyle: "medium", timeStyle: "short"})}</small> 
                    </div>
                </div>   
                    )
                })}
                        
            </div>
    </div>
    );
}

export default Sidebar
