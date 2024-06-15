const path = require('path');
const express = require('express');
const app = express();
////////////////////////////////////

////////////////////////////////////
const rooteFolder = require('./util/path');
////////////////////////////////////

////////////////////////////////////
const agentRoute = require('./router/v1/agent');
const customerRoute = require('./router/v1/customer');
const billingRoute = require('./router/v1/billing');
const adminRoute = require('./router/v1/admin');
const indexRoute = require('./router/v1/index');
////////////////////////////////////

////////////////////////////////////
app.set('view engine', 'ejs');
app.set('views', 'views');
////////////////////////////////////

////////////////////////////////////
app.use(express.static(path.join(rooteFolder, 'public')));
////////////////////////////////////

////////////////////////////////////
app.use('/v1', agentRoute);
app.use('/v1', customerRoute);
app.use('/v1', billingRoute);
app.use('/v1', adminRoute);

app.use('/v1', indexRoute);

app.use('/v1', (req, res, next) => {
  res.send(`<h1>Page Not Found</h1>`);
});
////////////////////////////////////

////////////////////////////////////
app.listen(2000);
////////////////////////////////////
