const path = require('path');
const fs = require('fs');
const rootDirectory = require('../util/path');

const p = path.join(rootDirectory, 'data', 'product.json');
const getProductsFromFile = cb => {
  fs.readFile(p, (err, fileContent) => {
    if (err) {
      cb([]);
    }
    cb(JSON.parse(fileContent));
  });
};
module.exports = class Product {
  constructor(title, imgUrl, desc, price) {
    this.title = title;
    this.imgUrl = imgUrl;
    this.desc = desc;
    this.price = price;
  }
  save() {
    getProductsFromFile(products => {
      products.push(this);
      fs.writeFile(p, JSON.stringify(products), err => {
        console.log(err);
      });
    });
  }
  static fetchAll(cb) {
   
    getProductsFromFile(cb);
  }
};
