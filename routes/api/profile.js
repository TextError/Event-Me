const express = require('express');
const router = express.Router();
const passport = require('passport');
const User = require('../../models/User');
const Profile = require('../../models/Profile');
const validateBasic = require('../../validation/basic');


// @route   POST /api/profile/basic
// @desc    Update User Basic Info
// @access  Private
router.post('/basic', passport.authenticate('jwt'), (req, res) => {
  const { last_name, first_name, gender, birthday, town } = req.body;
  const { _id } = req.user;
  const { errors, isValid } = validateBasic(req.body);
  if (!isValid) return res.status(400).json(errors);

  const user = User.findByIdAndUpdate(_id, { first_name, last_name }, { new: true });
  const profile = Profile.findOneAndUpdate({user_id: _id}, { gender, birthday, town }, { new: true });

  Promise.all([user, profile])
    .then(() => 
      User.findById(_id, 'first_name last_name email date')
      .populate('profile', '_id gender birthday town').exec((err, user) => {
      if(err) return res.status(400).json({ error: 'Ooops'})
      res.json(user)
    }))
    .catch(err => res.status(400).json({ error: 'Ooops'}));
});

module.exports = router;