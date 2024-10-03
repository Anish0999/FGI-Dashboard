const express = require('express');
const { getAllEvents, addEvent, deleteEvent } = require('../controllers/dashboardController')

const router = express.Router();

// Get ALL events
router.get('/', getAllEvents)

// Add an event
router.post('/', addEvent)

// Delete an event
router.delete('/:id', deleteEvent)









module.exports = router;