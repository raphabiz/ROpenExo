/*
   @raphabiz
*/

const express = require('express');
const router = express.Router();
const ObjectID = require('mongoose').Types.ObjectId;

const ModeleModel = require('../models/modeleModel');

router.get('/', (req, res) => {
    ModeleModel.find((err, docs) => {
        if (!err) res.send(docs);
        else console.log("Error to get data:" + err);
    })
});

router.get('/:id', (req, res) => {
    if (!ObjectID.isValid(req.params.id))
        return res.status(400).send("ID Unknown :" + req.params.id)
    ModeleModel.findById(req.params.id, function (err, docs) {
        if (!err) res.send(docs);
        else console.log("GET error :" + err);
    })
});

router.post('/', (req, res) => {
    const newRecord = new ModeleModel({
        idPiece: req.body.idPiece,
        name: req.body.name
    });
    newRecord.save((err, docs) => {
        if (!err) res.send(docs);
        else console.log('Error creating new data:' + err);
    })
});

router.put('/:id', (req, res) => {
    if (!ObjectID.isValid(req.params.id))
        return res.status(400).send("ID Unknown :" + req.params.id)

    const updateRecord = {
        idPiece: req.body.idPiece,
        name: req.body.name
    };
    ModeleModel.findByIdAndUpdate(
        req.params.id,
        { $set: updateRecord },
        { new: true },
        (err, docs) => {
            if (!err) res.send.docs;
            else console.log("Update error :" + err);
        }
    )
});

router.delete('/:id', (req, res) => {
    if (!ObjectID.isValid(req.params.id))
        return res.status(400).send("ID unknown :" + req.params.id)

    ModeleModel.findByIdAndRemove(
        req.params.id,
        (err, docs) => {
            if (!err) res.send(docs);
            else console.log("DElete error:" + err);
        }
    )
})

module.exports = router;