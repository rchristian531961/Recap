const {DataTypes, Model, INET}=require('sequelize')

let dbConnect=require("../dbConnect")

const sequelizeInstance=dbConnect.Sequelize

class Student extends Model{}
Student.init(
    {
        student_id:{
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
        //Link Grades_id: Datatypes
        // grades_id: {
        //     type:DataTypes.INTEGER,
        //     references: {
        //         model: 'Grades',// company migration define
        //         key: 'id'
        //     }
        // }
    },

    {
        sequelize:sequelizeInstance,
        modelName:"Students",
        timestamps:true,
        freezeTableName:true,
    }

)



module.exports=Student;