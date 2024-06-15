const express = require('express');
const router = express.Router();
const billingController = require('../../controller/billing')

router.get('/billing', billingController.billing);

module.exports = router;