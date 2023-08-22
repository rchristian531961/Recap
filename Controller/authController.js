'use strict'

const bcrypt=require('bcrypt')

// Even though this is a controller for auth, we can still use the model for User
const Model = require('../Models')

const signUpUser=async(data,res)=>{
    //hash function
    const rounds=10; //no larger than 10
    const version="a"
    //create salt=hash
    const salt=await bcrypt.genSaltSync(rounds,version);
    //variable for original password
    const originalPassword=data.password;
    //hash password
    const hashedPassword=bcrypt.hashSync(originalPassword,salt)

    data.password=hashedPassword;

    //put in database here
    Model.User.create(data).then((data=>{
        data.password=originalPassword
        res.send({result:201, data:data})
    }))
    .catch(err=>{
        console.log("Error: ", err)
        throw err
    })
}

// All logins should be using this function to login by email and password
const loginUserByEmail = (req, res) => {
    const unhashedPassword = req.body.password
    const email = req.body.email
  
    // First, find the user in the database by their email
    // use the scope defined in the model on line #48
    Model.User.scope("withPassword").findAll({ where: {email: email}})
      .then((data) => {
        //If email exists in the database, pull the stored password (which is hashed)
        //and compare it to the payload from the request body
        if(data && bcrypt.compareSync(unhashedPassword, data[0].dataValues.password)){
          data[0].dataValues.password = undefined
          res.status(200).send({ success: true, data: data})
        }else {
          console.log('password is incorrect')
          // Obfuscate the response, don't let potential attackers know if they have the correct login email or username!
          // Use the payload key "success" to programmatically tell your application what to do next:
          // If (response.success === true) { show login success, allow access to protected routes }
          // else if (response.success === false) { show login error message, ask user to check username email and password and try again }
          // NOTE: these are boolean values, NOT strings (true vs "true")
          res.status(403).send({ success: false, data: "Wrong username or password!"})
        }
      })
      .catch(err => {
        console.log("Error:", err)
        throw err
      })
  }

//Assign Sections to Instructors (Foreign Key Implimentation
const assignSection=async (req,res)=>{

}

//Assign Students to Instructor (Foreign Key Implication)
const assignStudents=async(req,res)=>{

}

//
  
  module.exports = {
    signUpUser, loginUserByEmail
  }