//Establishing variables that need sequelize for my Schemas
const {DataTypes, Model}=require('sequelize')

//Established the connection for database connection
let dbConnect=require("../dbConnect")

//Established the Instance
const sequelizeInstance=dbConnect.Sequelize

//Established a Schema (Model) for Section with class
class Section extends Model{}
Section.init(
    {
        id:{
            type:DataTypes.INTEGER,
            autoIncrement:true, //auto places
            allowNull:false,
            primaryKey:true
        },
        subject:{
            type:DataTypes.STRING,
            allowNull:false,
            required:true
        },
        num_students:{
            type:DataTypes.INTEGER,
            allowNull:false,
            required:true
        },
        //? Link the Instructor Id Here How
        instructor_id:{
            type:DataTypes.INTEGER,
            allowNull:false,
            required:true
        }
    }, 

    {
        sequelize:sequelizeInstance,
        modelName:"Section",
        timestamps:true,
        freezeTableName:true,
        //scopes? defaultScope?
    }
)

module.exports=Section;