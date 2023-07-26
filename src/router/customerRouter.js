const express = require('express');
const { getCustomers, getOneCustomer, createCustomer, updateCustomer, updateParamCustomer ,deletedCustomer } = require('../controllers/customer.Controller');
const {fieldsCustomers, fieldsPatchCustomers} = require('../middlewares/validations')
const { authenticateToken } = require('../middlewares/auth')

const router = express.Router();

router.get("/customers", authenticateToken, getCustomers)
router.get("/customers/:id", authenticateToken, getOneCustomer)
router.post("/customers", fieldsCustomers, createCustomer)
router.put("/customers/:id", authenticateToken, fieldsCustomers, updateCustomer)
router.patch("/customers/:id", authenticateToken, fieldsPatchCustomers, updateParamCustomer)
router.delete("/customers/:id", authenticateToken, deletedCustomer)

module.exports = router;