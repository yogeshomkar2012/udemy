const express = require('express');
const app = express();
const port = 2000;
app.get('/', (req, res) => {
  res.status(200).send('hellls')
});

app.listen(port);
