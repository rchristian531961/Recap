'use strict'
const User = require('./user')

//testing Section
const Section=require("./section");
//testing grades
const Grades=require("./grades")
//testing assignment
const Assignments=require("./assignments");
const Student = require('./student');

async function init() {
  //await the Section
  await Section.sync({alter:true})
  //await for Users
  // await User.sync({alter:true})
  //await for grades
  // await Grades.sync({alter:true})
  //await assignments
  await Assignments.sync({alter:true})
  //await classroom
  await Grades.sync({alter:true})
  await Student.sync({alter:true})
  await Section.sync({alter:true})
  await User.sync({alter:true})
}


//Create Tables First then implement Connections between tables
function initAssociation(){
   Section.hasMany(User,{foreignKey:"section_ids",onDelete:"CASCADE", onUpdate:"CASCADE", })
   Student.hasMany(Section,{foreignKey:"student_ids",onDelete:"CASCADE", onUpdate:"CASCADE",})
   Grades.hasMany(Student,{foreignKey:"grade_ids",onDelete:"CASCADE", onUpdate:"CASCADE",})
   Assignments.hasMany(Section,{foreignKey:"assignment_ids",onDelete:"CASCADE", onUpdate:"CASCADE",})
   Section.hasOne(Assignments,{foreignKey:"section_id",onDelete:"CASCADE", onUpdate:"CASCADE",})
   Assignments.hasMany(Section,{foreignKey:"assignment_ids",onDelete:"CASCADE", onUpdate:"CASCADE",})
   Assignments.hasOne(Grades,{foreignKey:"assignment_id",onDelete:"CASCADE",onUpdate:"CASCADE"})
}

try{
  init()
}catch(err){
  console.log(err)
}finally{
  initAssociation()
}

module.exports = {
  User,Section,Grades,Assignments,Student
}