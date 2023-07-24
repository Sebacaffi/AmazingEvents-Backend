const express = require('express');
const { getCustomers, getOneCustomer, createCustomer, updateCustomer, updateParamCustomer ,deletedCustomer } = require('../controllers/customer.Controller');
const {fieldsCustomers, fieldsPatchCustomers} = require('../middlewares/validations')

const router = express.Router();

router.get("/customers", getCustomers)
router.get("/customers/:id", getOneCustomer)
router.post("/customers", fieldsCustomers, createCustomer)
router.put("/customers/:id", fieldsCustomers, updateCustomer)
router.patch("/customers/:id", fieldsPatchCustomers, updateParamCustomer)
router.delete("/customers/:id", deletedCustomer)

module.exports = router;