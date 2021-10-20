import React from 'react';
import { useSelector } from 'react-redux';
// import { createAppList } from '../../actions/postActions';



const AllLists = (props) => {

    const {addListItemBtn} = props;

console.log("props:",props);
    
    // const sortedNotes = notes.sort((a, b) => b.lastModified - a.lastModified);
    const posts = useSelector((state) => state.postReducer);
    console.log("state.postReducer-(Sidebar.7)",posts);
    //adding a sorting method to have the lastest note on top
   

    return (
        <div className="notes__sidebar">
            <div className="notes__sidebar-header">
                <h1>Notes</h1>
                <button type="button" className="notes__add" onClick={addListItemBtn} >Add a new note</button>
            </div>      
            <div className="notes__list">
                {/* {
                    return (
                        <div className={`notes__list-item ${note.id === activeNote && "notes__list-item--selected" } `}>
                    <div className="notes__small-title">
                    <h5>{}</h5>
                    <button type="button" className="notes__delete" onClick={()=> onNoteDelete()}>X</button>
                    </div>
                    <div className="notes__small-body">
                        <p>{}</p>
                    </div>
                    <div className="notes__small-updated">
                       <small>Last modified on {new Date().toLocaleString("de",{dateStyle: "medium", timeStyle: "short"})}</small> 
                    </div>
                </div>   
                    )
               } */}
                        
            </div>
    </div>
    );
}

export default AllLists;
