'use strict'
const User = require('./user')

//testing Section
const Section=require("./section");
//testing grades
const Grades=require("./grades")

async function init() {
  await User.sync()

  //await the Section
  await Section.sync()
  //await for grades
  await Grades.sync()
}


init()

module.exports = {
  User,Section,Grades
}