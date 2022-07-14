const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const Admin = require('../schema/Admin');
router.use(express.json());


router.put('/', (req, res) => {
    const newUsername = req.query.username;
    const newPassword = req.query.password;

    Admin.findOneAndUpdate(({_id: '62c215342fb8c914a7cc3758'}), {
        $set: {
            username: newUsername,
            password: newPassword
        }
    }, { new: true }, (err, val) => {
        if (val != null) {
            Admin.find((err, val) => {
                res.send(val)
            })
        } else {
            res.status(404).send({ status: 404, error: true, message: 'the profile  does not exist' })
        }
    })

})
module.exports = router;

