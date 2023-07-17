const mongoose = require('mongoose')

const uri = "mongodb+srv://admin:MaBD0fd0iYfR4t6h@cluster0.qlxwa2o.mongodb.net/?retryWrites=true&w=majority";

const connect = () => {

    mongoose.connect(uri)
    .then(()=>console.log("Conectado a MongoDB"))
    .catch(err => console.log("Error al conectar a MongoDB"))

}

module.exports = connect