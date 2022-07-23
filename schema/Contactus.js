
const mongoose = require("mongoose");
const contactSchema = new mongoose.Schema({
    fname: String,
    lname: String,
    phonenumber: String,
    email: String,
    time: String,
    message: String
  })
  const Contact = mongoose.model("Contactus", contactSchema);

  module.exports=Contact