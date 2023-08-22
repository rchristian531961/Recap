const express=require('express')
const router=express.Router()
const Controllers=require("../controller")

router.post("/signup",(req,res)=>{
    Controllers.authController.signUpUser(req.body,res)
})

router.get("/login",(req,res)=>{
    Controllers.authController.loginUserByEmail(req.body,res)
})

router.post("/assign/section",(req,res)=>{
    Controllers.authController.assignSection(req.body,res)
})
module.exports=router;