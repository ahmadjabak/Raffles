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
app.use("/api/raffles", create)
app.use("/api/search", searchByTitle);
const getAdmin = require('./routes/getAdmin');
app.use("api/admin", getAdmin)
const getContacts = require('./routes/contacts')
app.use("/api/contactus", getContacts)
const getContactUs = require('./routes/contacts')
app.use("/api/ContactUsDashboard", getContactUs)
const gettheAdmin = require('./routes/profileupdate')
const getById = require('./routes/getById')
app.use("/api/get", getById)
app.use("/api/profile", gettheAdmin)
const port = process.env.Port||8080;
app.listen(port, () => console.log(`Listining on port ${port}...`));
