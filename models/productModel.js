const DataTypes =require('sequelize');
const User = require('./userModel');
const sequelize = require('../config/db');
const Product=sequelize.define({
    product_id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    name:{
        type:DataTypes.STRING(100),
        allowNull:false
    },
    descriptiom:{
        type:DataTypes.INTEGER,
        allowNull:false,
    },
        owner_id:{
            type:DataTypes.INTEGER,
            allowNull:false,
            references:{
                model:User,
                key:'user_id'
            }
        }
});

module.exports={Product};