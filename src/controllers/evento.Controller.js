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
                res.status(400).json("ID no existe")
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
        if (dataEvent.name && dataEvent.description) {
            const eventoCreado = await services.createEvent(dataEvent)
            if (eventoCreado) {
                res.status(200).json(eventoCreado)
            } else {
                res.status(400).json("No se creó le evento")
            }
        } else {
            res.status(400).json({ message: "Data Error" })
        }
    } catch (error) {
        res.status(500).json({ error: error.message })
    }

}

//Actualizar un evento en la BD
async function updateEvent(req, res) {
    try {
        const eventoId = req.params.id;
        const dataEvento = req.body
        if (dataEvento.name && dataEvento.description) {
            const eventoActualizado = await services.updateEvent(eventoId, dataEvento)
            if (eventoActualizado) {
                res.status(200).json(eventoActualizado)
            } else {
                res.status(400).json("No se actualizó el evento")
            }
        } else {
            res.status(400).json({ message: "Data Error" })
        }
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

//Actualizar un parámetro del evento en la BD
async function updateParamEvent(req, res) {
    try {
        const eventoId = req.params.id;
        const dataEvento = req.body
        if (dataEvento.name || dataEvento.description) {
            const eventoActualizado = await services.updateEvent(eventoId, dataEvento)
            if (eventoActualizado) {
                res.status(200).json(eventoActualizado)
            } else {
                res.status(400).json("No se actualizó el evento")
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
                res.status(200).json(eventoEliminado)
            } else {
                res.status(400).json("ID no existe")
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