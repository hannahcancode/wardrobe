const express = require('express');
const controller = require('../controllers/controller');

const router = express.Router();

router.get('/', controller.getItems);
router.post('/', controller.newItem);


module.exports = router;
