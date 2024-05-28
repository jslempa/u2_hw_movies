const mongoose = require('mongoose')
const { Schema } = require('mongoose')

const Review = new Schema(
    {
        publication: { type: String, required: true},
        score: { type: Number, required: true, min: 0, max: 100 },
        comment: { type: String, required: true },
        movieTitle: {type: Schema.Types.ObjectId, ref: 'Movie'}
    },
    { timestamps: true }
)

module.exports = mongoose.model('reviews', Review)