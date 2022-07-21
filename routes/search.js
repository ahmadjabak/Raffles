const express = require("express");
const router = express.Router();

router.use(express.json());
const ObjectId = require("mongodb").ObjectId;
var raffles = require("../schema/Raffles")

// @desc searchbar for the raffle names
// @access Public
router.get('/',(req, res) => {
    raffles.find(({name: {$regex:req.query.name}}), (err, val) => {
        if(val){
            res.json(val);
        }
    })
}) 
module.exports = router;