import React, { useEffect} from "react";
import { useSelector } from 'react-redux';





const InputForm = ({listData, setListData, currentId}) => {

  const activeList = currentId;   
    // const setActiveList = setCurrentId;

  const listToUpdate = useSelector((state)=>
   activeList? state.postReducer.find((aList) => aList._id === activeList) : null
   )

   useEffect(() => {
     if(listToUpdate) {
       setListData(listToUpdate)
     }
     
   }, [listToUpdate])

    // if(! activeList) return <div className="no-active-note">No note selected!</div>

  return (
    <div className="notes__preview">
      <input
        type="text"
        name="title"
        className="notes__title"
        value={listData.title} onChange={(e)=> setListData({...listData ,title: e.target.value})}
        placeholder="Title"
        autoFocus
        required
      />
      <textarea
        name="body"
        className="notes__body"
        placeholder="Take notes here..."
        value={listData.body} onChange={(e)=> setListData({...listData ,body: e.target.value})}
        autoFocus
        required
      ></textarea>
    </div>
  );
};

export default InputForm;
