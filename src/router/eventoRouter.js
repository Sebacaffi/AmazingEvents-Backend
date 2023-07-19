const express = require('express');
const { getEvents, createEvent, deletedEvent, updateEvent, getOneEvent, updateParamEvent } = require('../controllers/evento.Controller');

const router = express.Router();

router.get("/eventos", getEvents)
router.get("/eventos/:id", getOneEvent)
router.post("/eventos", createEvent)
router.put("/eventos/:id", updateEvent)
router.delete("/eventos/:id", deletedEvent)
router.patch("/eventos/:id", updateParamEvent)

module.exports = router;