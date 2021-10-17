import mongoose  from "mongoose";

import NotesItems from "../models-db/notes.js";

export const getAllNotes = async(req,res,next)=> {
    res.send("Hello World!");
    try {
        const posts = await NotesItems.find();
        res.status(200).send(posts);
        
    } catch (error) {
        // res.status(404).json("Something went wrong when getting the Posts...");
        res.status(404).json({error:error});
        
    }
};
export const createPost = async (req,res)=> {
    res.send("Notes creating!")
    
    try {
        const post= req.body;
        const newPost =new NotesItems({...post, createdAt: new Date().toISOString()});
        await newPost.save();
        res.status(200).json(newPost);
        
    } catch (error) {
        // res.status(404).json({msg:error});
        res.status(404).json({
            msg:error,
            msg2:"Sth wrong in postsControllers!"});
    }
};
//adding an "_id" to be able to make changes + "post" as the whole body input
export const updateThePost = async (req,res)=> {
        
    try {
        const {id: _id} = req.params
        const post= req.body;

        if(!mongoose.Types.ObjectId.isValid(_id)) {
            return res.status(404).send("No post with this ID found!")
        }
        const upDatedPost = await NotesItems.findByIdAndUpdate(_id, {...post, _id}, {new:true})
       
        res.status(200).json(upDatedPost); //upDatedPost !!!
        
    } catch (error) {
        // res.status(404).json({msg:error});
        res.status(404).json({
            msg:error,
            msg2:"Sth wrong in postControllers!"});
    }
};


//deleting a chosenByID post 

export const deleteAPost = async(req,res)=> {
    try {
        const {id: _id} = req.params;
        if(!mongoose.Types.ObjectId.isValid(_id)) {
            return res.status(404).send("No post with this ID found!")
        }
        await NotesItems.findByIdAndRemove(_id);
       
        res.status(200).json({msg: "A post has been DELETED"}); 
        
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