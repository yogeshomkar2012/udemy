const express = require('express');

const router = express.Router();

const shopController = require('../controller/shop');

router.get('/', shopController.getIndex);

router.get('/products', shopController.getProducts);
router.get('/cart', shopController.getCart);
router.get('/orders', shopController.getOrders);
router.get('/checkout',shopController.getCheckOut)

module.exports = router;