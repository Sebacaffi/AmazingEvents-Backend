const express = require('express')
const connectDB = require('./db')

const app = express()

connectDB()

app.listen(3000, ()=>{

    console.log("Activo en el puerto 3000");

})