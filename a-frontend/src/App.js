import React from 'react';
import {useState, useEffect} from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"

import InputForm from "./components/Lists/MainInputForm.jsx";
import AllLists from "./components/Lists/AllListsSidebar.jsx";
import Footer from "./components/Footer/Footer.jsx";

import {useDispatch} from "react-redux";
import {createAppList, getAppLists, updateList} from "./actions/postActions.js" // dispatching actions
import Navbar from './components/Navbar/Navbar.jsx';


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
      dispatch(updateList(currentId, listData));
    }else if(inputFieldValidation()) {
      dispatch(createAppList(listData));
    }
    clearing(); 
}

 const inputFieldValidation = () =>{
    
    if (! currentId && listData.title === "") {
      document.getElementsByClassName( "errorMessage" )[0].style.visibility = "visible";
      document.getElementsByClassName( "errorMessage" )[0].innerHTML = "Please Fill out this field";
      
      return false;
      } 
      return true;
    
  }

const clearing = () =>{
  setCurrentId(null);  
  setListData({
    title: "",
    body: "",      
  });
};

 



  return (
  
    <div className=".container">
      <Navbar />
      <div className="notes">        
         <AllLists addListItemBtn={addListItemBtn}
         setCurrentId={setCurrentId}
         currentId={currentId}
         setListData={setListData} listData={listData}
         />
         <InputForm setListData={setListData} listData={listData}
         setCurrentId={setCurrentId}
         currentId={currentId}
          />
      </div>        
      <Footer />
     </div>
    
  );
}

export default App;
