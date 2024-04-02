const express = require('express');
const app = express();
const port = 2000;

app.get('/', (req, res, next) => {
  res.send('get');
});
app.post('/posts', (req, res, next) => {
  res.send('post');
});
app.put('/put', (req, res, next) => {
  res.send('put');
});
app.delete('/delete', (req, res, next) => {
  res.send('delete');
});

app.listen(port);
