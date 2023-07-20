const mongoose = require('mongoose')

const Schema = mongoose.Schema

const eventoSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    description: String,
    place: String,
    price: Number,
    capacity: Number,
    assistance: Number
});

const Evento = mongoose.model('Evento', eventoSchema)

module.exports = Evento