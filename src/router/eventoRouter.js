const express = require('express');
const { getEvents, createEvents, deletedEvents, updateEvents } = require('../controllers/evento.Controller');

const router = express.Router();

router.get("/eventos", getEvents)
router.post("/eventos", createEvents)
router.put("/eventos", updateEvents)
router.delete("/eventos", deletedEvents)

module.exports = router;