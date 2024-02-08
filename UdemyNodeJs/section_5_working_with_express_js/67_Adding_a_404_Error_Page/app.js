const express = require('express');
const app = express();
const adminRoutes = require('./routes/admin');
const shopRouter = require('./routes/shop');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(adminRoutes);
app.use(shopRouter);
app.use((req, res, next) => {
    res.status(404).send("<h1>page not found</h1>")
})




app.listen(2000);
