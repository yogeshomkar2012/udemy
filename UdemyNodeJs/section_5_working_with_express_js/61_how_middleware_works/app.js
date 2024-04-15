const express = require('express');

const app = express();

// app.use((req, res, next) => {
//   console.log('hello');
//   next();
// });
app.use((req, res, next) => {
  res.send('<h1>middle ware</h1>');
});

app.listen(4000);
