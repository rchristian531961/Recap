//Establishing variables that need sequelize for my Schemas
const {DataTypes, Model}=require('sequelize')

//Established the connection for database Connection
let dbConnect=require('../dbConnect')

//Established the Instance 
const sequelizeInstance=dbConnect.Sequelize

//Established a Schema(Model) for Users with class
class Grades extends Model{}
Grades.init(
    {
        id:{type:DataTypes.INTEGER,
            allowNull:false,
            autoIncrement:true,
            primaryKey:true
        },
        classroom_id:{
            type:DataTypes.INTEGER,
            allowNull:false,
            required:true
        },
        assignment_id:{
            type:DataTypes.INTEGER,
            allowNull:false,
            required:true
        },
        student_id:{
            type:DataTypes.INTEGER,
            allowNull:false,
            required:true
        },
        grades_letter:{
            type:DataTypes.STRING,
            allowNull:false,
            required:true
        },
        grades_percent:{
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
    modelName:"Grades", 
    timeStamps:true,
    freezeTableName:true,
    }
)

module.exports=Grades;