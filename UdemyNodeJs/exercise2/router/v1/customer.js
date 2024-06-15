const express = require('express');
const router = express.Router();
const customerController = require('../../controller/customer')

router.get('/customer', customerController.customer);

module.exports = router;