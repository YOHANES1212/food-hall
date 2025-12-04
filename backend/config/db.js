import mongoose from "mongoose";

export const connectDB = async () =>{
    await mongoose.connect(
      "mongodb+srv://TieriEnju:Jonathan1809=@cluster0.8d7lcsm.mongodb.net/foodhall"
    ).then(() => console.log("MongoDB connected successfully"));
} 