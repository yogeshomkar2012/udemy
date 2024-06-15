require('dotenv').config();
const mongoose = require('mongoose');
const express = require('express');
const session = require('express-session');
const user = require('./routes/routes')
const app = express();
const PORT = process.env.PORT || 4000;


// db connection
const connectionURL = mongoose.connect(process.env.DB_URI);
const db = mongoose.connection;
db.on('error', error => {
  console.log(error);
});
db.once('open', () => {
  console.log('connected to Db');
});
// db connection
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.set('view engine', 'ejs');
app.set('views', 'views');
app.use(
  session({
    secret: 'my-secret-key',
    resave: false,
    saveUninitialized: false,
  })
);
app.use((req, res, next) => {
  res.locals.message = req.session.message;
  delete req.session.message;
  next();
});



app.use(user);

app.listen(PORT, () => {
  console.log(`server start : http://localhost:${PORT}`);
});
