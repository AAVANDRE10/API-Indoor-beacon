const express = require('express');
const router = express.Router();
const matrix = require('../controllers/matrix');

/**
 * @swagger
 * /api/matrices/matrices:
 *   get:
 *     summary: Returns all matrices
 *     responses:
 *       200:
 *         description: Success
 */
router.get('/matrices', matrix.getAllMatrices);

/**
 * @swagger
 * /api/matrices/matrices/{id}:
 *   get:
 *     summary: Returns a specific array by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID matrix
 *     responses:
 *       200:
 *         description: Success
 */
router.get('/matrices/:id', matrix.getMatrixById);

module.exports = router;