import mongoose from "mongoose";
import User from "./UserModel.js";

import dotenv from "dotenv";
dotenv.config();

mongoose.connect(process.env.MONGO_URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName:"SignupForm"
})
.then(() => {
    console.log('Connected to the MongoDB cluster and specific database!');
})
.catch((error) => {
    console.error('Error connecting to the MongoDB cluster:', error);
});




// const user1= new User({
//     firstName:"Aniket",
//     lastName:"Kshirsagar",
//     email:"kshirsagaraniket1010@gmail.com",
//     password:"as;ldkjfalsd"
// });


// user1.save().then((user)=>{
//     console.log("saved user",user);
// }).catch((err)=>{
//     console.log("User cannot be saved!!!!",err)
// })


