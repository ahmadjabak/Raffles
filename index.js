require('dotenv').config();
const express = require('express');
const app = express();
const cors = require("cors");
const connection = require("./db");
const searchByTitle = require('./routes/search');

connection();

var fs = require('fs');
var path = require('path');
require('dotenv/config');
app.use(cors());
const create = require('./routes/createraffles');
app.use("/raffles", create)
app.use("/search", searchByTitle);
const getAdmin = require('./routes/getAdmin');
app.use("/admin", getAdmin)
const getContacts = require('./routes/contacts')
app.use("/contactus", getContacts)
const getContactUs = require('./routes/contacts')
app.use("/ContactUsDashboard", getContactUs)
const gettheAdmin = require('./routes/profileupdate')
const getById = require('./routes/getById')
app.use("/get", getById)
app.use("/profile", gettheAdmin)
const port = process.env.Port || 8080;
app.listen(port, () => console.log(`Listining on port ${port}...`));
