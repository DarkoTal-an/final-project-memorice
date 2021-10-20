import axios from "axios";
//are used in postActions.js
//connecting to the backend via axios library

const url = "http://localhost:5000/post";


//fetching a post or many using axios lib from backend controllers
export const fetchPosts = ()=> axios.get(url);

//creating, sending to store and saving a new one
export const createPost = (newPost)=> axios.post(url, newPost);

export const updatePost = (id,updatePost)=> axios.patch(`${url}/${id}`, updatePost);

//delete API
export const deleteAPost = (id)=> axios.delete(`${url}/${id}`);

// //counting likes Api
// export const countLikes = (id)=> axios.patch(`${url}/${id}/likepost`);





