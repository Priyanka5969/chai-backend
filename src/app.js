import express from "express";
import cookieParser from "cookie-parser";
import cors from 'cors';
const app = express();

app.use(cors(
    {
        origin: process.env.CORS_ORIGIN,
        credentials: true
    }
));

app.use(express.json({limit: "16kb"}));
app.use(express.static("public"));
app.use(express.urlencoded({extended:true, limit:"16kb"}));
app.use(cookieParser());


import userRouter from "./routes/user.routes.js";

//tell versioning of api i.e v1
app.use("/api/v1/user", userRouter); //middleware passsing control to that controller

export {app};