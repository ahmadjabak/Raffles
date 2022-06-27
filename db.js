require("dotenv").config();
const { application } = require("express");
const mongoose  = require("mongoose");
const sche = require("./schema")
module.exports = async ()=> {
    try{
        await mongoose.connect(process.env.DB,sche);
        console.log("Connected to Database Successfuly");
    }catch(error){
        console.log("Error in connecting to Database!");
        console.log(error);
    }
}
