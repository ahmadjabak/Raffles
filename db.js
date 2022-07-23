require("dotenv").config();
const { application } = require("express");
const mongoose = require("mongoose");
module.exports = async () => {
    try {
        await mongoose.connect(process.env.DB);
        console.log("Connected to Database Successfuly");
    } catch (error) {
        console.log("Error in connecting to Database!");
        console.log(error);
    }
}
