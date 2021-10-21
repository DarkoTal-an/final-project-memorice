import React from 'react';
import { useSelector , useDispatch} from 'react-redux';
import { deleteAListAction } from '../../actions/postActions';
// import { createAppList } from '../../actions/postActions';



const AllLists = ({addListItemBtn, currentId, setCurrentId }) => {

    const activeList = currentId;   
    const setActiveList = setCurrentId;   

    const dispatch = useDispatch();

    const lists = useSelector((state) => state.postReducer);
    // console.log("state.postReducer-(Sidebar.7)",lists);

    //adding a sorting method to have the latest note on top
    const sortedLists = lists.sort((a, b) => Date.parse(b.createdAt) - Date.parse(a.createdAt));
    
   
    const onListDelete =(_id)=> {       
       dispatch(deleteAListAction(_id))
   }



    return (
        <div className="notes__sidebar">
            <div className="notes__sidebar-header">
                <h1>Notes</h1>
                <button type="button" className="notes__add" onClick={addListItemBtn} >{currentId? `Edit this Note`:`Add a new Note`}</button>
            </div>      
            <div className="notes__list">
                {sortedLists.map((list)=> {                    
                    return (
                        <div onClick={()=> setActiveList(list._id)} className={`notes__list-item ${list._id ===activeList && "notes__list-item--selected" } `}>
                    <div className="notes__small-title">
                    <h5>{list.title}</h5>
                    <button type="button" className="notes__delete" onClick={()=> onListDelete(list._id)}>X</button>
                    </div>
                    <div className="notes__small-body">
                        <p>{list.body}</p>
                    </div>
                    <div className="notes__small-updated">
                       <small>Last modified on {new Date(list.updatedAt).toLocaleString("de",{dateStyle: "medium", timeStyle: "short"})}</small> 
                    </div>
                </div>   
                    )
               })}
                        
            </div>
    </div>
    );
}

export default AllLists;
