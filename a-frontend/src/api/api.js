import axios from "axios";
//are used in postActions.js
//connecting to the backend via axios library

const url = "http://localhost:5000/post";


//fetching a post or many using axios lib from backend controllers
export const fetchPosts = ()=> axios.get(url);

//creating, sending to store and saving a new one
export const createPost = (newPost)=> axios.post(url, newPost);

export const updateList = (_id,updateList)=> axios.patch(`${url}/${_id}`, updateList);

//delete API
export const deleteAPost = (_id)=> axios.delete(`${url}/${_id}`);

// //counting likes Api
// export const countLikes = (id)=> axios.patch(`${url}/${id}/likepost`);





