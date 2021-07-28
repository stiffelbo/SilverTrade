const express = require('express');
const router = express.Router();

const commentsController = require('../controllers/comments.controller');

router.get('/comments/', commentsController.getAll);
router.get('/comments/:id', commentsController.getById);
router.get('/comments/coin/:id', commentsController.getByCoinId);
router.post('/comments/', commentsController.postOne);
router.delete('/comments/:id', commentsController.deteleById);

module.exports = router;