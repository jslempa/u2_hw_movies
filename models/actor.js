const mongoose = require('mongoose')
const { Schema } = require('mongoose')

const Actor = new Schema(
    {
        name: { type: String, required: true },
        age: { type: Number, required: true },
        isAlive: { type: Boolean, required: true},
        image: { type: String, required: true }
    },
    { timestamps: true }
)

module.exports = mongoose.model('actors', Actor)