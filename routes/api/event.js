const express = require('express');
const router = express.Router();
const passport = require('passport');
const Event = require('../../models/Event');
const validateCreateEvent = require('../../validation/create_event');


// @route   GET api/event/home
// @desc    Fetch events
// @access  Public
router.get('/home', (req, res) => {
  Event.find({}).populate('author', 'first_name').exec((err, events) => res.json(events))
});

// @route   POST api/event/create-event
// @desc    Create event
// @access  Private
router.post('/create-event', passport.authenticate('jwt'), (req, res) => {
  const { title, date, city, location, description, author } = req.body;
  const event = new Event({ title, date, city, location, description, author });
  
  const { errors, isValid } = validateCreateEvent(req.body);
  if (!isValid) return res.status(400).json(errors);

  event.save()
    .then(({ _id }) => {
      Event.findById(_id).populate('author', 'first_name').exec((err, evt) => res.json(evt))
    })
    .catch(err => res.status(400).json({ error: 'Ooops' }));
});

// @route   POST api/event/join-event
// @desc    Join Event
// @access  Private
router.post('/join-event', passport.authenticate('jwt'), (req, res) => {
  const { evt_id, user } = req.body;
  Event.findByIdAndUpdate(evt_id, 
    { $addToSet: { members: user } }, 
    { upsert: true, new: true })
    .populate('author', 'first_name').exec((err, evt) => {
      if(err) return res.status(400).json({ error: 'Ooops' });
      res.json(evt)
    })
});

// @route   POST api/event/leave-event
// @desc    Leave Event
// @access  Private
router.post('/leave-event', passport.authenticate('jwt'), (req, res) => {
  const { evt_id, user: { user_id } } = req.body;
  Event.findByIdAndUpdate(evt_id, 
    { $pull: { members: { user_id } } }, 
    { upsert: true, new: true })
    .populate('author', 'first_name').exec((err, evt) => {
      if(err) return res.status(400).json({ error: 'Ooops' });
      res.json(evt)
    })
});

// @route   Update api/event/home/:id/manage-event/update
// @desc    Update Event
// @access  Private
router.post('/home/:id/manage-event/update', passport.authenticate('jwt'), (req, res) => {
  const { _id, title, date, city, location, description } = req.body;
  Event.findByIdAndUpdate(_id,
    { title, date, city, location, description },
    { upsert: true, new: true })
    .populate('author', 'first_name').exec((err, evt) => {
      if(err) return res.status(400).json({ error: 'Ooops' });
      res.json(evt)
    })
})

// @route   Delete api/event/home/:id/manage-event
// @desc    Delete Event
// @access  Private
router.post('/home/:id/manage-event', passport.authenticate('jwt'), (req, res) => {
  const { _id } = req.body;
  Event.findByIdAndDelete(_id, (err, evt) =>{
    if(err) return res.status(400).json({ error: 'Ooops' });
    res.json(evt)
  });
});

module.exports = router;