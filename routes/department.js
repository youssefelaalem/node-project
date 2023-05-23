import { Router } from "express";
import db_department from "../models/db_department.js";

const router = new Router();
router.get('/departments',(req,res)=>{
    res.render('add_department/all')
})
router.get('/create_department', async(req,res)=>{
    await db_department.create(
        {
            name:'Computer Science',
            code:'CS'
        })
    await db_department.create(
            {
                name:'Information Systems',
                code:'IS'
            })
    await db_department.create(
         {
                name:'Informaton Technology',
                code:'IT'
             })
             res.send("added")
})


export default router
