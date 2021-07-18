var express = require('express');
const router = express.Router();

const newTableController = require('../controllers/newTable.controller');

router.get('/',newTableController.getList);

module.exports = router;