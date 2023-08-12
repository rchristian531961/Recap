'use strict' 

const Models=require('../Models')

//get all grades
const getStudents=(res)=>{
    Models.Student.findAll({})
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

//Delete Students
const deleteStudent = (req, res) => {
    Models.Student.destroy( {where: {id: req.params.id}})
      .then((data) => {
        res.send({result: 201, data: data})
      })
      .catch(err => {
        console.log("Error:", err)
        throw err
      })
  }


//Update Students Information
const updateStudent = (req, res) => {
    Models.Student.update(req.body, { where: {id: req.params.id}})
      .then((data) => {
        res.send({result: 201, data: data})
      })
      .catch(err => {
        console.log("Error:", err)
        throw err
      })
  }

//Create Students
const createStudent=async(data,res)=>{
    Models.Student.create(data)
    .then((data)=>{
        res.send({result:201,data:data})
    })
    .catch(err=>{
        console.log("Error: ", err)
        throw err
    })
}

module.exports={
    createStudent,getStudents,updateStudent,deleteStudent
}