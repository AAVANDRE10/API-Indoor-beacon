const express = require('express');
const router = express.Router();
const floor = require('../controllers/floor');

router.get('/floors', floor.getAllFloors);
router.get('/floors/:id', floor.getFloorById);

module.exports = router;