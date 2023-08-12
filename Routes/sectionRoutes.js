const express=require('express')
const router=express.Router()
const Controllers=require("../controller")

router.get("/",(req,res)=>{
    Controllers.sectionController.getSections(res)
})

router.post("/create",(req,res)=>{
    Controllers.sectionController.createSection(req.body,res)
})

//remove section route here
router.delete("/delete",(req,res)=>{
    Controllers.sectionController.deleteSection(req,res)
})

//update section route here
router.put("/update",(req,res)=>{
    Controllers.sectionController.updateSection(req,res)
})
module.exports=router