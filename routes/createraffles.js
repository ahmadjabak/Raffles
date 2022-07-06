const express = require("express");
const router = express.Router();


router.use(express.json());
const ObjectId = require("mongodb").ObjectId;
const raffles = require("../schema/Raffles")
const contact=require("../schema/Contactus")
router.post("/", (req, res) => {
    const NewRaffles = new raffles({
        image: req.query.image,
        name: req.query.name,
        price: req.query.price,
        startdate: req.query.startdate,
        endate: req.query.enddate
    })
    NewRaffles.save().then
        (() => res.json('Raffle Added')).catch
        (err => res.status(400).json('Error: ' + err))
});


router.get('/', (req, res) => {
    raffles.find()
        .then(raffles => res.json(raffles))
        .catch(err => res.status(400)
            .json("error: " + err))
})
router.put('/:id', (req, res) => {

    raffles.findOneAndUpdate(({ _id: req.params.id }), {
        $set: {
            image: req.query.image,
            name: req.query.name,
            price: req.query.price,
            startdate: req.query.startdate,
            endate: req.query.enddate
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
router.delete('/', (req, res) => {
    raffles.findByIdAndDelete(req.query.id)
        .then(() => res.json('raffle deleted'))
        .catch(err => res.status(400).json('Error: ' + err))
})
module.exports = router;