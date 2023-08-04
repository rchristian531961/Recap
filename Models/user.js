//Establishing variables that need sequelize for my Schemas
const {DataTypes, Model}=require('sequelize')

//Established the connection for database Connection
let dbConnect=require('../dbConnect')

//Established the Instance 
const sequelizeInstance=dbConnect.Sequelize

//Established a Schema(Model) for Users with class
class User extends Model{}
User.init(
    {
        id:{type:DataTypes.INTEGER,
            allowNull:false,
            autoIncrement:true,
            primaryKey:true
        },
        firstName:{
            type:DataTypes.STRING,
            allowNull:false,
            required:true
        },
        lastName:{
            type:DataTypes.STRING,
            allowNull:false,
            required:true
        },
        email:{
            type:DataTypes.STRING,
            allowNull:false,
            required:true
        },
        password:{
            type:DataTypes.STRING,
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
    modelName:"users", 
    timeStamps:true,
    freezeTableName:true,
    defaultScope:{
        attributes:{exclude:["password"]}
    },
    scopes:{
        withPassword:{
            attributes:[]
        }
    }
    }
)

module.exports=User;


