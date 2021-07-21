const express = require('express');
const router = express.Router();

const coinsController = require('../controllers/coins.controller');

router.get('/coins/', coinsController.getAll);
router.get('/coins/sale', coinsController.getSale);
router.get('/coins/:id', coinsController.getById);
router.delete('/coins/:id', coinsController.deteleById);

module.exports = router;