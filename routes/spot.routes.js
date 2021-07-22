const express = require('express');
const router = express.Router();

const spotController = require('../controllers/spot.controller');

router.get('/xagusd/', spotController.getUsd);

module.exports = router;