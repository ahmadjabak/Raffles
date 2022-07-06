require('dotenv').config();
const express =require('express');
const app = express();
const cors = require("cors");
const connection = require("./db");
const searchByTitle = require('./routes/search');
const auth = require('./middleware/auth')
connection();

var fs = require('fs');
var path = require('path');
require('dotenv/config');
  app.use(cors());
const create=require('./routes/createraffles');
app.use("/raffles",create)
app.use("/search", searchByTitle);
const getAdmin=require('./routes/getAdmin');
app.use("/admin",getAdmin)   
 
const port = process.env.Port || 8080;
app.listen(port,()=> console.log(`Listining on port ${port}...`));
