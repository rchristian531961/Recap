const express=require("express")
const router=express.Router()
const Controllers=require("../controller");

router.get("/",(req,res)=>{
    Controllers.assignmentController.getAssignments(res)
})

router.post("/create",(req,res)=>{
    Controllers.assignmentController.createAssignments(req.body,res)
})

//remove assignments route here


module.exports=router;