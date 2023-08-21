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






