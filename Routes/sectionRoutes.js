const express=require('express')
const router=express.Router()
const Controllers=require("../controller")

router.get("/",(req,res)=>{
    Controllers.sectionController.getSections(res)
})

router.post("/create",(req,res)=>{
    Controllers.sectionController.createSection(req.body,res)
})

module.exports=router