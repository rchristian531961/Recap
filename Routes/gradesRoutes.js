const express=require("express")
const router=express.Router()
const Controllers=require("../controller")

router.get("/",(req,res)=>{
    Controllers.gradesController.getGrades(res)
})

router.post("/create", (req,res)=>{
    Controllers.gradesController.createGrades(req.body,res)
})

//remove grades route here

module.exports=router;