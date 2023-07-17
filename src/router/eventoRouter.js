const express = require('express');
const { getEvents, createEvents } = require('../controllers/evento.Controller');

const router = express.Router();

router.get("/eventos", getEvents)
router.post("/eventos", createEvents)

module.exports = router;