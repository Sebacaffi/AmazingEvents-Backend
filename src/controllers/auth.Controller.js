const services = require('../services/authService')
const generarToken = require('../middlewares/auth')

async function LoginCustomer(req, res) {
    try {
        const dataLogin = req.body
        const customer = await services.getOneCustomer(dataLogin.email)
        if(customer){
            if(customer.password == dataLogin.password){
                let objCustomer = {
                    id: customer._id,
                    email: customer.email
                }
                let token = generarToken(objCustomer)
                res.cookie("customerToken", token).send("Token cargado")
            }else{
                res.status(400).json("Usuario o contraseña incorrectos")
            }            
        }else{
            res.status(400).json("Usuario no existe")
        }
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

module.exports = {
    LoginCustomer
}