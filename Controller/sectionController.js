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
    createSection,getSections
}