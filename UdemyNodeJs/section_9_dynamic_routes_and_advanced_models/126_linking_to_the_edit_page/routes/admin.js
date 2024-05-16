const path = require('path');

const express = require('express');

const adminController = require('../controllers/admin');

const router = express.Router();

/////////////////////////////////////////

// /admin/add-product => GET
router.get('/add-product', adminController.getAddProduct);

// /admin/products => GET
router.get('/products', adminController.getProducts);


// /admin/edit-product/:productId => GET
router.get('/edit-product/:productId', adminController.getEditProduct);

// /admin/add-product => POST
router.post('/add-product', adminController.postAddProduct);

// 126_linking_to_the_edit_page 
router.post('/edit-product',adminController.getEditProduct);

/////////////////////////////////////////

module.exports = router;
