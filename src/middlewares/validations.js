const fieldsReqCustomers = (req, res, next) => {
    const dataCustomer = req.body
    if (!dataCustomer.user) res.status(400).json("Usuario no ingresado")
    if (!dataCustomer.password) res.status(400).json("Password no ingresada")
    if (!dataCustomer.rol) res.status(400).json("Rol no ingresado")
    if (!dataCustomer.email) res.status(400).json("Email no ingresado")
    next()
}

const fieldsReqEventos = (req, res, next) => {
    const dataEvents = req.body
    if (!dataEvents.name) res.status(400).json("Nombre no ingresado")
    if (!dataEvents.category) res.status(400).json("Categoría no ingresada")
    if (!dataEvents.date) res.status(400).json("Fecha no ingresada")
    if (!dataEvents.image) res.status(400).json("URL imagen no ingresada")
    next()
}

module.exports = {
    fieldsReqCustomers,
    fieldsReqEventos
}