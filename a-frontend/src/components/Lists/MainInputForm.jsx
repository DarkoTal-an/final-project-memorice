import React, {useState} from "react";




const InputForm = ({listData, setListData}) => {

    // const [listData, setListData] = useState({
    //   title: "",
    //   body: "",
    //   lastModified: "",
    // });
  
  

    // inital activenote is "false" therefore we add this element
    // if(! activeNote) return <div className="no-active-note">No note selected!</div>

  return (
    <div className="notes__preview">
      <input
        type="text"
        name="title"
        className="notes__title"
        value={listData.title} onChange={(e)=> setListData({...listData ,title: e.target.value})}
        placeholder="Title"
        autoFocus
      />
      <textarea
        name="body"
        className="notes__body"
        placeholder="Take notes here..."
        value={listData.body} onChange={(e)=> setListData({...listData ,body: e.target.value})}
        autoFocus
      ></textarea>
    </div>
  );
};

export default InputForm;
