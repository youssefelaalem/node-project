import  express from "express";
import {engine} from 'express-handlebars';
import mongoose from "mongoose";
import dotenv from "dotenv"// to import the 
dotenv.config();            //           data from env file
import department_routes from "./routes/department.js";
import subjects_routes from "./routes/subject.js";
import router_admin from "./routes/admin_jobs.js";

mongoose.connect(process.env.mongoConnectionUrl,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    family: 4,
  })
const app = express();
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './templates');

app.use(express.urlencoded({extended:true}))//to make the availability to enter the data at the form and this data i can recive it to critical method
app.use(express.static('public'))
app.use('/admin',department_routes)
app.use('/admin',subjects_routes)
app.use('/admin',router_admin)



app.listen(process.env.port,()=>{
    console.log(`the application run at http://localhost:${process.env.port}`)
})
