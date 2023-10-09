//this file will have my endpoints
const express = require('express');
const router = express.Router();

//router.use('/', require('./swagger'));
router.use('/reviews', require('./reviews'))

module.exports = router;