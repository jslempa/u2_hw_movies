const db = require('../db')
const Movie = require('../models/movie')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    
    const steveCarell = await Actor.find({ name: 'Steve Carell'})
    const johnKrasinski = await Actor.find({ name: 'John Krasinski'})
    const davidKoechner = await Actor.find({ name: 'David Koechner'})
    const craigRobinson = await Actor.find({ name: 'Craig Robinson'})
    const edHelms = await Actor.find({ name: 'Ed Helms'})
    
    const movies = [
        {
            title: 'The 40-Year-Old Virgin',
            runtime: 116,
            rating: 7.1,
            releaseYear: 2005,
            description: 'Goaded by his buddies, a nerdy guy who has never "done the deed" only finds the pressure mounting when he meets a single mother.',
            cast: steveCarell[0]._id
        },
        {
            title: 'A Quiet Place',
            runtime: 90,
            rating: 7.5,
            releaseYear: 2018,
            description: 'In a post-apocalyptic world, a family is forced to live in silence while hiding from monsters with ultra-sensitive hearing.',
            cast: johnKrasinski[0]._id
        },
        {
            title: 'Anchorman: The Legend of Ron Burgundy',
            runtime: 94,
            rating: 7.2,
            releaseYear: 2004,
            description: "Ron Burgundy is San Diego's top-rated newsman in the male-dominated broadcasting of the 1970s, but that's all about to change for Ron and his cronies when an ambitious woman is hired as a new anchor.",
            cast: davidKoechner[0]._id
        },       
        {
            title: 'Hot Tub Time Machine',
            runtime: 101,
            rating: 6.4,
            releaseYear: 2010,
            description: 'A malfunctioning time machine at a ski resort takes a man back to 1986 with his two friends and nephew, where they must relive a fateful night and not change anything to make sure the nephew is born.',
            cast: craigRobinson[0]._id
        },
        {
            title: 'The Hangover',
            runtime: 100,
            rating: 7.7,
            releaseYear: 2009,
            description: 'Three buddies wake up from a bachelor party in Las Vegas, with no memory of the previous night and the bachelor missing. They make their way around the city in order to find their friend before his wedding.',
            cast: edHelms[0]._id
        }        
    ]

    await Movie.insertMany(movies)
    console.log('Created movies')
}

const run = async () => {
    await main()
    db.close()
}

run()