const express = require('express');
const router = express.Router();

const user = require('./user.js');
const thought = require('./thought.js');
const reaction = require('./reaction.js');

router.use('/users', user);
router.use('/thoughts', thought);
router.use('/reactions', reaction);

module.exports = router;