const Evento = require('../models/Evento')

//servicio para obtener todos los eventos
async function getEvents() {
    try {
        const eventos = await Evento.find()
        return eventos
    } catch (error) {
        throw new Error(error)
    }
}

//servicio para obtener un evento
async function getOneEvents(payload) {
    try {
        const evento = await Evento.findById(payload)
        return evento
    } catch (error) {
        throw new Error(error)
    }
}

//servicio para crear un evento
async function createEvent(payload) {
    try {
        const event = new Evento(payload)
        event.save()
        return event
    } catch (error) {
        throw new Error(error)
    }
}

//servicio para actualizar un evento completo
async function updateEvent(eventoId, payload) {
    try {
        const eventoActualizado = await Evento.findByIdAndUpdate(eventoId, payload, { new: true });
        return eventoActualizado
    } catch (error) {
        throw new Error(error)
    }
}

//servicio para actualizar un parametro del evento
async function updateParamEvent(eventoId, payload) {
    try {
        const eventoActualizado = await Evento.findByIdAndUpdate(eventoId, payload, { new: true });
        return eventoActualizado
    } catch (error) {
        throw new Error(error)
    }
}

//servicio para eliminar un evento
async function deletedEvent(payload) {
    try {
        const eventoEliminado = await Evento.findByIdAndDelete(payload);
        return eventoEliminado
    } catch (error) {
        throw new Error(error)
    }
}

module.exports = {
    getEvents,
    createEvent,
    getOneEvents,
    updateEvent,
    updateParamEvent,
    deletedEvent
}