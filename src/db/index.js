import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDb = async() => {
   try{
    console.log(process.env.MONGO_URL,"process.env.MONGO_URL");
    await mongoose.connect(`${process.env.MONGO_URL}`);
    console.log('connected');
   }catch(err){
    console.log("ERR:", err);
    process.exit(1);
   }
}

export default connectDb;