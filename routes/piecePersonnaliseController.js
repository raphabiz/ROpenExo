const express = require('express');
const router = express.Router();
const ObjectID = require('mongoose').Types.ObjectId;

// const { PiecePersonnalise } = require('../models/piecePersonnaliseModel');
const  PiecePersonnalise  = require('../models/piecePersonnaliseModel');

router.get('/', (req, res) => {
    PiecePersonnalise.find((err, docs) => {
        if (!err) res.send(docs);
        else console.log("Error to get data:" + err);
    })
});

router.get('/:id', (req, res) => {
    if (!ObjectID.isValid(req.params.id))
        return res.status(400).send("ID Unknown :" + req.params.id)
    PiecePersonnalise.findById(req.params.id, function (err, docs) {
        if (!err) res.send(docs);
        else console.log("GET error :" + err);
    })
});


router.post('/', (req, res) => {
    const newRecord = new PiecePersonnalise({
        _idPiecePersonnalise: req.body._idPiecePersonnalise,
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
        _idPiecePersonnalise: req.body._idPiecePersonnalise,
        name: req.body.name
    };
    PiecePersonnalise.findByIdAndUpdate(
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

    PostsModel.findByIdAndRemove(
        req.params.id,
        (err, docs) => {
            if (!err) res.send(docs);
            else console.log("Delete error:" + err);
        }
    )
})

module.exports = router;
