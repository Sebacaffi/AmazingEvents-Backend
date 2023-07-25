const express = require('express')
const connect = require('./db')
const eventoRouter = require('./router/eventoRouter')
const customerRouter = require('./router/customerRouter')
const authRouter = require('./router/authRouter')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const swaggerUi = require('swagger-ui-express')
const swaggerDocs = require('./api-endpoints.json')
const cors = require('cors')

const app = express()

connect()

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false}))
app.use(bodyParser.json())
app.use(cookieParser())

app.use("/api-docs",swaggerUi.serve, swaggerUi.setup(swaggerDocs))
app.use("/api", eventoRouter)
app.use("/api", customerRouter)
app.use("/api", authRouter)

app.listen(3000, ()=>{
    console.log("Activo en el puerto 3000")
})