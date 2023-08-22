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

//update grades
const updateGrades=(req,res)=>{
    Models.Grades.update(req.body,{where:{id:req.params.id}})
    .then((data)=>{
        res.send({result:201,data:data})
    }).catch(err=>{
        console.log("Error:",err)
        throw err
    })
}

//Get grades by ID here
const getGradesById=(res)=>{
    Models.Grades.findAll({where:{id:req.params.id}})
    .then((data)=>{
        res.send({result:200,data:data})
    })
    .catch(err=>{
        console.log("Error:",err)
        throw err
    })
}

//Delete Grades by Id
const deleteGrades=(req,res)=>{
    Models.User.destroy({where:{id:req.params.id}}).then(
        (data)=>{
            res.send({result:201,data:data})
        })
        .catch(err=>{
            console.log("Error:", err)
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
    createGrades,getGrades,updateGrades,getGradesById,deleteGrades
}