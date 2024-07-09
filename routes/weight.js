const express = require('express');
const router = express.Router();
const weight = require('../controllers/weight');

router.get('/weights', weight.getAllWeights);

module.exports = router;