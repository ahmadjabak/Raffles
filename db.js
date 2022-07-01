require("dotenv").config();
const { application } = require("express");
const mongoose = require("mongoose");
const raffles = require("./schema/Raffles")
const contact = require("./schema/Contactus")
const admin=require("./schema/Admin")
const ticket=require("./schema/Tickets")
module.exports = async () => {
    try {
        await mongoose.connect(process.env.DB, raffles,contact,admin,ticket);
        console.log("Connected to Database Successfuly");
    } catch (error) {
        console.log("Error in connecting to Database!");
        console.log(error);
    }
}
