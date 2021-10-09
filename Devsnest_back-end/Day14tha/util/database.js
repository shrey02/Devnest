const Sequelize=require('sequelize')

const sequelize=new Sequelize("session","postgres","myself2244",{
    host:"localhost",
    dialect:"postgres"
})
module.exports=sequelize