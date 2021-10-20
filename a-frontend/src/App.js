import React from 'react';
import {useState, useEffect} from "react";
import "./App.css";
import InputForm from "./components/Lists/MainInputForm.jsx";
import AllLists from "./components/Lists/AllListsSidebar.jsx";
// import uuid from "react-uuid";

import {useDispatch} from "react-redux";
import {createAppList, getAppLists} from "./actions/postActions.js" // dispatching actions


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
    dispatch(createAppList(listData))
}



  return (
    <div className="App">
       <AllLists addListItemBtn={addListItemBtn}
     
       />

       <InputForm setListData={setListData} listData={listData}
        /> 
    </div>
  );
}

export default App;
