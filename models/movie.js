const mongoose = require('mongoose')
const { Schema } = require('mongoose')

const Movie = new Schema(
    {
        title: { type: String, required: true },
        runtime: { type: Number, required: true},
        rating: { type: Number, required: true},
        releaseYear: { type: Number, required: true},
        description: { type: String, required: true },
        image: { type: String, required: true },
        cast: { type: Schema.Types.ObjectId, ref: 'Actor'},
        reviews: { type: Schema.Types.ObjectId, ref: 'Review'}
    },
    {timestamps: true}
)

module.exports = mongoose.model('movies', Movie)