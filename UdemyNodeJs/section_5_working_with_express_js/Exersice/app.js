const path = require('path');
const express = require('express');
const app = express();

const directriName = require('./util/path');
const adminRouter = require('./routes/admin');
const shopRouter = require('./routes/shop');

///////////////////////
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

////////////////////// css files //////////////////////
app.use(express.static(path.join(directriName, 'public')));

/////////////////////
app.use('/admin', adminRouter);
app.use(shopRouter);
app.use((req, res, next) => {
  res.send('<h1>page not found</h1>');
});

///////////////////
app.listen(3000);
