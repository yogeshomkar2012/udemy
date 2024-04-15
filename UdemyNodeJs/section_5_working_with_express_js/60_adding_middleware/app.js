const http = require('http');
const express = require('express');

const app = express();

app.use((req, res, next) => {
  console.log('hello');
  next();
});
app.use((req, res, next) => {
    console.log('hello');
});

const server = http.createServer(app);

server.listen(4000);
