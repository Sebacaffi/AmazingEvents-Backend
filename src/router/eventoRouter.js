const express = require('express');
const { getEvents, createEvent, deletedEvent, updateEvent, getOneEvent, updateParamEvent } = require('../controllers/evento.Controller');
const {fieldsReqEventos} = require('../middlewares/validations')

const router = express.Router();

router.get("/eventos", getEvents)
router.get("/eventos/:id", getOneEvent)
router.post("/eventos", fieldsReqEventos, createEvent)
router.put("/eventos/:id", fieldsReqEventos, updateEvent)
router.patch("/eventos/:id", updateParamEvent)
router.delete("/eventos/:id", deletedEvent)

module.exports = router;