'use strict' 

const Models=require('../Models')

//get all grades
const getClassroom=(res)=>{
    Models.Classroom.findAll({})
    .then((data)=>{
        res.send({
            result:200, data:data
        })
    })
    .catch(err=>{
        console.log("Error: ", err)
        throw err
})
}

const createClassroom=async(data,res)=>{
    Models.Classroom.create(data)
    .then((data)=>{
        res.send({result:201,data:data})
    })
    .catch(err=>{
        console.log("Error: ", err)
        throw err
    })
}

module.exports={
    createClassroom,getClassroom
}