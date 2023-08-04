const express=require('express')
const router=express.Router()
const Controllers=require("../controller")

router.post("/signup",(req,res)=>{
    Controllers.authController.signUpUser(req.body,res)
})

module.exports=router;