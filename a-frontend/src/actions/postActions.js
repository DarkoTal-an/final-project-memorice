import * as api from '../api/api.js';
import {FETCH_ALL, CREATE, UPDATE, DELETE} from "../constants/actionTypes.js";

//api.fetchPosts= means firing this functions!

// 2 arrows are cause Redux-thunk!
export const getAppPosts= ()=> async(dispatch) => {
    try {
        const {data} = await api.fetchPosts();  // restructuring data/ fetches the data from api fetchPosts function
        dispatch({type: FETCH_ALL, payload:data})
    } catch (error) {
        console.log(error.message);
    }
};


export const createAppPost= (post)=> async(dispatch) => {
    try {
        const {data} = await api.createPost(post);  // 
        dispatch({type: CREATE, payload:data})
    } catch (error) {
        console.log(error.message);
    }
}