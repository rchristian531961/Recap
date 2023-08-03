//establish strict(why later?)
'use strict'
//imported the Sequelize
const {Sequelize} =require('sequelize')

//established variable holding the sequelize information to retrieve from (.env) file
const sequelize=new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER, process.env.DB_PASSWORD, {
        host:process.env.DB_HOST,
        dialect:"mysql"
    }
)

//established function to connect to the SQL database
const connectMySql=async()=>{
    try{
        await sequelize.authenticate();
        console.log(`Successful connection to MYSQL DATABASE ${process.env.DB_NAME}`)
    }catch(error){
        console.error(`Unable to connect to MySQL database`,error)
        process.exit(1)
    }
}

//function active
connectMySql()

//exported SQL
module.exports={
    Sequelize:sequelize,
    connectMySql
}