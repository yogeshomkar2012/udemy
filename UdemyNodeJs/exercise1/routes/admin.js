const express = require('express');
const router = express.Router();
const adminController = require('../controller/admin');
router.get('/add-product', adminController.getAddProuduct);
router.get('/products',adminController.getProducts)
router.post('/add-product', adminController.postAddProduct)
module.exports = router;