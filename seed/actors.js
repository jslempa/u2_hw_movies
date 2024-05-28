const db = require('../db')
const Actor = require('../models/actor')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const actors = [
        { name: 'Steve Carell', age: 61, isAlive: true },        
        { name: 'Rainn Wilson', age: 58, isAlive: true },       
        { name: 'John Krasinski', age: 44, isAlive: true },    
        { name: 'Jenna Fischer', age: 50, isAlive: true },   
        { name: 'Mindy Kaling', age: 44, isAlive: true },    
        { name: 'B.J. Novak', age: 44, isAlive: true }, 
        { name: 'Craig Robinson', age: 52, isAlive: true },       
        { name: 'Ed Helms', age: 50, isAlive: true },        
        { name: 'Ellie Kemper', age: 44, isAlive: true },          
        { name: 'David Koechner', age: 61, isAlive: true }   
      ]

      await Actor.insertMany(actors)
      console.log('Created actors')
}

const run = async () => {
    await main()
    db.close()
}

run()