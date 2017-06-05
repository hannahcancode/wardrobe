var express = require('express');
var router = express.Router();

// const Item = require('../models/Item');
const APIController = require('../controllers/APIcontroller');


router.get('/', APIController.getItems);
router.post('/new', APIController.createItem);
router.post('/:id/edit', APIController.editItems);
router.post('/:id/addcat', APIController.addCategory);
router.get('/:id', APIController.getSingleItem);
router.delete('/:id/delete', APIController.deleteItems);

module.exports = router;
