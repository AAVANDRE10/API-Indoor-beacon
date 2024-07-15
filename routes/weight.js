const express = require('express');
const router = express.Router();
const weight = require('../controllers/weight');

/**
 * @swagger
 * /api/weights/weights:
 *   get:
 *     summary: Returns all weights
 *     responses:
 *       200:
 *         description: Success
 */
router.get('/weights', weight.getAllWeights);

module.exports = router;