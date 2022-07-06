const express = require("express");
const router = express.Router();

const contact = require("../schema/Contactus");

router.post('/', async (req, res) => {
    const newMsg = new contact({
        fname: req.query.fname,
        lname: req.query.lname,
        phonenumber: req.query.phonenumber,
        email: req.query.email,
        time: req.query.time,
        message: req.query.message
    });
    console.log(req.query);
    try {
        await newMsg.save();
    } catch (e) {
        console.log(e.message)
    }

});

module.exports = router;