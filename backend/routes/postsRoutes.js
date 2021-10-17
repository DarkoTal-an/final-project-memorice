import express from "express";
//getting the callbacks
import {getAllNotes, createPost, updateThePost, deleteAPost} from "../controllers/postsControllers.js";//very important to add the file extension!!

const router = express.Router();

//http://localhost:5000/post
router.get("/", getAllNotes);
router.post("/", createPost);

//updateing only the part of the item 
router.patch("/:id", updateThePost);

//delete route
router.delete("/:id", deleteAPost);



export default router;