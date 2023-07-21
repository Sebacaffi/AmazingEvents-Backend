const services = require('../services/customerService')

//Obtener todos los customers de la BD
async function getCustomers(req, res) {
    try {
        const customers = await services.getCustomers()
        res.status(200).json(customers)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

//Obtener un customer en la BD
async function getOneCustomer(req, res) {
    try {
        const customerId = req.params.id;
        if (customerId) {
            const customer = await services.getOneCustomer(customerId)
            if (customer) {
                res.status(200).json(customer)
            } else {
                res.status(404).json("ID no existe")
            }
        } else {
            res.status(400).json("Data Error")
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

//Crear un customer en la BD
async function createCustomer(req, res) {
    try {
        const dataCustomer = req.body
        if (dataCustomer.user && dataCustomer.password && dataCustomer.rol && dataCustomer.email) {
            const customerCreado = await services.createCustomer(dataCustomer)
            if (customerCreado) {
                res.status(200).json("Customer creado con éxito")
            } else {
                res.status(422).json("Error al crear customer")
            }
        } else {
            res.status(400).json({ message: "Data Error" })
        }
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

//Actualizar un customer en la BD
async function updateCustomer(req, res) {
    try {
        const customerId = req.params.id;
        const dataCustomer = req.body
        if (dataCustomer.user && dataCustomer.password && dataCustomer.rol && dataCustomer.email) {
            const customerActualizado = await services.updateCustomer(customerId, dataCustomer)
            if (customerActualizado) {
                res.status(200).json("Customer actualizado con éxito")
            } else {
                res.status(422).json("Error al actualizar customer")
            }
        } else {
            res.status(400).json({ message: "Data Error" })
        }
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

//Actualizar un parámetro del customer en la BD
async function updateParamCustomer(req, res) {
    try {
        const customerId = req.params.id;
        const dataCustomer = req.body
        if (dataCustomer) {
            const customerActualizado = await services.updateParamCustomer(customerId, dataCustomer)
            if (customerActualizado) {
                res.status(200).json("Campos customer actualizado con éxito")
            } else {
                res.status(422).json("Error al actualizar campos")
            }
        } else {
            res.status(400).json({ message: "Data Error" })
        }
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

//Borrar un customer de la BD
async function deletedCustomer(req, res) {
    try {
        const customerId = req.params.id;
        if (customerId) {
            const customerEliminado = await services.deletedCustomer(customerId)
            if (customerEliminado) {
                res.status(200).json("Customer eliminado con éxito")
            } else {
                res.status(404).json("ID no existe")
            }
        } else {
            res.status(400).json("Data Error")
        }
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

module.exports = {
    getCustomers,
    getOneCustomer,
    createCustomer,
    updateCustomer,
    updateParamCustomer,
    deletedCustomer
}