const express = require('express');
const app = express();
app.use('/add-product', (req, res, next) => {
  console.log('in middleware');
  res.send('<h1>hell0 add product express</h1>');
});
app.use('/', (req, res, next) => {
  console.log('in middleware');
  res.send('<h1>hell from express</h1>');
});
app.listen(2000);
