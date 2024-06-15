require('dotenv').config();
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const dbconnect = require('./db/connectdb');
const web = require('./routes/web');
const port = process.env.PORT || 5000;
const connStrin = process.env.DB_URL;

// db connection

// defalut engie setting
app.set('view engine', 'ejs');
app.set('views', 'views');

// static files
app.use(express.static(path.join(__dirname, 'public')));
app.use('/edit', express.static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({ extended: false }));
// app.use(express.urlencoded({ extended: true }));
app.use(web);

dbconnect(connStrin);
app.listen(port, () => {
  console.log(`server started at : http://localhost:${port}`);
});
