const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const Admin = require('../schema/Admin');
router.use(express.json());


require("dotenv").config();

router.post('/',
    async (req, res) => {
        try {
            const admin = await Admin.findOne({
                username: req.body.username,
                password: req.body.password
            })
            if (admin) {
                const token = jwt.sign(
                    {
                        username: admin.username,
                    }, 'secret123', { expiresIn: '12h' }
                )
                return res.json({ status: 'ok', admin: token })
            } else {
                return res.json({ status: 'error', admin: false })
            }
        } catch (err) {
            console.log(err.message)
        }
    }

);
module.exports = router;