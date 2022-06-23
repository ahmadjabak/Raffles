require('dotenv').config();
const express =require('express');
const app = express();
const cors = require("cors");
const connection = require("./db");

connection();


app.use(express.json())
app.use(cors()); 

app.get("/", (req,res) =>{
    res.json({msg:'Success'})
})

const port = process.env.Port || 8080;
app.listen(port,()=> console.log(`Listining on port ${port}...`));
