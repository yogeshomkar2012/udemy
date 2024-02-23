const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
const erroController = require('./controllers/erro');
const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const admiRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', admiRoutes);
app.use(shopRoutes);

app.use(erroController.get404);

app.listen(3000);
