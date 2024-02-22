const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended:true}));
app.use('/add-product', (req, res, next) => {
  res.send(
    "<form action='/product' method='POST'><input type='text' name='title'><button type='submit'>Add Product</button></form>"
  );
});
app.use('/product', (req, res, next) => {
  console.log(req.body);
  res.redirect('/');
});
app.use('/', (req, res, next) => {
  res.send('<h1>hello from express!</h1>');
});

app.listen(2000);