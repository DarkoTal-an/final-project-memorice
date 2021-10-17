import React from "react";

const Main = ({ activeNote, onNoteUpdate }) => {
    const onEditInputField= (key, value) => {
        onNoteUpdate( {
            ...activeNote,
            [key]: value,   // EITHER TITLE OR BODY /OR BOTH WILL BE UPDATED BY id
            lastUpdated: Date.now()
        })
    };


    if(! activeNote) return <div className="no-active-note">No note selected!</div>

  return (
    <div className="notes__preview">
      <input
        type="text"
        className="notes__title"
        value={activeNote.title} onChange={(e)=> onEditInputField("notes__title", e.target.value)}
        placeholder="Title"
        autoFocus
      />
      <textarea
        
        className="notes__body"
        placeholder="Take notes here..."
        value={activeNote.body} onChange={(e)=> onEditInputField("notes__body", e.target.value)}
        autoFocus
      ></textarea>
    </div>
  );
};

export default Main;
