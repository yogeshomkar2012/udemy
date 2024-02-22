const express = require('express');
const app = express();
const adminRoutes = require('./routes/admin');
const shopRouter = require('./routes/shop');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
// app.use('/add-product', (req, res, next) => {
//   res.send(
//     "<form action='/product' method='POST'><input type='text' name='title'><button type='submit'>Add Product</button></form>"
//   );
// });
// app.post('/product', (req, res, next) => {
//   console.log(req.body);
//   res.redirect('/');
// });
app.use(adminRoutes);
// app.use('/', (req, res, next) => {
//   res.send('<h1>hello from expresssss!</h1>');
// });
app.use(shopRouter);
app.listen(2000);