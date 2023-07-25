const jwt = require('jsonwebtoken')

const secretKey = "h5KKfqtnXA"

const generarToken = (payload) => {
    const token = jwt.sign(payload, secretKey)
    return token
}

module.exports = generarToken