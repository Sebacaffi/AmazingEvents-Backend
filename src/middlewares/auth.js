const jwt = require('jsonwebtoken')

const secretKey = "h5KKfqtnXA"

const generarToken = (payload) => {
    const token = jwt.sign(payload, secretKey)
    return token
}

const authenticateToken = (req, res, next) => {
    if (req.cookies.customerToken) {
        try {
            const verficationToken = jwt.verify(req.cookies.customerToken, secretKey);
            if (verficationToken) {
                next();
            }
        } catch (error) {
            console.log(error);
        }
    }
};


module.exports = {
    generarToken,
    authenticateToken
}