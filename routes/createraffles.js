const express = require("express");
const router = express.Router();
const multer=require("multer");


router.use(express.json());

const raffles = require("../schema/Raffles")


const storage = multer.diskStorage({
    destination: (req, file, callback)=>{
    callback(null,"./raffle-cards/public/images/");
    },
    filename: (req,file,callback)=> {
    callback(null, file.originalname);
    }
}) 
const upload = multer({ storage: storage });

// @desc add a new raffle
// @access Private
router.post("/", upload.single("ticketImage"),(req, res) => {
    const NewRaffles = new raffles({
        image: req.file.originalname,
        name: req.body.name,
        price: req.body.price,
        startdate: req.body.startdate,
        endate: req.body.enddate,
        desc:req.body.desc
    })
    NewRaffles.save().then
        (() => res.json('Raffle Added')).catch
        (err => res.status(400).json('Error: ' + err))
});

// @desc check the available raffles
// @access Public
router.get('/', (req, res) => {
    raffles.find()
        .then(raffles => res.json(raffles))
        .catch(err => res.status(400)
            .json("error: " + err))
})

// @desc update an existing raffle
// @access Private
router.put('/:id',upload.single("ticketImage"), (req, res) => {

    raffles.findOneAndUpdate(({ _id: req.params.id }), {
        $set: {
            image: req.file.originalname,
            name: req.body.name,
            price: req.body.price,
            startdate: req.body.startdate,
            endate: req.body.enddate,
            desc:req.body.desc
        }
    }, { new: true }, (err, val) => {
        if (val != null) {
            raffles.find((err, val) => {
                res.send(val)
            })
        } else {
            res.status(404).send({ status: 404, error: true, message: 'the data  does not exist' })
        }
    })

})

// @desc delete an existing raffle
// @access Private
router.delete('/', (req, res) => {
    raffles.findByIdAndDelete(req.query.id)
        .then(() => res.json('raffle deleted'))
        .catch(err => res.status(400).json('Error: ' + err))
})
module.exports = router;