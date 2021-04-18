/*
   @raphabiz
*/

const mongoose = require('mongoose');

const { Schema } = mongoose;
mongoose.Promise = global.Promise;

const modeleSchema = new Schema(
    {
        idPiece: {
            type: [String],
            required: true,
        },
        name: {
            type: String,
            required: true
        }


    },
    { collection: 'modele' }
);
module.exports = mongoose.models.modele || mongoose.model('modele', modeleSchema);