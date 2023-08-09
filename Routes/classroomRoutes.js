const express=require("express")
const router=express.Router()
const Controllers=require("../controller")

router.get("/",(req,res)=>{
    Controllers.classroomController.getClassroom(res)
})

router.post("/create",(req,res)=>{
    Controllers.classroomController.createClassroom(req.body,res)
})

module.exports=router;