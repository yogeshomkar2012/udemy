const express = require('express');
const app = express();
const adminRoutes = require('./routes/admin');
const shopRouter = require('./routes/shop');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(adminRoutes);
app.use(shopRouter);
app.listen(4000);
