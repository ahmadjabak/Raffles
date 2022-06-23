const connectionString = "mongodb+srv://ahmad:ahmadjabak123@cluster0.xzal7.mongodb.net/raffles";
const mongoose = require("mongoose");
const rafflesSchema = new mongoose.Schema({
    image: {
        data: Buffer,
        contentType: String
    },
    name: String,
    price: Number,
    startdate: String,
    endate: String
  })
  const Raffles = mongoose.model("Raffles",rafflesSchema);

  const contactSchema = new mongoose.Schema({
    fname: String,
    lname: String,
    phonenumber: String,
    email: String,
    time: String,
    message: String
  })
  const Contact = mongoose.model("Contactus",contactSchema);

  const adminSchema = new mongoose.Schema({
    username: String,
    password: String,
    email: String,
  })
  const Admin = mongoose.model("Admin",adminSchema);

  const ticketSchema = new mongoose.Schema({
    Raffles: {type: mongoose.SchemaTypes.ObjectId, ref: "Raffles"},
    win:{
        type: Boolean,
        default: false
    }
  })
  const Ticket = mongoose.model("Tickets",ticketSchema);

 
  function createMovie() {
    return new Admin({
        username: "ahmad",
        password: "ahmad",
        email: "samir",
    }).save()
  }

  function createAdmin() {
    return new Admin({
        username: "ali",
        password: "ahmad",
        email: "ali",
    }).save()
  }
  
const connector = mongoose.connect(connectionString);

let movie = connector.then( () => {
    let new_movie = createMovie();
    let new_admin= createAdmin();
})