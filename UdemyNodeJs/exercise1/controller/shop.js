const Product = require('../models/product');
exports.getIndex = (req, res, next) => {
  Product.fetchAll(products => {
    res.render('shop/index', {
      prods: products,
      pageTitle: 'Home Page',
      path: '/',
    });
  });
};
exports.getProducts = (req, res, next) => {
  Product.fetchAll(products => {
    res.render('shop/products', {
      prods: products,
      pageTitle: 'All Products',
      path: '/products',
    });
  });
};
exports.getCart = (req, res, next) => {
  res.render('shop/cart', {
    pageTitle: 'Your Cart',
    path: '/cart',
  });
};
exports.getOrders = (req, res, next) => {
  res.render('shop/orders', {
    pageTitle: 'Your orders',
    path: '/orders',
  });
};
exports.getCheckOut = (req,res,next) => {
  res.render('shop/checkout', {
    pageTitle: 'Checkout',
    path:"/checkout"
  })
}
