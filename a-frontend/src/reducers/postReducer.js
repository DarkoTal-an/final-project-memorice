import {FETCH_ALL, CREATE, UPDATE, DELETE} from "../constants/actionTypes.js";


//parameters are: initialState and actions
const postReducer = (posts=[], action)=> {
    switch (action.type) {
        case FETCH_ALL:
            return action.payload;      // uses data from the FETCH_ALL action type-> this goes into Store cloud
        case CREATE:
            return [...posts, action.payload];
        case UPDATE:
            return posts.map((post)=>
                post._id === action.payload._id ? action.payload : post) // returns a new array if the existing list equals the NEW one-saves the new one and IF not then the existing list
        case DELETE:
            return posts.filter((post)=> post._id !== action.payload);
            
        default:
            return posts;
    }
};

export default postReducer;