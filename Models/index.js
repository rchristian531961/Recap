'use strict'
const User = require('./user')

//testing Section
const Section=require("./section");
//testing grades
const Grades=require("./grades")
//testing classroom
const Classroom=require("./classroom")
//testing assignment
const Assignments=require("./assignments")

async function init() {
  await User.sync()

  //await the Section
  await Section.sync()
  //await for grades
  await Grades.sync()
  //await assignments
  await Assignments.sync()
  //await classroom
  await Classroom.sync()

}


init()

module.exports = {
  User,Section,Grades, Assignments,Classroom
}