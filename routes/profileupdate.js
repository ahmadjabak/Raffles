const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const Admin = require('../schema/Admin');
router.use(express.json());
const multer=require("multer");
const storage = multer.diskStorage({
    destination: (req, file, callback)=>{
    callback(null,"./raffle-cards/public/images/");
    },
    filename: (req,file,callback)=> {
    callback(null, file.originalname);
    }
}) 
const upload = multer({storage: storage});

router.put('/',upload.single("profileImage"), (req, res) => {

    Admin.findOneAndUpdate(({_id: '62c215342fb8c914a7cc3758'}), {
        $set: {
            image: req.file.originalname,
            username: req.body.username,
            password: req.body.password
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
router.get('/', (req, res) => {
  
    Admin.findOne({_id :'62c215342fb8c914a7cc3758'})
        .then(admin => res.json(admin))
        .catch(err => res.status(400)
            .json("error: " + err))
})
module.exports = router;
