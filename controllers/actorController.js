const Actor = require('../models/actor')

const getAllActors = async (req, res) => {
    try {
        const actors = await Actor.find()
        res.json(actors)
    } catch (error) {
        return res.status(500).send(error.message)
    }       
}

const getActorById = async (req, res) => {
    try {
        const { id } = req.params
        const actor = await Actor.findById(id)
        if (actor) {
            return res.json(actor)
        }
        return res.status(404).send('Actor with that ID does not exist')
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

module.exports = {
    getAllActors,
    getActorById
}