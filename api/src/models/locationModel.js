const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const locationSchema = new Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    latitude: {
        type: Number
    },
    longitude: {
        type: Number
    },
    timestamp: {
        type: Date,
        default: Date.now
    }
})


module.exports = mongoose.model("Location", locationSchema)