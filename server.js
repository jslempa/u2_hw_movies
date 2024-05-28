const express = require('express')
const cors = require('cors')
const db = require('./db')
const { Actor, Movie, Review } = require('./models')
const actorController = require('./controllers/actorController.js')
const movieController = require('./controllers/movieController.js')
const reviewController = require('./controllers/reviewController.js')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const PORT = process.env.PORT || 3001

const app = express()

app.use(cors())

app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`)
})

app.get('/', (req, res) => {
    res.send('This is our landing page')
})

app.get('/actors', actorController.getAllActors)
app.get('/actors/:id', actorController.getActorById)
app.get('/movies', movieController, getAllMovies)
app.get('/movies/:id', movieController, getMoviesById)
app.get('/reviews', reviewController, getAllReviews)
app.get('/reviews/:id', reviewController, getReviewById)
