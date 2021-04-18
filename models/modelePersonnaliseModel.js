const mongoose = require('mongoose');

const { Schema } = mongoose;
mongoose.Promise = global.Promise;

// const ModelePersonnalise = mongoose.model(
const modelePersonnaliseSchema = new Schema(
    // "exo-api",
    {
        _idModelePersonnalise : {
            type : Number,
            required : true
        },

        couleur : {
            type : String,
            required : true
        }
    },
    {collection: 'modelePersonnalise'}
)
// module.exports = { ModelePersonnalise };

module.exports = mongoose.models.modelePersonnalise || mongoose.model('modelePersonnalise', modelePersonnaliseSchema);
