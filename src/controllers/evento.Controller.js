const services = require('../services/eventoService')

//Obtener todos los eventos de la BD
async function getEvents(req, res) {
    try {
        const eventos = await services.getEvents()
        res.status(200).json(eventos)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

//Obtener un evento en la BD
async function getOneEvent(req, res) {
    try {
        const eventoId = req.params.id;
        if (eventoId) {
            const evento = await services.getOneEvents(eventoId)
            if (evento) {
                res.status(200).json(evento)
            } else {
                res.status(404).json("ID no existe")
            }
        } else {
            res.status(400).json("Data Error")
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

//Crear un evento en la BD
async function createEvent(req, res) {
    try {
    const dataEvent = req.body
    const eventoCreado = await services.createEvent(dataEvent)
        if (eventoCreado) {
            res.status(200).json("Evento creado con éxito")
        } else {
            res.status(422).json("Error al crear evento")
        }
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

//Actualizar un evento en la BD
async function updateEvent(req, res) {
    try {
        const eventoId = req.params.id;
        const dataEvent = req.body
        const eventoActualizado = await services.updateEvent(eventoId, dataEvent)
        if (eventoActualizado) {
            res.status(200).json("Evento actualizado con éxito")
        } else {
            res.status(422).json("Error al actualizar evento")
        }
} catch (error) {
        res.status(500).json({ error: error.message })
    }
}

//Actualizar un parámetro del evento en la BD
async function updateParamEvent(req, res) {
    try {
        const eventoId = req.params.id;
        const dataEvent = req.body
        if (dataEvent) {
            const eventoActualizado = await services.updateEvent(eventoId, dataEvent)
            if (eventoActualizado) {
                res.status(200).json("Campos actualizado con éxito")
            } else {
                res.status(422).json("Error al actualizar campos")
            }
        } else {
            res.status(400).json({ message: "Data Error" })
        }
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

//Borrar un evento de la BD
async function deletedEvent(req, res) {
    try {
        const eventoId = req.params.id;
        if (eventoId) {
            const eventoEliminado = await services.deletedEvent(eventoId)
            if (eventoEliminado) {
                res.status(200).json("Evento eliminado con éxito")
            } else {
                res.status(404).json("ID no existe")
            }
        } else {
            res.status(400).json("Data Error")
        }
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

module.exports = {
    getEvents,
    getOneEvent,
    createEvent,
    updateEvent,
    updateParamEvent,
    deletedEvent
}