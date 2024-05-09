const fs = require('fs');
const path = require('path');

module.exports = class Product {
  constructor(t) {
    this.title = t;
  }
  save() {
    //////////////// file path //////////////
    const p = path.join(
      path.dirname(process.mainModule.filename),
      'data',
      'products.json'
    );
    // read file content and save file //
    fs.readFile(p, (err, fileContent) => {
      let products = [];
      if (!err) {
        products = JSON.parse(fileContent);
      }
      products.push(this);
      fs.writeFile(p, JSON.stringify(products), err => {
        console.log(err);
      });
    });
    // products.push(this);
  }
  static fetchAll() {
    const p = path.join(
      path.dirname(process.mainModule.filename),
      'data',
      'products.json'
    );
    fs.readFile(p, (err, fileContent) => {
      if (err) {
        return [];
      }
      return JSON.parse(fileContent);
    });
  }
};
