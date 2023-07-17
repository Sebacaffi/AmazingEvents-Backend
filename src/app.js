const express = require('express')
const connect = require('./db')
const Evento = require('./models/Evento')

const app = express()

connect()

const EventoCreado = new Evento({name: "Event Name", description: "Event Description"})
EventoCreado.save()

app.listen(3000, ()=>{

    console.log("Activo en el puerto 3000");

})