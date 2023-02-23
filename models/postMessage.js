import mongoose from "mongoose";

const postSchema =  mongoose.Schema({
    title: String,
    message: String,
    creator: String,
    tags:[String],
    selectedFile: String,
    likeCount:{
        type: Number,
        default: 0
    },
    createdAt: {
        type: Date,
        default: new Date()
    },
});

const PostMessage = mongoose.model("PostMessage", postSchema);

export default PostMessage;































/*import mongoose from "mongoose";


const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        required: true,
    },
}); 

const userModel = mongoose.model("users", UserSchema);
export default userModel;*/