const Product = require('../models/product');

exports.getAddProuduct = (req, res, next) => {
  res.render('admin/add-product', {
    pageTitle: 'Add Product',
    path: '/admin/add-product',
  });
};

exports.postAddProduct = (req, res, next) => {
  const title = req.body.title;
  const imgUrl = req.body.imgUrl;
  const price = req.body.price;
  const desc = req.body.desc;
  const product = new Product(title, imgUrl, price, desc);
  product.save();
  res.redirect('/admin/products');
};

exports.getProducts = (req, res, next) => {
  Product.fetchAll(products => {
    res.render('admin/products', {
      prods: products,
      pageTitle: 'Add Product',
      path: '/admin/products',
    });
  });
};

// exports.getProducts = ()
