const express = require('express');
const { LoginCustomer } = require('../controllers/auth.Controller');

const router = express.Router();

router.post("/login", LoginCustomer)

module.exports = router;