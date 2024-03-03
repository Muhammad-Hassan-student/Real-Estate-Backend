import mongoose from "mongoose";
import colors from "colors";
import dotenv from 'dotenv'
dotenv.config()

// const MONGO_URL=process.env.MONGO_URL);
const connecDb=async () =>{
    try {
        const connect= await mongoose.connect(process.env.MONGO_URI);
        console.log(`MongoDb is connected successully`.bgYellow);
    } catch (error) {
        console.log(`Error in MongoDb ${error}`);
    }
}
export default connecDb;