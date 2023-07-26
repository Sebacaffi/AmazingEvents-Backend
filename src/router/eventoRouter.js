const express = require('express');
const { getEvents, createEvent, deletedEvent, updateEvent, getOneEvent, updateParamEvent } = require('../controllers/evento.Controller');
const {fieldsEventos, fieldsPatchEventos} = require('../middlewares/validations')
const { authenticateToken } = require('../middlewares/auth')

const router = express.Router();

router.get("/eventos", authenticateToken, getEvents)
router.get("/eventos/:id", authenticateToken, getOneEvent)
router.post("/eventos", authenticateToken, fieldsEventos, createEvent)
router.put("/eventos/:id", authenticateToken, fieldsEventos, updateEvent)
router.patch("/eventos/:id", authenticateToken, fieldsPatchEventos, updateParamEvent)
router.delete("/eventos/:id", authenticateToken, deletedEvent)

module.exports = router;