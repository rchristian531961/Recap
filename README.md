# Recap
Recap: Set-Up Back End with SQL

(1) Instillations: 
npm init
npm install express
npm install sequelize
npm install bcrypt
npm install mysql2
npm install dotenv

(2) Set-Up Folders:
Controller(For Function Actions)
Routes(Direction for address actions for Controllers)
Models(My Schemas,)

(3) Set-Up Files:
database(to Connect to my Database)
server(To make server live)
.env(Establish Database Info and connections)

(4) Establish Server Connection with express app
const express=require('express')
const app=express();
PORT=5000
app.use(express.json())
app.listen(PORT, ()=>{.......})

(5) Established Routes in Route Folder 


(6) Established Controller Functions


(7) Establish the (.env) file
File should contain the following: (Dependent on your Database)
-PORT (WORKING ON)
-DB_PORT(DATABASE PORT)
-DB_USER=root
-DB_PASSWORD=(database password)
-DB_HOST=localhost
-DB_NAME=(databaseName)


(7.5) In your database be sure its active and have schema set if (SQL)/(Mongoose) etc. 
Be sure to retrieve port information from database for correct values in (.env) file
import the (.env) in the server file
require('dotenv').config()



(8) Establish Database: Mongoose/SQL, Etc
For SQL We need to user Sequelize package
make a file for database: DbConnect.js (We are going to link the Database to the (.env) file)

-'use strict' (Research why later)
-Import Sequelize package: const {Sequelize} =require('sequelize')
-establish variable of sequelize that holds the (.env) file data
    const sequelize=new Sequelize(
        process.env.DB_Name, process.env.DB_USER, process.env.DB_PASSWORD, 
        {host:process.env.DB_HOST,//host 
        dialect:"mysql" //establishing what language
        }
    )
-Establish a function that must be async,await to link to database, try/catch
const connectMySql=async()=>{
    try{
        await sequelize.authenticate();
        console.log(`Successful connection to ${process.env.DB_NAME}`)
    }
    catch(error){
        console.error(`Unable to connect to database`, error)
        process.exit(1)
    }
}

-Call function in dbConnect: connectMySql()
-export modules: module.exports={
    Sequelize:Sequelize,connectMySql
}
-Be sure to connect dbConnect file to server file. 
const database=require("./----location)