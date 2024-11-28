import mongoose from "mongoose";

export const connectDB=async()=>{
    await mongoose.connect('mongodb+srv://ravidu:Ravidu123@cluster0.zk2fm3t.mongodb.net/food-web').then(()=>console.log("DB Connected"));
}