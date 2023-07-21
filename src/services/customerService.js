const Customer = require('../models/Customer')

//servicio para obtener todos los customers
async function getCustomers() {
    try {
        const customers = await Customer.find()
        return customers
    } catch (error) {
        throw new Error(error)
    }
}

//servicio para obtener un customer
async function getOneCustomer(payload) {
    try {
        const customer = await Customer.findById(payload)
        return customer
    } catch (error) {
        throw new Error(error)
    }
}

//servicio para crear un customer
async function createCustomer(payload) {
    try {
        const customer = new Customer(payload)
        customer.save()
        return customer
    } catch (error) {
        throw new Error(error)
    }
}

//servicio para actualizar un customer completo
async function updateCustomer(customerId, payload) {
    try {
        const customerActualizado = await Customer.findByIdAndUpdate(customerId, payload, { new: true });
        return customerActualizado
    } catch (error) {
        throw new Error(error)
    }
}

//servicio para actualizar un parametro del customer
async function updateParamCustomer(customerId, payload) {
    try {
        const customerActualizado = await Customer.findByIdAndUpdate(customerId, payload, { new: true });
        return customerActualizado
    } catch (error) {
        throw new Error(error)
    }
}

//servicio para eliminar un customer
async function deletedCustomer(payload) {
    try {
        const customerEliminado = await Customer.findByIdAndDelete(payload);
        return customerEliminado
    } catch (error) {
        throw new Error(error)
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