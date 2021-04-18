const mongoose = require('mongoose');

const { Schema } = mongoose;
mongoose.Promise = global.Promise;

// const PiecePersonnalise = mongoose.model(
const piecePersonnaliseSchema = new Schema(
    // "exo-api",
    {
        _idPiecePersonnalise :{
            type : Number,
            required : true
        },

        name: {
            type : String,
            required : true
        }
    },
    {collection: 'piecePersonnalise'});

// module.exports = { PiecePersonnalise };

module.exports = mongoose.models.piecePersonnalise || mongoose.model('piecePersonnalise', piecePersonnaliseSchema);
