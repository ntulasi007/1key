const Sequelize = require('sequelize');

const sequelize = new Sequelize('onekey', 'root', 'root', {
    host: '127.0.0.1',
    dialect: 'mysql',
    port:'3307'
    });
    
   
module.exports = sequelize;
