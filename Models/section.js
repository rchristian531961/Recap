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
        section_ids:{
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
        //Link Assignment_Ids
        //Link Students_Ids
        // student_ids: {
        //     type:DataTypes.JSON,
        //     allowNull:true,
        //     references: {
        //         model: 'students',
        //         key: 'id'
        //     }
        // },
        // assignment_ids:{
        //     type:DataTypes.JSON,
        //     allowNull:true,
        //     references:{
        //         model:'assignments',
        //         key:'id'
        //     }
        // }
    }, 

    {
        sequelize:sequelizeInstance,
        modelName:"section",
        timestamps:true,
        freezeTableName:true,
    }
)
// User.belongsTo(Section,{foreignKey:"user_id"})

module.exports=Section;