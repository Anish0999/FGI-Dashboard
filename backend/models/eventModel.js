const mongoose = require('mongoose');

const eventsSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    info: {
        type: String,
        required: true
    },
    rsvp: {
        type: Boolean,
        required: true
    }
})

module.exports = mongoose.model('Events', eventsSchema)