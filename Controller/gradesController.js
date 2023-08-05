'use strict' 

const Models=require('../Models')

//get all grades
const getGrades=(res)=>{
    Models.Grades.findAll({})
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

const createGrades=async(data,res)=>{
    Models.Grades.create(data)
    .then((data)=>{
        res.send({result:201,data:data})
    })
    .catch(err=>{
        console.log("Error: ", err)
        throw err
    })
}

module.exports={
    createGrades,getGrades
}