const express = require('express');
const { getEvents, createEvent, deletedEvent, updateEvent, getOneEvent, updateParamEvent } = require('../controllers/evento.Controller');
const {fieldsEventos, fieldsPatchEventos} = require('../middlewares/validations')

const router = express.Router();

router.get("/eventos", getEvents)
router.get("/eventos/:id", getOneEvent)
router.post("/eventos", fieldsEventos, createEvent)
router.put("/eventos/:id", fieldsEventos, updateEvent)
router.patch("/eventos/:id", fieldsPatchEventos, updateParamEvent)
router.delete("/eventos/:id", deletedEvent)

module.exports = router;