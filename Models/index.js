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
  await Section.sync({force:true})
  //await for Users
  await User.sync()
  //await for grades
  await Grades.sync()
  //await assignments
  await Assignments.sync()
  //await classroom
  await Student.sync()

  // initAssociation();

  //Associations
  // Section.hasMany(User,{foreignKey:"section_ids"})
  // User.hasMany(Section,{foreignKey:"section_ids"})
  // Section.belongsTo(User,{foreignKey:"section_ids"})
}


//Create Tables First then implement Connections between tables
function initAssociation(){
  Section.hasMany(User,{foreignKey:"section_ids"})
  Student.hasMany(Section,{foreignKey:"student_ids"})
  Grades.hasMany(Student,{foreignKey:"grades_id"})
  Assignments.hasMany(Section,{foreignKey:"assignment_ids"})
  Assignments.hasOne(Grades,{foreignKey:"assignment_id"})
  Section.hasOne(Assignments,{foreignKey:"section_id"})
}

init()

module.exports = {
  User,Section,Grades, Assignments,Student
}