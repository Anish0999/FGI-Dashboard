const eventModel = require('../models/eventModel');
const mongoose = require('mongoose');

// Get ALL Events
const getAllEvents = async (req, res) => {
    const events = await eventModel.find({})
    res.status(200).json(events)
}

// Add an Event
const addEvent = async (req, res) => {

    const {name, date, location} = req.body;

    try {
        const event = await eventModel.create({name, date, location});
        res.status(200).json(event);
    }
    catch(error) {
        res.status(400).json({error: error.message})
    }
}

// Delete an Event
const deleteEvent = async (req, res) => {

    const {id} = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No such event'})
    }

    const event = await eventModel.findOneAndDelete({_id: id});

    if(!event){
        return res.status(404).json({error: 'No such event'})
    }

    res.status(200).json(event);
}

module.exports = {getAllEvents, addEvent, deleteEvent}