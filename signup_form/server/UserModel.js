import mongoose from "mongoose";
import { Schema } from "mongoose";

const userSchema=new Schema({
    firstName:{
        type: String,
        required: true,
        min: 2,
        max: 50
    },
    lastName:{
        type:String,
        required:true,
        min:2,
        max:50
    },
    email:{
        type:String,
        required:true,
        max:50,
        unique:true
    },
    username:{
        type:String,
        require:true,
        max:50,
        unique:true
    },
    password:{
        type:String,
        required:true,
        min:5,
    },
    contact:{
        type:String,
        max:10,
        default:null
    }
},{timestamps:true});


const User=mongoose.model("userinfo",userSchema);

export default User;