import express from "express"
import cors from "cors"
import { connectDB } from "./config/db.js"
import foodRouter from "./routes/foodRoute.js"
import userRouter from "./routes/userRoute.js"
import 'dotenv/config'

//app config
const app=express()
const port=4000

//middleware
app.use(express.json())
app.use(cors())

//db Connection
connectDB();

//api EndPoints
app.use("/api/food",foodRouter)
app.use("/images",express.static('uploads'))
app.use("/api/user",userRouter)

app.get("/",(req,res)=>{
    res.send("API Working")
})

app.listen(port,()=>{
    console.log(`Server Started On http://localhost:${port}`)
})

//mongodb+srv://ravidu:Ravidu123@cluster0.zk2fm3t.mongodb.net/?