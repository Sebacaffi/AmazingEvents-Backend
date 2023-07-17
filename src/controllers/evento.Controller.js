const Evento = require('../models/Evento')

async function getEvents(req, res){

    try {

        const eventos = await Evento.find()

        res.status(200).json(eventos)

    } catch (error) {

        res.status(500).json({error: error.message})

    }
}

async function createEvents(req, res){

    try {

        const eventoCreado = new Evento({
            name: "Evento Matti",
            description: "nuevo evento Matti"
        })

        await eventoCreado.save()

        res.status(200).json(eventoCreado)

    } catch (error) {

        res.status(500).json({error: error.message})

    }
}

module.exports = {
    getEvents,
    createEvents
}