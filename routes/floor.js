const express = require('express');
const router = express.Router();
const floor = require('../controllers/floor');

/**
 * @swagger
 * /api/floors/floors:
 *   get:
 *     summary: Returns all floors
 *     responses:
 *       200:
 *         description: Success
 */
router.get('/floors', floor.getAllFloors);

/**
 * @swagger
 * /api/floors/floors/{id}:
 *   get:
 *     summary: Returns a specific floor by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID do andar
 *     responses:
 *       200:
 *         description: Success
 */
router.get('/floors/:id', floor.getFloorById);

module.exports = router;