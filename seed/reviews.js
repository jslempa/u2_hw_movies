const db = require('../db')
const Movie = require('../models/review')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const fortyYearOldVirgin = await Movie.find({ title: 'The 40-Year-Old Virgin'})
    const anchorman = await Movie.find({ title: 'Anchorman: The Legend of Ron Burgundy'})
    const hangover = await Movie.find({ title: 'The Hangover'})

const reviews = [
    {
        publication: 'New York Times',
        score: 95,
        comment: 'Good',
        movieTitle: fortyYearOldVirgin[0]._id
    },
    {
        publication: 'Washington Post',
        score: 95,
        comment: 'Fine',
        movieTitle: fortyYearOldVirgin[0]._id
    },   
    {
        publication: 'New York Post',
        score: 95,
        comment: 'Exquisite',
        movieTitle: anchorman[0]._id
    },   
    {
        publication: 'NPR',
        score: 95,
        comment: 'Transcendent',
        movieTitle: anchorman[0]._id
    },
    {
        publication: 'LA Times',
        score: 95,
        comment: 'Watchable',
        movieTitle: hangover[0]._id
    },   
    {
        publication: 'Better Homes and Gardens',
        score: 95,
        comment: 'Not bad',
        movieTitle: hangover[0]._id
    }
]

}