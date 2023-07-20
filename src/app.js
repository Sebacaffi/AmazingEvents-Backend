const express = require('express')
const connect = require('./db')
const eventoRouter = require('./router/eventoRouter')
const bodyParser = require('body-parser')
const swaggerUi = require('swagger-ui-express')
const swaggerDocs = require('./api-endpoints.json')

const app = express()

connect()

app.use(bodyParser.urlencoded({ extended: false}))
app.use(bodyParser.json())

app.use("/api-docs",swaggerUi.serve, swaggerUi.setup(swaggerDocs))
app.use("/api", eventoRouter)

app.listen(3000, ()=>{
    console.log("Activo en el puerto 3000")
})