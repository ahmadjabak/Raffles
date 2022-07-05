const express = require("express");
const router = express.Router();

router.use(express.json());
const ObjectId = require("mongodb").ObjectId;
var raffles = require("../schema/Raffles")
router.get('/',(req, res) => {
    raffles.find(({name: req.query.name}), (err, val) => {
        if(val){
            res.json(val);
        }
    })
}) 
module.exports = router;