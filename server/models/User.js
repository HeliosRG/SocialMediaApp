import mongoose, { Schema } from "mongoose"

const UserSchema = new mongoose.Schema(
    {
        firstName:{
            type : String,
            require : true,
            min : 2,
            max : 50
        },
        lastName: {
            type : String,
            require : true,
            min : 2,
            max : 50
        },
        email: {
            type : String,
            require : true,
            max : 50,
            unique : true
        },
        password: {
            type : String,
            require : true,
            min : 6,
            max : 50
        },
        picturePath: {
            type : String,
            default : ""
        },
        friends: { 
            type : Array,
            default : []
        },
        location : String,
        occupation : String,
        viewedProfiles : Number,
        impressions : Number
    },
    {timestamps : true}
);

const User = mongoose.model("user",UserSchema);
export default User;