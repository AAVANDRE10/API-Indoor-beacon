const router = require('express').Router();
const floorRouter = require('./floor');
const matrixRouter = require('./matrix');
const weightRouter = require('./weight');
const beaconRouter = require('./beacon');

router.use('/floors', floorRouter);
router.use('/matrices', matrixRouter);
router.use('/weights', weightRouter);
router.use('/beacons', beaconRouter);

module.exports = router;