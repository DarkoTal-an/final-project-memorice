import mongoose  from "mongoose";

//the model to be saved in DB
// import NotesItems from "../models-db/notes.js";
import ListModel from "../models-db/lists.js";

export const getAllNotes = async(req,res,next)=> {
    // console.log("getting all lists");
    try {
        const lists = await ListModel.find();
        res.status(200).send(lists);
        
    } catch (error) {
        // res.status(404).json("Something went wrong when getting the Lists...");
        res.status(404).json({error:error});
        
    }
};
export const createPost = async (req,res)=> {
    // console.log("List creating);
    // res.send("List creating!")
    
    try {
        const list= req.body;
        const newList =new ListModel({...list, createdAt: new Date().toISOString()});
        await newList.save();
        res.status(200).json(newList);
        
    } catch (error) {
        // res.status(404).json({msg:error});
        res.status(404).json({
            msg:error,
            msg2:"Sth wrong in postsControllers!"});
    }
};
//adding an "_id" to be able to make changes + "list" as the whole body input
export const updateThePost = async (req,res)=> {
        
    try {
        const {id: _id} = req.params
        const list= req.body;

        if(!mongoose.Types.ObjectId.isValid(_id)) {
            return res.status(404).send("No list with this ID found!")
        }
        const upDatedList = await ListModel.findByIdAndUpdate(_id, {...list, _id}, {new:true})
       
        res.status(200).json(upDatedList); //upDatedList !!!
        
    } catch (error) {
        // res.status(404).json({msg:error});
        res.status(404).json({
            msg:error,
            msg2:"Sth wrong in postControllers!"});
    }
};


//deleting a chosenByID post 

export const deleteAPost = async(req,res)=> {
    // console.log("Req.params:",req.params);
    try {
        const { id:_id} = req.params;
        if(!mongoose.Types.ObjectId.isValid(_id)) {
            return res.status(404).send("No list with this ID found!")
        }
        await ListModel.findByIdAndRemove(_id);
       
        res.status(200).json({msg: "A list has been DELETED"}); 
        
    } catch (error) {
        // res.status(404).json({msg:error});
        res.status(404).json({
            msg:error,
            msg2:"Sth wrong in postControllers!"});
    }
};

//counting items for shopping list

// export const countItems = async (req,res)=> {
        
//     try {
//         const {id: _id} = req.params
        

//         if(!mongoose.Types.ObjectId.isValid(_id)) {
//             return res.status(404).send("No post with this ID found!")
//         }

//         const anItem = await NotesItems.findById(_id)
//         const itemCount = await NotesItems.findByIdAndUpdate(
//             _id, 
//             {likeCount: aPost.likeCount+1},
//             {new:true})
       
//         res.status(200).json(itemCount);//the number of items in item box
        
//     } catch (error) {
//         // res.status(404).json({msg:error});
//         res.status(404).json({
//             msg:error,
//             msg2:"Sth wrong in postControllers!"});
//     }
// };