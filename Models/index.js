'use strict'

const User = require('./user')
//testing Section
const Section=require("./section");

async function init() {
  await User.sync()
  await Section.sync()
}


init()

module.exports = {
  User,Section
}