/*
   @raphabiz
*/

const mongoose = require('mongoose');

const { Schema } = mongoose;
mongoose.Promise = global.Promise;

const pieceSchema = new Schema(
    {
        name: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },


    },
    { collection: 'piece' }
);
module.exports = mongoose.models.piece || mongoose.model('piece', pieceSchema);