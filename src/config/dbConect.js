import mongoose from "mongoose";



mongoose.connect("mongodb+srv://alx:123@alura.ziwy8xt.mongodb.net/alura-node");


let db = mongoose.connection;


export default db;