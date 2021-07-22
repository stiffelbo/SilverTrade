const express = require('express');
const router = express.Router();

const coinsController = require('../controllers/coins.controller');

router.get('/products/', coinsController.getAll);
router.get('/products/:id', coinsController.getById);

module.exports = router;