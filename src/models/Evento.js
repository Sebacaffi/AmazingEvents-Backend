const mongoose = require('mongoose')

const Schema = mongoose.Schema

const eventoSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: String
})

const Evento = mongoose.model('Evento', eventoSchema)

module.exports = Evento