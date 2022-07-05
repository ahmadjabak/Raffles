const connectionString = "mongodb+srv://ahmad:ahmadjabak123@cluster0.xzal7.mongodb.net/raffles";
const mongoose = require("mongoose");


const rafflesSchema = new mongoose.Schema({
  image: { type: String },
  name: { type: String },
  price: { type: Number },
  startdate: { type: String },
  endate: { type: String },
})
const Raffles = mongoose.model("Raffles", rafflesSchema);

module.exports =  Raffles