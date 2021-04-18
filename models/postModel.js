const mongoose = require('mongoose');

const PostModel = mongoose.model(
    "exo-api",
    {
        author: {
            type: String,
            required: true,
        },
        message: {
            type: String,
            required: true
        },
        date: {
            type: Date,
            default: Date.now
        }
    },
    "admin"
);

module.exports = { PostModel };
