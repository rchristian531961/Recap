const {DataTypes, Model, INET}=require('sequelize')

let dbConnect=require("../dbConnect")

const sequelizeInstance=dbConnect.Sequelize

class Classroom extends Model{}
Classroom.init(
    {
        class_id:{
            type:DataTypes.INTEGER,
            allowNull:false,
            autoIncrement:true,
            primaryKey:true
        },
        student_first_name:{
            type:DataTypes.STRING,
            allowNull:false,
            required:true
        },
        student_last_name:{
            type:DataTypes.INTEGER,
            allowNull:false,
            required:true
        },
        //How to Link
        student_id:{
            type:DataTypes.STRING,
            allowNull:false,
            required:true
        },
    },

    {
        sequelize:sequelizeInstance,
        modelName:"Classroom",
        timestamps:true,
        freezeTableName:true,
    }

)

module.exports=Classroom;