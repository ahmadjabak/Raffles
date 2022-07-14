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
// router.post('/',
//      (req, res) => {
//         const username = req.query.username;
//         const password = req.quey.password;
//         Admin.findOne({username : username, password: password})
//         .then(admin => res.send({Success:true,message:admin}))
//         .catch(err => res.status(400)
//             .json("error: " + err))
//     }
// );
router.get('/all',
    async (req, res) => {
        const username = req.query.username;
        const password = req.query.password;
        Admin.find()
            .then(admin => res.send({ Success: true, message: admin }))
            .catch(err => res.status(400)
                .json("error: " + err))
    }
);
router.post("/", (req, res) => {
    const NewAdmin = new Admin({
        username: req.query.username,
        password: req.query.password,
        email: req.query.email,
    })
    NewAdmin.save().then
        (() => res.json('Admin Added')).catch
        (err => res.status(400).json('Error: ' + err))
});


router.post('/login', async (req, res) => {
    const admin = await Admin.findOne({
        username: req.body.username,
        password: req.body.password
    })
    if (admin) {
        const token = jwt.sign(
            {
                username: admin.username,
            }, 'secret123', { expiresIn: '1d' }
        )
        return res.json({ status: 'ok', admin: true })
    } else {
        return res.json({ status: 'error', admin: false })
    }
})
module.exports = router;