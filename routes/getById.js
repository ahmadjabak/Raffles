
const express = require("express");
const router = express.Router();
const multer=require("multer");


router.use(express.json());

const raffles = require("../schema/Raffles")

// @desc get the raffle id
// @access Private
router.get('/:id', (req, res) => {
    const id = req.params.id;
    raffles.findOne({_id : id})
        .then(raffles => res.json(raffles))
        .catch(err => res.status(400)
            .json("error: " + err))
})
module.exports = router;