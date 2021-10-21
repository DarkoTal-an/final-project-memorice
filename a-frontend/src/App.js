import React from 'react';
import {useState, useEffect} from "react";
import "./App.css";
import InputForm from "./components/Lists/MainInputForm.jsx";
import AllLists from "./components/Lists/AllListsSidebar.jsx";
// import uuid from "react-uuid";

import {useDispatch} from "react-redux";
import {createAppList, getAppLists, updateList, } from "./actions/postActions.js" // dispatching actions


const App = () => {
  const [listData, setListData] = useState({
    title: "",
    body: "",
    lastModified: "",
  });

  const [currentId, setCurrentId] = useState(null);

  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(getAppLists())   // firing in postActions
  }, [dispatch]);

  const addListItemBtn = (e) => {
    e.preventDefault();
    if(currentId) {
      dispatch(updateList(currentId, listData))
    }else {
      dispatch(createAppList(listData))
    }
    clearing();
}

const clearing = () =>{
  setCurrentId(null);
  setListData({
    title: "",
    body: "",    
     
  })
};

  return (
    <div className="App">
       <AllLists addListItemBtn={addListItemBtn}
       setCurrentId={setCurrentId}
       currentId={currentId}
     
       />

       <InputForm setListData={setListData} listData={listData}
       setCurrentId={setCurrentId}
       currentId={currentId}
       
        /> 
    </div>
  );
}

export default App;
