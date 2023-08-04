//Establishing variables that need sequelize for my Schemas
const {DataTypes, Model}=require('sequelize')

//Established the connection for database Connection
let dbConnect=require('../dbConnect')

//Established the Instance 
const sequelizeInstance=dbConnect.Sequelize

//Established a Schema(Model) for Users with class
class Assignments extends Model{}
Assignments.init(
    {
        assignment_id:{type:DataTypes.INTEGER,
            allowNull:false,
            autoIncrement:true,
            primaryKey:true
        },
        title:{
            type:DataTypes.STRING,
            allowNull:false,
            required:true
        },
        num_points:{
            type:DataTypes.INTEGER,
            allowNull:false,
            required:true
        },
        //How to link section id?
        section_id:{
            type:DataTypes.INTEGER,
            allowNull:false,
            required:true
        },

    },

    //Connects Class to Database
    //Instructs Models Name
    //Time Stamps creation and locks table name
    //default Scope: anytime model called excludes the password
    {
    sequelize:sequelizeInstance,
    modelName:"Assignments", 
    timeStamps:true,
    freezeTableName:true,
    }
)

module.exports=Assignments;