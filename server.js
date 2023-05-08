import  express from "express";
import { engine } from 'express-handlebars';
import { Mongoose } from "mongoose";

import dotenv from "dotenv"// to import the 
dotenv.config();            //           data from env file
Mongoose.connect(process.env.mongoConnectionUrl)
const app = express();
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './templates');

app.get('/', (req, res) => {
    res.render('home');
});


app.listen(process.env.port,()=>{
    console.log(`the application run at http://localhost:${process.env.port}`)
})
