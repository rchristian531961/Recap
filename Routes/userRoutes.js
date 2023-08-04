const express=require('express')
const router=express.Router()
const Controllers=require("../controller")

//localhost:500/api/users <<---Base Route
//localhost:/5000/api/users/
router.get("/",(req,res)=>{
    Controllers.userController.getUsers(res)
})

module.exports=router;