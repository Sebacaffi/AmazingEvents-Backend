const Joi = require('joi')

const eventoSchema = Joi.object({
    name: Joi.string()
        .min(3)
        .max(20)
        .required(),
    category: Joi.string()
        .min(3)
        .max(30)
        .required(),
    date: Joi.string()
        .length(10)
        .required(),
    image: Joi.string()
        .uri()
        .required(),
    description: Joi.string()
        .min(3)
        .max(50),
    place: Joi.string()
        .min(3)
        .max(20),
    price: Joi.number()
        .integer()
        .min(1)
        .max(100000),
    capacity: Joi.number()
        .integer()
        .min(1)
        .max(1000000), 
    assistance: Joi.number()
        .integer()
        .min(1)
        .max(Joi.ref('capacity')),
    estimate: Joi.number()
        .integer()
        .min(1)
        .max(Joi.ref('capacity'))
})

const customerSchema = Joi.object({
    user: Joi.string()
        .min(4)
        .max(20)
        .required(),
    password: Joi.string()
        .alphanum()
        .min(3)
        .max(20)
        .required(),
    rol: Joi.string()
        .min(4)
        .max(20)
        .required(),
    email: Joi.string()
        .email({ minDomainSegments: 2, tlds: { allow: ['com', 'cl', 'org'] } })
        .required()
})

const eventoPatchSchema = Joi.object({
    name: Joi.string()
        .min(3)
        .max(20),
    category: Joi.string()
        .min(3)
        .max(30),
    date: Joi.string()
        .length(10),
    image: Joi.string()
        .uri(),
    description: Joi.string()
        .min(3)
        .max(50),
    place: Joi.string()
        .min(3)
        .max(20),
    price: Joi.number()
        .integer()
        .min(1)
        .max(100000),
    capacity: Joi.number()
        .integer()
        .min(1)
        .max(1000000), 
    assistance: Joi.number()
        .integer()
        .min(1)
        .max(1000000)
        .max(Joi.ref('capacity')),
    estimate: Joi.number()
        .integer()
        .min(1)
        .max(1000000)
        .max(Joi.ref('capacity'))
})

const customerPatchSchema = Joi.object({
    user: Joi.string()
        .min(4)
        .max(20),
    password: Joi.string()
        .alphanum()
        .min(3)
        .max(20),
    rol: Joi.string()
        .min(4)
        .max(20),
    email: Joi.string()
        .email({ minDomainSegments: 2, tlds: { allow: ['com', 'cl', 'org'] } })
})

const fieldsEventos = (req, res, next) => {
    const dataEvents = req.body;
    const { error } = eventoSchema.validate(dataEvents);

    if (error) {
        const errorMessage = error.details.map((detail) => detail.message).join(". ");
        return res.status(400).json({ error: errorMessage });
    }

    next();
};

const fieldsCustomers = (req, res, next) => {
    const dataEvents = req.body;
    const { error } = customerSchema.validate(dataEvents);

    if (error) {
        const errorMessage = error.details.map((detail) => detail.message).join(". ");
        return res.status(400).json({ error: errorMessage });
    }

    next();
};

const fieldsPatchEventos = (req, res, next) => {
    const dataEvents = req.body;
    const { error } = eventoPatchSchema.validate(dataEvents);

    if (error) {
        const errorMessage = error.details.map((detail) => detail.message).join(". ");
        return res.status(400).json({ error: errorMessage });
    }

    next();
};

const fieldsPatchCustomers = (req, res, next) => {
    const dataEvents = req.body;
    const { error } = customerPatchSchema.validate(dataEvents);

    if (error) {
        const errorMessage = error.details.map((detail) => detail.message).join(". ");
        return res.status(400).json({ error: errorMessage });
    }

    next();
};

module.exports = {
    fieldsCustomers,
    fieldsEventos,
    fieldsPatchEventos,
    fieldsPatchCustomers
}