import React, {useState} from "react";


const Main = ({ activeNote, onNoteUpdate }) => {

    // const [postData, setPostData] = useState();
  
    const onEditInputField= (key, value) => {
        onNoteUpdate( {
            ...activeNote, // id 
            [key]: value,   // EITHER TITLE OR BODY /OR BOTH WILL BE UPDATED BY id
            lastUpdated: Date.now()
        })
    };

    // inital activenote is "false" therefore we add this element
    if(! activeNote) return <div className="no-active-note">No note selected!</div>

  return (
    <div className="notes__preview">
      <input
        type="text"
        name="title"
        className="notes__title"
        value={activeNote.title} onChange={(e)=> onEditInputField("title", e.target.value)}
        placeholder="Title"
        autoFocus
      />
      <textarea
        name="body"
        className="notes__body"
        placeholder="Take notes here..."
        value={activeNote.body} onChange={(e)=> onEditInputField("body", e.target.value)}
        autoFocus
      ></textarea>
    </div>
  );
};

export default Main;
