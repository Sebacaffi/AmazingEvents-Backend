const express = require('express');
const { loginCustomer, logoutCustomer } = require('../controllers/auth.Controller');

const router = express.Router();

router.post("/login", loginCustomer)
router.post("/logout", logoutCustomer)

module.exports = router;