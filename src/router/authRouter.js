const express = require('express');
const { loginCustomer, logoutCustomer } = require('../controllers/auth.Controller');
const { authenticateToken } = require('../middlewares/auth')

const router = express.Router();

router.post("/login", loginCustomer)
router.post("/logout", authenticateToken, logoutCustomer)

module.exports = router;