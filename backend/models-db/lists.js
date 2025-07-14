import mongoose from "mongoose";
const listSchema= mongoose.Schema ({
    creator: {
        type: String
    },
    listType: {
        type: String
    },
    title: {
        type: String
    },
    body: {
        type: String
    } 

},
{
    timestamps: true, // it uses either createdAt or when update the existing ID the updatedAt time
}
);


 const ListModel = mongoose.model("ListModel", listSchema);
 export default ListModel;