const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();


const routeFolder = require('./util/path');
const adminRouts = require('./routes/admin');
const shopRoutes = require('./routes/shop');


///////////////////////////////
app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(bodyParser.urlencoded({extended:false}))
app.use(express.static(path.join(routeFolder, 'public')));
///////////////////////////////

app.use('/admin', adminRouts);
app.use(shopRoutes);

app.listen(3000);
