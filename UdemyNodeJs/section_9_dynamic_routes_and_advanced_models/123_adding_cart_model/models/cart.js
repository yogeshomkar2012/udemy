// 123_adding_cart_model
const fs = require('fs');
const path = require('path');

const rootDirectry = require('../util/path');
const p = path.join(rootDirectry, 'data', 'cart.json');

module.exports = class Cart {
  static addProdut(id, productPrice) {
    // fetch the previous cart
    fs.readFile(p, (err, fileContent) => {
      let cart = { products: [], price: 0 };
      if (!err) {
        cart = JSON.parse(fileContent);
      }
      // analyze the cart => find existing product
        const existingProductIndex = cart.products.findIndex(prod => prod.id === id);
        const existingProduct = cart.products[existingProductIndex]
      //  add new product / increase quntity
      let updatedProduct;
      if (existingProduct) {
        updatedProduct = { ...existingProduct };
          updatedProduct.qty = updatedProduct.qty + 1;
          cart.products = [...cart.products];
          cart.products[existingProductIndex] = updatedProduct;
      } else {
          updatedProduct = { id: id, qty: 1 };
          cart.products = [...cart.products, updatedProduct]
      }
        cart.totalPrice = cart.totalPrice + +productPrice;
        fs.writeFile(p, JSON.stringify(cart), (err) => {
            console.log(err)
        })
    });
  }
};
