const http = require('http');
const express = require('express');

const app = express();

// app.use((req, res, next) => {
//   console.log('hello');
//   next();
// });
app.use((req, res, next) => {
  res.send('<h1>middle ware</h1>');
});

const server = http.createServer(app);

server.listen(4000);
