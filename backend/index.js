import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import userRoute from "./routes/register.route.js";
import mongoose from "mongoose"


dotenv.config({});

const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());
app.use(cors());



// api's
app.use("/user", userRoute);

const PORT = process.env.PORT || 5001;
const database_url = "mongodb+srv://king:king123@cluster0.mfghu.mongodb.net/?retryWrites=true&w=majority&appName=cluster0"

mongoose.connect(database_url)
.then(() => {
    console.log('MongoDB connected successfully');
    app.listen(PORT, () => { 
        console.log(`Server running on port ${PORT}`) 
    });
})
.catch((err) => {
    console.error('MongoDB Connection Error:', err);
});

