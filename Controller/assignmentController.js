'use strict'

const Models=require("../Models")

//get All assignments
const getAssignments=(res)=>{
    Models.Assignments.findAll({})
    .then((data)=>{
        res.send({
            result:200, data:data
        })
    })
    .catch(err=>{
        console.log("Error: ",err)
        throw err
    })
}

//Delete Assignment Controller
const deleteAssignment = (req, res) => {
    Models.Assignments.destroy( {where: {id: req.params.id}})
      .then((data) => {
        res.send({result: 201, data: data})
      })
      .catch(err => {
        console.log("Error:", err)
        throw err
      })
  }

//getAssignmentByID
const getAssignmentById=(req,res)=>{
    Models.Assignments.findAll({where:{id:req.params.id}})
    .then((data)=>{
        res.send({result:200,data:data})
    })
    .catch(err=>{
        console.log("Error:",err)
        throw err
    })
}

const createAssignments=async(data,res)=>{
    Models.Assignments.create(data)
    .then((data)=>{
        res.send({result:201, data:data})
    })
    .catch(err=>{
        console.log("Error: ", err)
        throw err
    })
}

module.exports={
    createAssignments,getAssignments,deleteAssignment,getAssignmentById
}