const express=require("express")
const router=express.Router()
const Controllers=require("../controller")

router.get("/",(req,res)=>{
    Controllers.studentController.getStudents(res)
})

router.post("/create",(req,res)=>{
    Controllers.studentController.createStudent(req.body,res)
})

//update Student route here
router.delete("/delete",(req,res)=>{
    Controllers.studentController.deleteStudent(req.body.res)
})

//update Student
router.put("/update",(req,res)=>{
    Controllers.studentController.updateStudent(req.body.res);
})

module.exports=router;