const express = require ('express');
const sequelize = require('./config/db');
const User = require ('./models/userModel');
const port = 3000;
const app = express();
try{
    sequelize.authenticate();
    console.log('Connection established successfully...');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
app.get('/', async (req,res)=>{
    let User = await User.findAll();
    res.json('welcome to onekey....');
});

app.listen(port,()=>{
    console.log(`server is running on ${port}....`);
});