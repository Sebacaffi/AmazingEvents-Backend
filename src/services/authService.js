const Customer = require('../models/Customer')

//servicio para obtener un customer
async function getOneCustomer(email) {
    try {
        const customer = await Customer.findOne({email: email})
        return customer
    } catch (error) {
        throw new Error(error)
    }
}

module.exports = {
    getOneCustomer
}