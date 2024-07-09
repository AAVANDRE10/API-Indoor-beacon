const express = require('express');
const router = express.Router();
const matrix = require('../controllers/matrix');

router.get('/matrices', matrix.getAllMatrices);
router.get('/matrices/:id', matrix.getMatrixById);

module.exports = router;