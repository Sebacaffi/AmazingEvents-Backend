const Evento = require('../models/Evento')

// Método para obtener todos los eventos de la BD
async function getEvents(req, res) {

    try {

        const eventos = await Evento.find()

        res.status(200).json(eventos)

    } catch (error) {

        res.status(500).json({ error: error.message })

    }
}

// Método para encontrar un solo evento de la BD
async function getOneEvent(req, res) {
    try {

        const eventoId = req.params.id; 

        const evento = await Evento.findById(eventoId);

        res.status(200).json(evento);

    } catch (error) {

        res.status(500).json({ error: error.message });

    }
}

// Método para crear un evento en la BD
async function createEvent(req, res) {

    try {

        const { name, description } = req.body

        const eventoCreado = new Evento({
            name,
            description
        })

        await eventoCreado.save()

        res.status(200).json(eventoCreado)

    } catch (error) {

        res.status(500).json({ error: error.message })

    }
}

// Metodo para actualizar un evento en la BD
async function updateEvent(req, res) {

    try {

        const eventoId = req.params.id; 

        const dataEvento = req.body

        const eventoActualizado = await Evento.findByIdAndUpdate(eventoId, dataEvento, {new : true});

        res.status(200).json(eventoActualizado)

    } catch (error) {

        res.status(500).json({ error: error.message })

    }
}

// Método para borrar un evento de la BD
async function deletedEvent(req, res) {

    try {

        const eventoId = req.params.id;

        const eventoEliminado = await Evento.findByIdAndDelete(eventoId);

        if (!eventoEliminado) {

            return res.status(404).json({ mensaje: 'Evento no encontrado' });

        }

        return res.status(200).json({ mensaje: 'Evento eliminado correctamente' });

    } catch (error) {

        return res.status(500).json({ error: error.message });

    }
}

module.exports = {
    getEvents,
    getOneEvent,
    createEvent,
    updateEvent,
    deletedEvent
}