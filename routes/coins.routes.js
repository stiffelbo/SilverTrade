const express = require('express');
const router = express.Router();

const coinsController = require('../controllers/coins.controller');

router.get('/coins/', coinsController.getAll);

module.exports = router;