import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import fileUpload from "express-fileupload";
import userRouter from"./routes/useRouter.js";
import applicationrouter from "./routes/applicationrouter.js"
import jobRouter from"./routes/jobrouter.js"
import {databaseConnection, dbConnection} from "./database/dbConnection.js"
import {  errorMiddleware} from "./middlewares/error.js"
const app = express()

dotenv.config({path:"./config/config.env"})
app.use(cors({
    origin: process.env.FRONTEND_URL,
    method: ["GET","POST","PUT","DELETE"],
    credentials: true,

}))
app.use(cookieParser()); // it should be before tge url.json and url.encoded because it  will first create cookie for the authorization
app.use(express.json()); // it allows json to pass
app.use(express.urlencoded({ extended :true})); // it converts  required data into the json format 
app.use(express.fileUpload({ 
    useTempfiles: true,
    useFileDIr:"/temp/",
}));
app.use('/api/v1/user',userRouter);
app.use('/api/v1/applicationrouter',applicationrouter);
app.use('/api/v1/jobRouter',jobRouter);
dbConnection();
app.use('errMiddleware')
export default app;


