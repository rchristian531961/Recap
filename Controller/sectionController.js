'use strict'

const Models=require('../Models')

//gets all sections
const getSections=(res)=>{
    Models.Section.findAll({})
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

//Delete Sections
const deleteSection = (req, res) => {
    Models.Section.destroy( {where: {id: req.params.id}})
      .then((data) => {
        res.send({result: 201, data: data})
      })
      .catch(err => {
        console.log("Error:", err)
        throw err
      })
  }


//Get section data by ID
const getSectionsById=(req,res)=>{
    Models.Section.findAll({where:{id:req.params.id}}
        .then((data)=>{
            res.send({result:200,data:data})
        }))
        .catch(err=>{
            console.log("Error:", err)
            throw err;
        })
}

//update Section
const updateSection=(req,res)=>{
    Models.Section.update(req.body,{where:{id:req.params.id}}
        .then((data)=>{
            res.send({result:201,data:data})
        })
        .catch(err=>{
            console.log("Error:",err)
            throw err
        }))
}

const createSection=async(data,res)=>{
    Models.Section.create(data)
    .then((data)=>{
        res.send({result:201, data:data})
    })
    .catch(err=>{
        console.log("Error: ", err)
        throw err
    })
}

module.exports={
    createSection,getSections,deleteSection,updateSection, getSectionsById
}