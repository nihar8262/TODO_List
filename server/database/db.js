import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();

const password = process.env.DB_PASSWORD;
const username = process.env.DB_USERNAME;

export const Connection = () => {

    const DATABASE_URL=`mongodb+srv://${username}:${password}@cluster0.lzjne.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

    mongoose.connect(DATABASE_URL);

    mongoose.connection.on("connected",() =>{
        console.log("Database connected successfully");
    })

    mongoose.connection.on("disconnected",()=>{
        console.log("Database disconnected");
    })

    mongoose.connection.on("error",() =>{
        console.log("Error while connecting to the database");
    })
}