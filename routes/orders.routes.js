const express = require('express');
const router = express.Router();

const ordersController = require('../controllers/orders.controller');

router.get('/orders/', ordersController.getAll);
router.post('/orders/', ordersController.postOne);

module.exports = router;