const {DataTypes}=require('sequelize');
const sequelize=require('./config/db');
const User=sequelize.define('User',{
    id:{
        type:DataTypes.INTEGER,
        primarykey:true,
        autoIncrement:true,
    },
    name:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    email:{
        type:DataTypes.STRING,
        allowNull:false,
        unique:true,
        validate:{
            isEmail:true,
        }
    },
    password:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    role:{
        type:DataTypes.ENUM('user','admin'),
        allowNull:false,
        defaultValue:'user',
    },
},{
  tableName:'users',
  timestamps:true,
});
module.exports=User;