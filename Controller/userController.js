'use strict'
//establish bcrypt here
const bcrypt=require('bcrypt')

const Models=require('../Models')

const getUsers=(res)=>{
    Models.User.findAll({}).then((data)=>{res.send({
        result:200,data:data}
    )})
    .catch(err=>{
        console.log("ERROR: ",err)
        throw err
    })
}

module.exports={
    getUsers
}