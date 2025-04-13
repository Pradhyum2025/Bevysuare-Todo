import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/connectDB.js';
import bodyParser from 'body-parser';
import cors from 'cors';
import todoRoutes from './routes/todoRoute.js';


//load env files
dotenv.config();
const app = express();

//parse json data from body
app.use(cors({
  origin:'http://localhost:3000',
  credentials:true
}));



app.use(bodyParser.json({ limit: "50mb" })); // Increase JSON payload size
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));


//connect with DB
connectDB();


// routes
app.use('/api/v1/todo',todoRoutes);


const PORT  = process.env.PORT || 4040;
app.listen(PORT,()=>{
  console.log(`Port has listen at port number ${PORT} `)
})

