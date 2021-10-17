import mongoose from "mongoose";
const notesSchema= mongoose.Schema ({
    title: {
        type: String
    },
    body: {
        type: String
    }, 
    
    createdAt: {
        type: Date,
        default: new Date()
    }
});

 const NotesItems = mongoose.model("NotesItems", notesSchema);
 export default NotesItems;