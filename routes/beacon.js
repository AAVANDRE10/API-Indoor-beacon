const express = require('express');
const router = express.Router();
const beacon = require('../controllers/beacon');

/**
 * @swagger
 * /api/beacons/beacons:
 *   get:
 *     summary: Returns all beacons
 *     responses:
 *       200:
 *         description: Success
 */
router.get('/beacons', beacon.getAllBeacons);
router.get('/beacons/by-size', beacon.getBeaconsByMatrixSize);

/**
 * @swagger
 * /api/beacons/matrices/{matrixId}/beacons:
 *   get:
 *     summary: Returns beacons for a specific array
 *     parameters:
 *       - in: path
 *         name: matrixId
 *         required: true
 *         schema:
 *           type: string
 *         description: ID matrix
 *     responses:
 *       200:
 *         description: Success
 */
router.get('/matrices/:matrixId/beacons', beacon.getBeaconsForMatrix);

module.exports = router;