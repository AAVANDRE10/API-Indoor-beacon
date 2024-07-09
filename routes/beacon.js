const express = require('express');
const router = express.Router();
const beacon = require('../controllers/beacon');

router.get('/beacons', beacon.getAllBeacons);

module.exports = router;