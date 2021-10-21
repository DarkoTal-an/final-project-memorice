import * as api from '../api/api.js';
import {FETCH_ALL, CREATE, UPDATE, DELETE} from "../constants/actionTypes.js";

//api.fetchPosts= means firing this functions!

// 2 arrows are cause Redux-thunk!
export const getAppLists= ()=> async(dispatch) => {
    try {
        const {data} = await api.fetchPosts();  // restructuring data/ fetches the data from api fetchPosts function
        dispatch({type: FETCH_ALL, payload:data})
    } catch (error) {
        console.log("getAppLists",error.message);
    }
};


export const createAppList= (post)=> async(dispatch) => {
    try {
        const {data} = await api.createPost(post);  // 
        dispatch({type: CREATE, payload:data})
    } catch (error) {
        console.log(error.message);
    }
}

//updateinf/editing a list/note
export const updateList= (_id, post)=> async(dispatch) => {
    try {
        const {data} = await api.updateList(_id, post);
        dispatch({type: UPDATE, payload:data })
    } catch (error) {
        // console.log(error.message);
        console.log("Client server conflict:",error.message);
    }
};

//deleting a list regarding it's ID and

export const deleteAListAction= (_id)=> async(dispatch) => {
    try {
        await api.deleteAPost(_id);
        dispatch({type: DELETE, payload:_id})
    } catch (error) {
        // console.log(error.message);
        console.log("Client server conflict:",error.message);
    }
};
