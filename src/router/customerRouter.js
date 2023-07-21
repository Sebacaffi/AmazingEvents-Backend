const express = require('express');
const { getCustomers, getOneCustomer, createCustomer, updateCustomer, updateParamCustomer ,deletedCustomer } = require('../controllers/customer.Controller');
const {fieldsReqCustomers} = require('../middlewares/validations')

const router = express.Router();

router.get("/customers", getCustomers)
router.get("/customers/:id", getOneCustomer)
router.post("/customers", fieldsReqCustomers, createCustomer)
router.put("/customers/:id", fieldsReqCustomers, updateCustomer)
router.patch("/customers/:id", updateParamCustomer)
router.delete("/customers/:id", deletedCustomer)

module.exports = router;