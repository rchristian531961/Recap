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


(7) Establish Database: Mongoose/SQL, Etc